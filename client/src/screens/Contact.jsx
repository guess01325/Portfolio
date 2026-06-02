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
        "service_jy3dnij",     // ✅ your service ID
        "template_pgoqlt1",    // ✅ your template ID
        form.current,
        "3PRdcSQolp0dgo-uQ"    // ✅ your public key
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
      <section className="contact-greeting">
        <p className="contact-eyebrow">Best Guess Digital</p>
        <h1>Let’s Build Something Useful</h1>
        <p>
          I’d love to connect with you, whether you're a client, collaborator,
          or just interested in what I do. Send me a message and I’ll get back
          to you as soon as possible.
        </p>
        <div className="contact-details">
          <a href="mailto:otis@bestguessdigital.com">otis@bestguessdigital.com</a>
          <a href="tel:8603030187">860-303-0187</a>
        </div>
        {sent && (
          <p className="success-message">Message sent successfully.</p>
        )}
      </section>

      <form ref={form} onSubmit={sendEmail} className="info-form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Tell me about your project" required />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
