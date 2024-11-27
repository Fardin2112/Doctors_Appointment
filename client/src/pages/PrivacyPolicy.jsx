import React from 'react';
// Tailwind CSS is assumed to be configured

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Privacy Policy for Prescripto</h1>
        <p className="text-sm text-gray-600 mb-8">Effective Date: 28-11-2024</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            When you register and use <strong>Prescripto</strong>, we may collect the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>During Registration:</strong> Full Name, Email Address</li>
            <li><strong>Additional Information (Optional and Editable in Profile):</strong> Phone Number, Date of Birth, Profile Photo</li>
            <li><strong>Appointment Booking:</strong> Doctor preferences and appointment details (e.g., date, time)</li>
            <li><strong>Payment Information:</strong> Processed securely through Razorpay or Stripe</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information you provide for:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Creating and managing your account</li>
            <li>Facilitating doctor appointments</li>
            <li>Processing online payments</li>
            <li>Improving the functionality of our app</li>
          </ul>
          <p className="text-gray-700">
            We do not share your personal information with third parties unless required by law or for essential services like payment processing.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
          <p className="text-gray-700">
            Your data is securely stored in <strong>MongoDB</strong>, and access is protected using:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>JWT (JSON Web Tokens):</strong> for authentication</li>
            <li>Secure token generation systems</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Rights</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Update or edit your profile information at any time</li>
            <li>Request deletion of your account and associated data</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Notifications</h2>
          <p className="text-gray-700">
            Currently, <strong>Prescripto</strong> does not send notifications. However, we plan to introduce this feature in the future.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Age Restrictions</h2>
          <p className="text-gray-700">
            While our platform is open to all ages, online payments require caution. If you are under 18, we recommend using the app under parental guidance, especially for payments.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Payment Security</h2>
          <p className="text-gray-700">
            All payments are securely processed through <strong>Razorpay</strong> or <strong>Stripe</strong>, complying with industry standards. <strong>Prescripto</strong> does not store card details or sensitive payment information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Future Updates</h2>
          <p className="text-gray-700">
            This Privacy Policy may be updated as we introduce new features or comply with changing legal requirements. We encourage users to review this policy periodically.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Email:</strong> letsfuri2112@gmail.com</li>
            <li><strong>Phone:</strong> 6204590299</li>
          </ul>
        </section>

        <p className="text-gray-700 text-center mt-6">
          By using <strong>Prescripto</strong>, you agree to the terms outlined in this Privacy Policy. Thank you for trusting us with your healthcare needs!
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
