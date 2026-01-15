import { Link } from 'react-router-dom'
import './Legal.css'

function Terms() {
  return (
    <div className="legal-container">
      <nav className="legal-nav">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
      </nav>

      <article className="legal-content">
        <h1>Terms of Service</h1>
        <p className="effective-date">Effective Date: January 15, 2025</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using any mobile application or service provided by DataBeeper LLC
            ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service
            ("Terms"). If you do not agree to these Terms, do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of
            significant changes by updating the "Effective Date" and, where appropriate, notifying
            you through the app or via email. Your continued use of our services after changes
            constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2>3. Use of Services</h2>
          <h3>Eligibility</h3>
          <p>
            You must be at least 13 years old to use our services. By using our services, you
            represent that you meet this age requirement.
          </p>

          <h3>Account Responsibilities</h3>
          <p>You are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h3>Acceptable Use</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any illegal purpose</li>
            <li>Violate any laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Transmit malware, viruses, or harmful code</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt our services</li>
            <li>Scrape, harvest, or collect user data without consent</li>
            <li>Use our services to send spam or unsolicited communications</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services, including but not limited to
            text, graphics, logos, icons, images, audio clips, and software, are the exclusive
            property of DataBeeper LLC and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of our services without
            our prior written consent.
          </p>
        </section>

        <section>
          <h2>5. User Content</h2>
          <p>
            You retain ownership of any content you create or upload through our services ("User Content").
            By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license
            to use, reproduce, modify, and display such content solely for the purpose of providing
            our services.
          </p>
          <p>
            You represent that you own or have the necessary rights to your User Content and that
            it does not violate these Terms or any applicable laws.
          </p>
        </section>

        <section>
          <h2>6. In-App Purchases and Subscriptions</h2>
          <p>
            Some features may require payment. All purchases are processed through the Apple App Store
            and are subject to their terms and conditions. Subscription renewals are automatic unless
            cancelled at least 24 hours before the end of the current period.
          </p>
          <p>
            Refunds are handled according to Apple's refund policies. We do not have direct access
            to payment information processed through the App Store.
          </p>
        </section>

        <section>
          <h2>7. Disclaimers</h2>
          <p>
            OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that our services will be uninterrupted, error-free, secure, or free
            of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, DATABEEPER LLC SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
            PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA,
            USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p>
            OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR
            SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING
            THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
          </p>
        </section>

        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless DataBeeper LLC and its officers,
            directors, employees, and agents from any claims, liabilities, damages, losses, and
            expenses arising out of or related to your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>10. Termination</h2>
          <p>
            We may suspend or terminate your access to our services at any time, with or without
            cause, with or without notice. Upon termination, your right to use our services will
            immediately cease.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            State of California, without regard to its conflict of law provisions. Any disputes
            arising from these Terms or our services shall be resolved in the state or federal
            courts located in California.
          </p>
        </section>

        <section>
          <h2>12. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions
            will continue in full force and effect.
          </p>
        </section>

        <section>
          <h2>13. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between
            you and DataBeeper LLC regarding your use of our services.
          </p>
        </section>

        <section>
          <h2>14. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us at:</p>
          <address>
            DataBeeper LLC<br />
            California, USA<br />
            Email: <a href="mailto:databeeper@gmail.com">databeeper@gmail.com</a>
          </address>
        </section>
      </article>
    </div>
  )
}

export default Terms
