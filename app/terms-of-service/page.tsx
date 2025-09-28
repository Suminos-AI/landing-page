import { GeneralSection } from '../components/sections'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <GeneralSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Terms of Service
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              <strong>Last Updated:</strong> September 29, 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  By accessing or using our AI-powered job search and career development platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">2. Description of Service</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Our Service provides:
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>AI-powered resume optimization and analysis</li>
                  <li>Job application assistance and automation</li>
                  <li>Interview preparation materials and coaching</li>
                  <li>Career guidance and job search tools</li>
                  <li>Progress tracking and application management</li>
                  <li>Educational content and resources</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. User Accounts</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">3.1 Account Creation</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>You must provide accurate, complete, and current information when creating an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must be at least 18 years old to use our Service</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">3.2 Account Security</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized use of your account</li>
                  <li>We are not liable for any loss or damage arising from unauthorized account use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. User Responsibilities</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">4.1 Acceptable Use</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Upload false, misleading, or fraudulent information</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated tools to access our Service without permission</li>
                  <li>Share your account credentials with others</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">4.2 Content Accuracy</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>You are responsible for the accuracy of all information you provide</li>
                  <li>You must not submit false, misleading, or fraudulent information</li>
                  <li>We reserve the right to verify information you provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. AI-Powered Features</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">5.1 AI Recommendations</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Our AI provides suggestions and recommendations based on your input</li>
                  <li>AI-generated content is for guidance purposes only</li>
                  <li>You are responsible for reviewing and approving all AI-generated content before use</li>
                  <li>We do not guarantee the accuracy or effectiveness of AI recommendations</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">5.2 Data Processing</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We use your data to provide personalized AI recommendations</li>
                  <li>AI processing is performed using industry-standard security measures</li>
                  <li>We do not share your personal data with third parties for AI training without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">6. Privacy and Data Protection</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">6.1 Data Collection</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  We collect and process personal information as described in our Privacy Policy, including:
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Resume and career information</li>
                  <li>Job search preferences and history</li>
                  <li>Application tracking data</li>
                  <li>Usage analytics and performance metrics</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">6.2 Data Security</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>We implement appropriate security measures to protect your data</li>
                  <li>We use encryption and secure data storage practices</li>
                  <li>We regularly audit our security practices</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">6.3 Data Retention</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We retain your data as long as your account is active</li>
                  <li>You may request data deletion at any time</li>
                  <li>Some data may be retained for legal or business purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">7. Intellectual Property</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">7.1 Our Content</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>All content, features, and functionality of our Service are owned by us</li>
                  <li>Our trademarks, logos, and brand elements are protected</li>
                  <li>You may not use our intellectual property without written permission</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">7.2 Your Content</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>You retain ownership of content you upload to our Service</li>
                  <li>You grant us a license to use your content to provide our Service</li>
                  <li>You represent that you have the right to share any content you upload</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">8. Payment Terms</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">8.1 Subscription Fees</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We may change pricing with 30 days' notice</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">8.2 Payment Processing</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>Payments are processed by third-party payment processors</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">9. Service Availability</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">9.1 Uptime</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>We strive to maintain high service availability</li>
                  <li>We do not guarantee uninterrupted service</li>
                  <li>We may perform maintenance that temporarily affects availability</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">9.2 Service Modifications</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We may modify, suspend, or discontinue any part of our Service</li>
                  <li>We will provide reasonable notice of significant changes</li>
                  <li>We are not liable for any modifications or discontinuations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">10. Disclaimers and Limitations</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">10.1 No Guarantees</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>We do not guarantee job placement or interview success</li>
                  <li>Our Service provides tools and guidance, not employment guarantees</li>
                  <li>Results may vary based on individual circumstances</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">10.2 Limitation of Liability</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Our liability is limited to the amount you paid for our Service</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Some jurisdictions may not allow liability limitations</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">10.3 Third-Party Services</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We may integrate with third-party job boards and services</li>
                  <li>We are not responsible for third-party service availability or content</li>
                  <li>Third-party terms and conditions apply to their services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">11. Termination</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">11.1 Termination by You</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>You may terminate your account at any time</li>
                  <li>Termination does not relieve you of payment obligations</li>
                  <li>We will delete your data according to our data retention policy</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">11.2 Termination by Us</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We may terminate your account for violation of these Terms</li>
                  <li>We may suspend or terminate service for maintenance or updates</li>
                  <li>We will provide reasonable notice when possible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">12. Dispute Resolution</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">12.1 Governing Law</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  These Terms are governed by the laws of the United States without regard to conflict of law principles.
                </p>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">12.2 Dispute Resolution Process</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>We encourage resolving disputes through direct communication</li>
                  <li>Disputes may be subject to binding arbitration</li>
                  <li>Class action waivers may apply</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">13. Changes to Terms</h2>
                
                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">13.1 Updates</h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4 mb-4">
                  <li>We may update these Terms from time to time</li>
                  <li>Material changes will be communicated via email or in-app notification</li>
                  <li>Continued use of our Service constitutes acceptance of updated Terms</li>
                </ul>

                <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-3">13.2 Effective Date</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Updated Terms become effective immediately upon posting unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">14. Contact Information</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  If you have questions about these Terms, please contact us at:
                </p>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                  <li>Email: legal@stonefrontier.com</li>
                  <li>Address: StoneFrontier LLC, [Your Address]</li>
                  <li>Phone: [Your Phone Number]</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">15. Severability</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">16. Entire Agreement</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding the use of our Service.
                </p>
              </section>

              <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="text-slate-700 dark:text-slate-200 font-medium">
                  <strong>By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </GeneralSection>
    </div>
  )
}