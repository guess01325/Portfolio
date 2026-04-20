export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold">Support – PAMS Notes</h1>

        <p className="mb-4 text-base leading-7 text-gray-700">
          If you need help with PAMS Notes or have any questions about the app,
          please reach out using the email below.
        </p>

        <p className="mb-6 text-base leading-7 text-gray-700">
          Email:{" "}
          <a
            href="mailto:youremail@example.com"
            className="font-medium text-blue-600 underline"
          >
            allan@positiveadversity.org
          </a>
        </p>

        <p className="mb-8 text-sm text-gray-500">
          We typically respond within 24–48 hours.
        </p>

        <a
          href="/privacy-positive-adversity"
          className="text-sm font-medium text-blue-600 underline"
        >
          View Privacy Policy
        </a>
      </div>
    </main>
  );
}