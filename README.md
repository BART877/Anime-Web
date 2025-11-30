# Anime Episodes Hub

This is a simple single-page application built with React and Vite that displays a list of anime, allows searching and filtering by genre, and shows episode details in a modal.

## Features

*   **Anime List:** Browse a list of anime with their ratings, number of episodes, and status.
*   **Search:** Search for anime by title.
*   **Filter by Genre:** Filter the anime list by selecting a genre.
*   **Episode Details:** Click on an anime card to see a modal with the list of episodes.

## Project Structure

The project is structured as follows:

```
├── src
│   ├── assets
│   ├── components
│   │   └── App
│   │       ├── App.css
│   │       └── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/BART877/Anime-Web.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Anime-Web
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Pushing to GitHub

To push the project to GitHub, you will need to have a repository created on GitHub. Then, you can add the remote and push the code:

```bash
git remote add origin https://github.com/BART877/Anime-Web.git
git branch -M main
git push -u origin main
```