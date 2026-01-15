import { Link } from 'react-router-dom'
import './Legal.css'

function Privacy() {
  return (
    <div className="legal-container">
      <nav className="legal-nav">
        <Link to="/" className="back-link">&larr; Back to Home</Link>
      </nav>

      <article className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: January 15, 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            DataBeeper LLC ("Company," "we," "us," or "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you use our mobile applications and services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Account information (name, email address)</li>
            <li>Profile information you choose to provide</li>
            <li>Communications you send to us</li>
            <li>Content you create or upload within our apps</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Usage data (features used, time spent in app, crash reports)</li>
            <li>Log data (access times, pages viewed, IP address)</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            <li>Personalize and improve your experience</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes for
            which it was collected, including to satisfy legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2>8. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have specific rights under the California Consumer
            Privacy Act (CCPA), including the right to know what personal information we collect,
            the right to delete your information, and the right to opt-out of the sale of your
            personal information. We do not sell personal information.
          </p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal
            information from children under 13. If we learn we have collected such information, we
            will delete it promptly.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Effective Date."
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
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

export default Privacy
