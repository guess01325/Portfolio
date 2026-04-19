import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        Positive Adversity ("we", "our", or "the app") respects your privacy.
        This Privacy Policy explains how information is collected, used, and protected when you use the app.
      </p>

      <h2>Information We Collect</h2>

      <h3>1. Contact Information</h3>
      <p>
        When you sign in using Google or Apple, we may collect and store:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your email address</li>
      </ul>
      <p>
        This information is linked to your identity and used to authenticate and manage your account.
      </p>

      <h3>2. User Content</h3>
      <p>
        We collect information you create within the app, including:
      </p>
      <ul>
        <li>Work entries</li>
        <li>Notes</li>
        <li>Hours and service data</li>
        <li>Any additional content you choose to enter (such as student names or related details)</li>
      </ul>
      <p>
        This content is linked to your account and used to provide app functionality.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>Authenticate and manage user accounts</li>
        <li>Store and display your entries and content</li>
        <li>Provide core app functionality</li>
        <li>Maintain and improve app performance</li>
      </ul>
      <p>
        We do not use your data for advertising or tracking across other apps or websites.
      </p>

      <h2>Data Storage</h2>
      <p>
        Your data is securely stored using Firebase (Google Cloud services).
        We take reasonable steps to protect your information from unauthorized access.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal information.
      </p>
      <p>
        We only share data:
      </p>
      <ul>
        <li>With service providers required to operate the app (such as Firebase)</li>
        <li>If required by law or legal process</li>
      </ul>

      <h2>Account Deletion</h2>
      <p>
        You can request account deletion directly within the app.
      </p>
      <p>
        When your account is deleted:
      </p>
      <ul>
        <li>Your access is removed</li>
        <li>Your associated data is deleted or retained only as required for legitimate business or legal purposes</li>
      </ul>

      <h2>Your Rights</h2>
      <ul>
        <li>Access your data within the app</li>
        <li>Request deletion of your account and associated data</li>
      </ul>

      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact:
      </p>
      <p>
        <strong>Email:</strong> allan@positiveadversity.org
      </p>
    </div>
  );
};

export default PrivacyPolicy;