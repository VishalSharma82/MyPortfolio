import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS with the Public Key (User ID)
  // Moving this outside or to the top level ensures it's ready.
  const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;
  if (emailjsUserId) {
    emailjs.init(emailjsUserId);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!emailjsUserId) {
      alert("EmailJS User ID is missing. Please check your .env file and restart the server.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      full_name: e.target.full_name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
        setIsSending(false);
      })
      .catch((error) => {
        alert("Error sending message: " + JSON.stringify(error));
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <h2 className="heading">Contact <span>Me</span></h2>
        <p className="contact-subtitle">I'm always open to discussing new projects, creative ideas or prospects.</p>

        <form id="contact-form" onSubmit={handleFormSubmit}>
          <div className="input-grid">
            <div className="input-group">
              <label htmlFor="full_name">Full Name</label>
              <div className="input-field">
                <i className='bx bx-user'></i>
                <input type="text" id="full_name" name="full_name" placeholder="Enter your name" required />
              </div>
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-field">
                <i className='bx bx-envelope'></i>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-field">
                <i className='bx bx-phone'></i>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <div className="input-field">
                <i className='bx bx-message-square-detail'></i>
                <input type="text" id="subject" name="subject" placeholder="What is this about?" required />
              </div>
            </div>
          </div>

          <div className="textarea-group">
            <label htmlFor="message">Your Message</label>
            <div className="textarea-field">
              <i className='bx bx-pencil'></i>
              <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
            </div>
          </div>

          <button type="submit" className="btn contact-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
            {!isSending && <i className='bx bx-send'></i>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
