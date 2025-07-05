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
      <div className="contact-greeting">
        <p>
          I’d love to connect with you — whether you're a client, collaborator, or just
          interested in what I do. Drop me a message and I’ll get back to you as soon as possible.
        </p>
        <p>
          📧 Email: <strong>guess01325@gmail.com</strong><br />
          📞 Call or text: <strong>860-303-0187</strong>
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