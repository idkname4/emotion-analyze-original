import React from 'react';

const Terms = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '30px' }}>
        Terms of Service
      </h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
        <p style={{ fontStyle: 'italic', color: '#666', textAlign: 'center', marginBottom: '30px' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Emotion-Based Music Recommender web application, you accept 
          and agree to be bound by the terms and provision of this agreement. If you do not 
          agree to abide by the above, please do not use this service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          The Emotion-Based Music Recommender is a web-based application that uses facial 
          recognition technology to detect emotions and provide music recommendations. The 
          service includes:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Real-time facial expression analysis</li>
          <li>Emotion detection and classification</li>
          <li>Music recommendations based on detected emotions</li>
          <li>Multi-language music support</li>
          <li>Responsive web interface</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>
          As a user of this service, you agree to:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Use the service only for lawful purposes</li>
          <li>Provide accurate and complete information when required</li>
          <li>Maintain the security of your device and internet connection</li>
          <li>Not attempt to reverse engineer or hack the application</li>
          <li>Respect the privacy of others when using the service</li>
          <li>Not use the service to harm, harass, or intimidate others</li>
        </ul>

        <h2>4. Camera Access and Privacy</h2>
        <p>
          Our service requires access to your device's camera to function properly:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>You must grant camera permissions to use the emotion detection feature</li>
          <li>All facial analysis is performed locally on your device</li>
          <li>No images or video are stored or transmitted to our servers</li>
          <li>You can revoke camera access at any time through your browser settings</li>
          <li>We are not responsible for any misuse of camera access by third parties</li>
        </ul>

        <h2>5. Intellectual Property Rights</h2>
        <p>
          The Emotion-Based Music Recommender and its original content, features, and 
          functionality are owned by us and are protected by international copyright, 
          trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h2>6. Third-Party Content and Links</h2>
        <p>
          Our service may contain links to third-party websites and music platforms:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>We do not control or endorse third-party content</li>
          <li>Third-party services have their own terms and privacy policies</li>
          <li>We are not responsible for the content or practices of third-party sites</li>
          <li>Use of third-party services is at your own risk</li>
        </ul>

        <h2>7. Disclaimers and Limitations</h2>
        <p>
          The service is provided "as is" and "as available" without any warranties:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>We do not guarantee the accuracy of emotion detection</li>
          <li>Music recommendations are suggestions only</li>
          <li>Service availability is not guaranteed</li>
          <li>We are not responsible for any emotional or psychological effects</li>
          <li>Technical issues may affect service functionality</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any indirect, incidental, special, 
          consequential, or punitive damages, including without limitation, loss of 
          profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Your use or inability to use the service</li>
          <li>Any unauthorized access to or use of our servers</li>
          <li>Any interruption or cessation of transmission to or from the service</li>
          <li>Any bugs, viruses, or other harmful code</li>
          <li>Any errors or omissions in any content</li>
        </ul>

        <h2>9. Medical and Psychological Disclaimer</h2>
        <p>
          This service is for entertainment and general use only:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>We are not medical professionals or mental health experts</li>
          <li>Emotion detection is not a substitute for professional medical advice</li>
          <li>Music recommendations are not therapeutic treatments</li>
          <li>If you have mental health concerns, please consult a qualified professional</li>
          <li>We are not responsible for any emotional or psychological effects</li>
        </ul>

        <h2>10. Service Modifications</h2>
        <p>
          We reserve the right to:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Modify or discontinue the service at any time</li>
          <li>Update features and functionality</li>
          <li>Change these terms of service</li>
          <li>Limit access to certain features</li>
          <li>Maintain or improve service performance</li>
        </ul>

        <h2>11. Termination</h2>
        <p>
          We may terminate or suspend your access to the service immediately, without 
          prior notice, for any reason, including breach of these Terms of Service.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with 
          the laws of the jurisdiction in which we operate, without regard to its 
          conflict of law provisions.
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users 
          of any changes by posting the new Terms of Service on this page and updating 
          the "Last updated" date.
        </p>

        <h2>14. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us 
          through our website or email us at terms@emotionmusicapp.com
        </p>

        <h2>15. Severability</h2>
        <p>
          If any provision of these Terms of Service is held to be invalid or 
          unenforceable, the remaining provisions will continue to be valid and 
          enforceable to the fullest extent permitted by law.
        </p>

        <div style={{ 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px', 
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1976d2', marginTop: '0' }}>Acceptance</h3>
          <p style={{ margin: '0' }}>
            By using our Emotion-Based Music Recommender, you acknowledge that you have 
            read, understood, and agree to be bound by these Terms of Service. If you do 
            not agree with any part of these terms, please do not use our service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms; 