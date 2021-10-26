import "../assets/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-greeting">
        I would love to keep in contact with you! Give me your info and we can
        link. or email me at guess01325@gmail.com
      </section>
      <form className="info-form" action="">
        <label>
          Name:
          <input
            className="sign-in-inputs"
            id="name"
            type="text"
            name="Name"
            value=""
            placeholder="Enter Name"
          />
        </label>
        <label>
          Email:
          <input
            className="sign-in-inputs"
            id="email"
            type="text"
            name="Email"
            value=""
            placeholder="Enter username"
          />
        </label>
        <label>
          <div>Message:</div>
          <textarea
            className="sign-in-inputs"
            id="message"
            type="textarea"
            name="message:"
            value=""
            placeholder="message"
          />
        </label>
      </form>
    </div>
  );
}
