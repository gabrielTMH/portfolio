import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar'
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
      <link rel="stylesheet" href="./style.css" />
      <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

    </head>

    <body>
      <NavBar/>

      <div className="container mt-4">
        {children}
      </div>

      <div className="social-icons-list">
      <a href="https://github.com/gabrielTMH" target="_blank"><i class="fab fa-github socialicons"></i></a>
            <a href="https://www.linkedin.com/in/gabriel-mantione-holmes-7720a5213/" target="_blank"><i class="fab fa-linkedin-in socialicons"></i></a>
            <a href="https://www.tiktok.com/@gae_real" target="_blank"><i class="fab fa-tiktok socialicons"></i></a>
            <a href="https://www.youtube.com/@wholefood3669" target="_blank"><i class="fab fa-youtube socialicons"></i></a>
      </div>

      {/* Bootstrap JavaScript */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
  </>
);

export default BaseLayout;
