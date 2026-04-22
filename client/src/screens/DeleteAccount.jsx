export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Delete Your Account – Positive Adversity
      </h1>

      <p className="mb-4">
        If you would like to delete your account and all associated data, please follow the steps below:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Open the Positive Adversity app</li>
        <li>Sign in to your account</li>
        <li>Navigate to your profile or settings</li>
        <li>Select <strong>"Delete Account"</strong></li>
      </ol>

      <h2 className="text-xl font-semibold mb-3">What happens after deletion?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Your account is permanently deleted</li>
        <li>All associated data (entries, notes, user info) is removed from our database</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Need help?</h2>
      <p className="mb-4">
        If you cannot access your account, you may request deletion by contacting:
      </p>

      <p className="font-medium">
        your-email@example.com
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Requests are processed within 7 days.
      </p>
    </div>
  );
}