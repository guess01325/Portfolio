import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        Positive Adversity ("we", "our", or "the app") respects your privacy.
        This Privacy Policy explains how information is collected, used, and protected.
      </p>

      <h2>Information We Collect</h2>
      <p><strong>Account Information:</strong> Name and email from Google or Apple sign-in.</p>
      <p><strong>User Content:</strong> Entries, notes, hours, and service data.</p>
      <p><strong>Technical Data:</strong> Device and usage data via Firebase.</p>

      <h2>How We Use Information</h2>
      <p>To authenticate users, store data, provide functionality, and improve the app.</p>

      <h2>Data Storage</h2>
      <p>Your data is stored securely using Firebase (Google Cloud).</p>

      <h2>Data Sharing</h2>
      <p>We do not sell your data. Data is only used for app functionality or legal requirements.</p>

      <h2>Account Deletion</h2>
      <p>You can delete your account within the app. Data is removed or retained only as required.</p>

      <h2>Contact</h2>
      <p>Email: allan@positiveadversity.org</p>
    </div>
  );
};

export default PrivacyPolicy;