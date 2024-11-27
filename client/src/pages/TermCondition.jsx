import React from 'react'
import { Link } from 'react-router-dom';

function TermCondition() {

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <strong>Prescripto</strong>. By accessing or using our platform, you agree to comply with the terms and conditions outlined below. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By registering on our platform, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree, you must refrain from using the app.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Provide accurate and up-to-date information during registration.</li>
          <li>Maintain the confidentiality of your account and login credentials.</li>
          <li>Use the app responsibly and in compliance with applicable laws.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Appointment Booking</h2>
        <p className="text-gray-700 mb-4">
          While we strive to ensure availability, appointment booking is subject to the availability of doctors and their schedules. Prescripto is not responsible for cancellations or rescheduling by doctors.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Payments</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>All payments are processed securely via <strong>Razorpay</strong> or <strong>Stripe</strong>.</li>
          <li>Prescripto does not store your payment details.</li>
          <li>Refunds and cancellations are subject to the doctor’s policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Privacy</h2>
        <p className="text-gray-700 mb-4">
          Your personal data is stored securely in compliance with our <Link to="/privacy-policy" className="text-blue-500 underline">Privacy Policy</Link>. We do not share your data without your consent, except for essential services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitations of Liability</h2>
        <p className="text-gray-700 mb-4">
          Prescripto is not liable for any medical outcomes or delays caused by technical issues or third-party services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these terms and conditions at any time. Users will be notified of significant changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Age Restrictions</h2>
        <p className="text-gray-700 mb-4">
          Users under 18 must use the platform with parental guidance, especially for online payments.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          For any questions about these terms, please contact us:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Email: <Link to="letsfuri2112@gmail.com" className="text-blue-500 underline">letsfuri2112@gmail.com</Link></li>
          <li>Phone: +91 6204590299</li>
        </ul>

        <p className="text-gray-700 text-center mt-6">
          By using <strong>Prescripto</strong>, you agree to these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermCondition