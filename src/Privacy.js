import React from 'react';

const Privacy = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '30px' }}>
        Privacy Policy
      </h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
        <p style={{ fontStyle: 'italic', color: '#666', textAlign: 'center', marginBottom: '30px' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Introduction</h2>
        <p>
          At Emotion-Based Music Recommender, we are committed to protecting your privacy and 
          ensuring the security of your personal information. This Privacy Policy explains how 
          we collect, use, and safeguard your data when you use our web application.
        </p>

        <h2>Information We Do NOT Collect</h2>
        <p>
          We want to be completely transparent about what we do not collect from you:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Facial Images:</strong> We do not store, save, or transmit any images of your face</li>
          <li><strong>Video Recordings:</strong> We do not record or store any video footage</li>
          <li><strong>Personal Identifiers:</strong> We do not collect names, email addresses, or phone numbers</li>
          <li><strong>Location Data:</strong> We do not track your geographical location</li>
          <li><strong>Browsing History:</strong> We do not monitor your web browsing activities</li>
          <li><strong>Device Information:</strong> We do not collect device IDs or hardware information</li>
        </ul>

        <h2>How Our Technology Works</h2>
        <p>
          Our emotion detection technology operates entirely on your device:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Local Processing:</strong> All facial analysis happens in your web browser</li>
          <li><strong>No Server Transmission:</strong> Your camera feed never leaves your device</li>
          <li><strong>Real-time Analysis:</strong> Images are processed frame-by-frame and immediately discarded</li>
          <li><strong>No Storage:</strong> We do not save any visual data to our servers</li>
        </ul>

        <h2>Information We May Collect</h2>
        <p>
          The only information we may collect is standard web analytics data that helps us 
          improve our service:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Usage Analytics:</strong> Anonymous data about how users interact with our app</li>
          <li><strong>Performance Metrics:</strong> Information about app performance and error rates</li>
          <li><strong>Browser Information:</strong> Basic browser type and version for compatibility</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          Our application may use the following third-party services:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Google AdSense:</strong> For displaying advertisements (subject to Google's privacy policy)</li>
          <li><strong>Music Platforms:</strong> Links to external music services (YouTube, Spotify, etc.)</li>
        </ul>
        <p>
          We are not responsible for the privacy practices of these third-party services. 
          Please review their respective privacy policies.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement several security measures to protect your information:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>HTTPS Encryption:</strong> All data transmission is encrypted</li>
          <li><strong>Local Processing:</strong> Sensitive data never leaves your device</li>
          <li><strong>No Database Storage:</strong> We don't maintain databases of user information</li>
          <li><strong>Regular Security Reviews:</strong> We regularly assess our security practices</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You have the following rights regarding your data:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Right to Know:</strong> You can request information about what data we collect</li>
          <li><strong>Right to Delete:</strong> You can request deletion of any data we may have</li>
          <li><strong>Right to Opt-Out:</strong> You can choose not to use our service</li>
          <li><strong>Right to Control:</strong> You control camera access and can revoke it anytime</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our service is not intended for children under 13 years of age. We do not knowingly 
          collect personal information from children under 13. If you are a parent or guardian 
          and believe your child has provided us with personal information, please contact us.
        </p>

        <h2>International Users</h2>
        <p>
          Our service may be accessed by users worldwide. By using our service, you consent 
          to the transfer of your information to countries outside your residence, if applicable.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of any 
          material changes by posting the new Privacy Policy on this page and updating the 
          "Last updated" date.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please 
          contact us through our website or email us at privacy@emotionmusicapp.com
        </p>

        <h2>Legal Basis for Processing</h2>
        <p>
          We process your data based on the following legal grounds:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Consent:</strong> You provide explicit consent by allowing camera access</li>
          <li><strong>Legitimate Interest:</strong> To provide and improve our services</li>
          <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          Since we do not store personal data, there is no data retention period. Any 
          anonymous analytics data we may collect is retained only as long as necessary 
          to improve our service.
        </p>

        <div style={{ 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px', 
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1976d2', marginTop: '0' }}>Your Privacy Matters</h3>
          <p style={{ margin: '0' }}>
            We believe that privacy is a fundamental human right. Our commitment to protecting 
            your data is at the core of everything we do. You can use our service with confidence, 
            knowing that your personal information remains private and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 