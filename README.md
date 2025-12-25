**News App (HTML, CSS, JavaScript)**

This is a simple News Website built using HTML, CSS, and JavaScript.
It fetches live news data using a News API and displays it in a responsive UI with pagination and search functionality.
**This project works ONLY on localhost
It will NOT work properly on GitHub Pages**
** Why?**
News APIs (like NewsAPI.org) block browser requests from public domains due to CORS restrictions
GitHub Pages is a static hosting platform
API requests from GitHub Pages are rejected by the news provider
news-app-html-css-javascript/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── news-logo.png
**Features**
Live news fetching
Category-based navigation
Search functionality
Pagination (Next / Previous)
Responsive layout

**GitHub Pages Limitation**
This project:
Cannot fetch news APIs on GitHub Pages
Will show blank or error due to CORS policy
Requires a backend proxy to work online

**Future Improvement**
To make this work online:
Use a backend (Node.js / Express)
Or use APIs that allow public frontend access


