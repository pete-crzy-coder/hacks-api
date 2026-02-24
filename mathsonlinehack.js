(function () {

  const OriginalXHR = window.XMLHttpRequest;

  function CustomXHR() {
    const xhr = new OriginalXHR();
    const originalOpen = xhr.open;
    const originalSend = xhr.send;

    let shouldIntercept = false;

    xhr.open = function (method, url, ...rest) {
      this._method = method;
      this._url = url;

      shouldIntercept =
        method === "POST" &&
        (
          url.startsWith("/ajax/svg_interactives/startQuestionSet") ||
          url.startsWith("/ajax/svg_interactives/getNextSvgInteractive")
        );

      return originalOpen.call(this, method, url, ...rest);
    };

    xhr.send = function (...args) {

      if (shouldIntercept) {

        this.addEventListener("load", function () {
          try {

            const json = JSON.parse(this.responseText);

            const components = json.components
              .map(component => {

                const data = JSON.parse(component.Data);
                const extracted = {};

                if ("Answers" in data) {
                  extracted.ans = data.Answers;
                }

                if ("DropTargetID" in data) {
                  extracted.droptarget =
                    data.DropTargetID !== "0"
                      ? data.DropTargetID
                      : "none";
                }

                if ("Correct" in data) {
                  extracted.correct = data.Correct;
                }

                return Object.keys(extracted).length
                  ? extracted
                  : null;
              })
              .filter(Boolean);

            const link = document.querySelector(
              'a[href="/students/game/times_tables"][title="Times Tables"]'
            );

            if (link) {

              let toggled = false;
              const originalText = "Times Tables";

              const formattedAnswers = components
                .map(obj =>
                  Object.entries(obj)
                    .map(([key, value]) => {
                      const capitalized =
                        key.charAt(0).toUpperCase() + key.slice(1);

                      return capitalized + ": " +
                        (typeof value === "object"
                          ? JSON.stringify(value)
                          : value);
                    })
                    .join("<br>")
                )
                .join("<br>");

              link.innerHTML = originalText;

              link.onclick = function (event) {
                event.preventDefault();
                toggled = !toggled;
                link.innerHTML = toggled
                  ? formattedAnswers
                  : originalText;
              };
            }

          } catch (error) {
            console.warn(
              "Could not parse responseText as JSON",
              error
            );
          }
        });
      }

      return originalSend.apply(this, args);
    };

    return xhr;
  }

  CustomXHR.prototype = OriginalXHR.prototype;
  window.XMLHttpRequest = CustomXHR;

})();
