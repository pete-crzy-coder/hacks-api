# 🛠️ XHR Interceptor (Data Inspector)
### By craz4c0mput3r
A high-level utility script designed to intercept and parse background network traffic. This tool specifically targets XMLHttpRequest (XHR) to monitor data exchange between a web application and its server, providing real-time insights into structured JSON responses.
This project represents a deep dive into JavaScript prototypes and asynchronous network handling.
## ✨ Key Features
- Request Interception: Overrides the global window.XMLHttpRequest object to hook into the open and send methods without breaking existing site functionality.
- Targeted Filtering: Uses intelligent URL and Method filtering to only process specific POST requests, ensuring minimal performance overhead.
- Dynamic Data Extraction: Automatically detects and parses JSON responses, extracting specific fields like Answers, DropTargetID, and Correct status.
- Interactive UI Injection: Injects the extracted data directly into the page's navigation (targeting the "Times Tables" link) as a toggleable overlay.
- State Persistence: Includes a toggle mechanism to switch between the original UI text and the intercepted raw data with a single click.
## ⌨️ How to Use
1. **Inject the Script**: Run the script via a browser console or userscript manager while on the target application.
2. **Trigger Data Flow**: Interact with the application (e.g., start a question set or move to the next interactive element).
3. **View Results**: Locate the Times Tables link in the navigation bar. Click it to reveal the intercepted data (Answers, Drop Targets, etc.). Click it again to hide the data.
## 🚀 Technical Deep-Dive
This script uses a technique known as Monkey Patching. By saving a reference to the original `XMLHttpRequest` constructor and replacing it with a custom version, the script can:
- Listen for `load` events on background requests.
- Access `this.responseText` before the application processes it.
- Map and filter complex nested JSON objects into a human-readable format.
- Use `Object.entries` and `map` to transform data objects into HTML-safe strings for display.
## ⚠️ Technical Challenges Overcome
- **Prototype Preservation**: Ensuring `C.prototype = O.prototype` so that the modified constructor still behaves like a standard XHR object.
- **JSON Handling**: Managing nested `JSON.parse` calls, as some data fields are delivered as stringified JSON within a larger JSON object.
- **DOM Synchronization**: Waiting for specific elements to exist in the DOM before attempting to bind the custom click handlers.

*Created by craz4c0mput3r*
