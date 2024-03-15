import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = ({ children, pageTitle = 'My Website' }) => (
  <>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="static/images/favicon.ico" />
      <title>{pageTitle}</title>
      {/* Your custom CSS */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link rel="stylesheet" href="static/css/style.css" />
    </head>

    <body>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Gabriel Mantione-Holmes</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/form">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {children}
      </div>

      <div className="social-icons-list">
        {/* Social icons */}
      </div>

      {/* Bootstrap JavaScript */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
  </>
);

export default BaseLayout;
