import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: e.target.full_name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs.init("YOUR_USER_ID"); // replace this with your EmailJS User ID

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        alert("Error sending message: " + JSON.stringify(error));
      });
  };

  return (
     <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form id="contact-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
                <div className="input-box">
                    <input type="text" id="full_name" name="full_name" placeholder="Full Name" required/>
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                </div>
                <div className="input-box">
                    <input type="number" id="phone" name="phone" placeholder="Phone Number" required/>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                </div>
            </div>
            <div className="input-group-2">
                <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Send Message" className="btn"/>
            </div>
        </form>
    </section>
  );
};

export default ContactForm;
