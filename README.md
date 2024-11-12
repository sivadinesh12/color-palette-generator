# 🎨 Color Palette Generator

A Color Palette Generator web application built with React that allows users to generate random color palettes, save their favorite colors, copy hex codes to the clipboard, and manage saved colors with ease. The saved palettes persist in the browser's local storage, so your favorite colors are always available even after refreshing the page.

# 🛠️ Features
- Generate Random Colors: Generate a palette of 5 random colors with a single click.
- Save Colors: Save your favorite colors to the local storage for future use.
- Delete Saved Colors: Remove saved colors easily.
- Copy to Clipboard: Click on a color to copy its hex code to the clipboard.
- Persistent Storage: Saved colors are stored in local storage, ensuring they persist across sessions.
- Responsive Design: The application is optimized for both desktop and mobile screens.

# 📂 Project Structure
  ```bash 
  ├── public
  │   └── index.html
  ├── src
  │   ├── components
  │   │   ├── ColorGenerator.js
  │   │   └── PaletteItem.js
  │   ├── App.js
  │   ├── index.js
  │   ├── index.css
  │   └── utils
  │       └── randomColor.js
  ├── .gitignore
  ├── package.json
  └── README.md
  ```

# 🚀 Getting Started
Follow the steps below to get the project up and running on your local machine.

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation
1. Clone the Repository

    ```bash
    git clone https://github.com/your-username/color-palette-generator.git
    cd color-palette-generator
    ```
2. Install Dependencies

    ```bash
    npm install
    # or
    yarn install
    ```
3. Start the Development Server

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open in Browser

    Visit http://localhost:3000 to view the app.


# 🧩 Components Breakdown

1. ColorGenerator.js
  This is the main component responsible for generating color palettes, displaying saved palettes, and managing state.

- State Variables:

  - colorPalettes: Stores the array of randomly generated colors.
  - savedColors: Stores the list of colors saved by the user.
  - isGenerated: A boolean flag to check if colors have been generated.

- Key Functions:

  - randomColorGenerator: Generates a new set of random colors.
  - useEffect: Fetches saved colors from local storage on initial render.


2. PaletteItem.js
Handles the display of individual color palettes. Provides options to save, delete, and copy colors.

- Props:

  - randomColor: The hex color code to display.
  - localSavedColors: The list of saved colors from the parent component.
  - setSavedColors: A function to update the saved colors list.
  - isSavedPalette: Boolean flag to determine if the color is already saved.

- Key Functions:

  - handleSavedColors: Adds a color to the saved list.
  - handleDelete: Removes a color from the saved list.
  - handleCopyToClipBoard: Copies the color hex code to the clipboard.


# 📦 Dependencies
- React: A JavaScript library for building user interfaces.
- randomcolor: A utility for generating random colors.

To install dependencies, run:

  ```bash
  npm install randomcolor
  ```
# 🐞 Troubleshooting
- Colors Not Saving: Ensure that your browser's local storage is enabled and not cleared between sessions.
- Copy to Clipboard Not Working: This might be due to browser permission issues. Make sure your browser supports the navigator.clipboard API.

# 🤝 Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/new-feature)
3. Commit your Changes (git commit -m 'Add some feature')
4. Push to the Branch (git push origin feature/new-feature)
5. Open a Pull Request


# 📧 Contact
- Name: Sivadinesh
- Email: dsiva7199@gmail.com
- LinkedIn: www.linkedin.com/in/sivadinesh-k-v
