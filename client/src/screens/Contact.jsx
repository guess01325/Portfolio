import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/Contact.css";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jy3dnij",     // ✅ replace with actual EmailJS service ID
        "template_pgoqlt1",    // ✅ replace with your template ID
        form.current,
        "3PRdcSQolp0dgo-uQ"      // ✅ replace with your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-greeting">
        <p>
          I would love to keep in contact with you, or have you as a client! Give me your info and we can link up.
          You can email me at <strong>guess01325@gmail.com</strong>.
        </p>
        {sent && <p style={{ color: "#fff5bb" }}>✅ Message sent successfully!</p>}
      </div>

      <form ref={form} onSubmit={sendEmail} className="info-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Your message" />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}