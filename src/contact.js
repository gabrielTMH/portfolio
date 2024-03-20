/* global emailjs */

import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Send email
    emailjs.sendForm('service_th88c5t', 'template_71lz3jn', formData, "user_HYiBv6gCUL1HSkUxI")
      .then(function(response) {
        console.log('Email sent successfully:', response);
        // Optionally, display a success message to the user
        alert('Message sent successfully!');
      }, function(error) {
        console.error('Error sending email:', error);
        // Optionally, display an error message to the user
        alert('An error occurred while sending the message.');
      });
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" required/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" required/>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
