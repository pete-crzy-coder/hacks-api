# 🎮 BoredGames

### By craz4c0mput3r

A sleek, draggable, and stealthy overlay that lets you play your favorite Scratch games directly on top of any webpage. Built with vanilla JavaScript, this lightweight script injects a fully functional mini-console into your browser with built-in "boss key" features.

After ~2.5 years of development, learning, and refining, BoredGames features a polished dark-themed UI, custom font support, and persistent local storage for your custom game library.

## ✨ Features

- **Floating & Draggable UI**: Click and drag the header to move the game window anywhere on your screen so it's never in the way of your actual work.

- **Stealth Mode (Boss Key)**: Instantly hide or show the entire interface with a single keyboard shortcut.

- **Kill Switch**: Need to remove evidence quickly? Completely destroy the UI and wipe the injected styles from the page instantly.

- **Custom Game Library**: Don't just play the defaults! Click the `+` button to add any Scratch project to your library using its Project ID.

- **Persistent Storage**: Your custom-added games are saved locally to your browser (localStorage), so they'll be there waiting for you the next time you load the script on that site.

- **Modern Aesthetic**: Features a clean, dark-mode design with smooth hover effects, custom shadows, and the Bogrod (JK! 0xProto NerdFont) typeface.

## ⌨️ Controls & Hotkeys

- `Ctrl + Y` : **Toggle Visibility** (Quickly hide/show the overlay)

- `Ctrl + X` : **Kill Switch** (Completely remove the overlay and styles from the DOM)

- **Drag Header** : Move the window around the screen

- `+` **Button** : Add a new game to the dropdown menu. You will be prompted for:

  1. The Scratch **Project ID** (e.g., 60917032)

  2. The **Label/Name** for the game

## 🚀 How It Works

The script is designed to be injected into a webpage (often used as a bookmarklet or via a browser extension). It uses Vanilla JavaScript to dynamically create and append the necessary HTML and CSS structures to the document.

To avoid cluttering the global namespace and bypassing some basic security checks, it cleverly mounts its temporary UI components before attaching them to the document body. It leverages Scratch's embed URL structure (https://scratch.mit.edu/projects/{ID}/embed) to load games seamlessly inside an iframe.

## 📦 Default Games Included

- Appel (ID: 60917032)

- Paper Minecraft (ID: 10128407)

- Platformer (ID: 612229554)

*Created by craz4c0mput3r*
