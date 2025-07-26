import React from 'react';

const HowItWorks = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '30px' }}>
        How Emotion-Based Music Recommender Works
      </h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
        <h2>The Technology Behind Emotion Detection</h2>
        <p>
          Our application uses a sophisticated combination of computer vision, machine learning, 
          and facial recognition technology to accurately detect and analyze human emotions. 
          Here's a detailed breakdown of how the entire system works:
        </p>

        <h3>Step 1: Face Detection</h3>
        <p>
          The process begins with our TinyFaceDetector model, which scans the video feed from 
          your camera to identify and locate human faces in real-time. This model is optimized 
          for speed and accuracy, capable of detecting faces even in challenging lighting conditions.
        </p>

        <h3>Step 2: Facial Landmark Detection</h3>
        <p>
          Once a face is detected, our FaceLandmark68Net model identifies 68 key facial points 
          that are crucial for emotion analysis. These landmarks include:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Eye corners and pupils</li>
          <li>Nose bridge and tip</li>
          <li>Mouth corners and lips</li>
          <li>Eyebrow positions</li>
          <li>Jawline and chin</li>
        </ul>

        <h3>Step 3: Expression Analysis</h3>
        <p>
          The FaceExpressionNet model then analyzes the spatial relationships between these 
          landmarks to determine the probability of seven different emotional states:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Happy:</strong> Detected through raised cheeks, crinkled eyes, and upturned mouth corners</li>
          <li><strong>Sad:</strong> Identified by downturned mouth, drooping eyebrows, and reduced eye openness</li>
          <li><strong>Angry:</strong> Characterized by furrowed brows, narrowed eyes, and tense jaw</li>
          <li><strong>Surprised:</strong> Marked by raised eyebrows, widened eyes, and open mouth</li>
          <li><strong>Fearful:</strong> Detected through raised eyebrows, widened eyes, and tense facial muscles</li>
          <li><strong>Disgusted:</strong> Identified by wrinkled nose, raised upper lip, and narrowed eyes</li>
          <li><strong>Neutral:</strong> Default state when no strong emotions are detected</li>
        </ul>

        <h2>Music Recommendation Algorithm</h2>
        <p>
          Once an emotion is detected, our intelligent recommendation system springs into action:
        </p>

        <h3>Emotion-to-Music Mapping</h3>
        <p>
          Our carefully curated database contains songs that have been analyzed and categorized 
          based on their emotional characteristics:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Tempo and Rhythm:</strong> Fast-paced songs for happy/surprised emotions, slower tempos for sad/calm states</li>
          <li><strong>Musical Key:</strong> Major keys for positive emotions, minor keys for more somber moods</li>
          <li><strong>Lyrical Content:</strong> Songs with lyrics that match the emotional theme</li>
          <li><strong>Cultural Context:</strong> Music from different languages and cultures that resonate with specific emotions</li>
        </ul>

        <h3>Multi-Language Support</h3>
        <p>
          Our system recognizes that emotions are universal, but musical preferences can be 
          culturally influenced. That's why we offer recommendations in multiple languages, 
          allowing users to discover music that matches their emotional state regardless of 
          their cultural background.
        </p>

        <h2>Technical Implementation Details</h2>
        
        <h3>Real-Time Processing</h3>
        <p>
          The entire emotion detection process happens in real-time using WebRTC technology:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Camera feed is captured using the device's webcam</li>
          <li>Video frames are processed at 30fps for smooth analysis</li>
          <li>All processing occurs locally on your device for privacy</li>
          <li>Results are displayed instantly with minimal latency</li>
        </ul>

        <h3>Privacy and Security</h3>
        <p>
          Your privacy is our top priority. Here's how we protect your data:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Local Processing:</strong> All facial analysis happens on your device</li>
          <li><strong>No Data Storage:</strong> Images are not saved or transmitted</li>
          <li><strong>Secure Connections:</strong> Music links use HTTPS for secure access</li>
          <li><strong>No Tracking:</strong> We don't collect or store personal information</li>
        </ul>

        <h2>Performance Optimization</h2>
        <p>
          To ensure smooth performance across all devices, we've implemented several optimizations:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Model Optimization:</strong> Pre-trained models are optimized for web browsers</li>
          <li><strong>Responsive Design:</strong> Interface adapts to different screen sizes</li>
          <li><strong>Memory Management:</strong> Efficient handling of video streams and model loading</li>
          <li><strong>Error Handling:</strong> Graceful fallbacks when camera access is unavailable</li>
        </ul>

        <h2>Future Enhancements</h2>
        <p>
          We're constantly working to improve our emotion detection and music recommendation system:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Enhanced emotion detection accuracy</li>
          <li>Expanded music database with more genres and languages</li>
          <li>Personalized recommendation learning</li>
          <li>Integration with popular music streaming services</li>
          <li>Advanced emotion tracking over time</li>
        </ul>

        <div style={{ 
          background: '#e3f2fd', 
          padding: '20px', 
          borderRadius: '8px', 
          marginTop: '30px',
          border: '1px solid #1976d2'
        }}>
          <h3 style={{ color: '#1976d2', marginTop: '0' }}>Ready to Experience It?</h3>
          <p style={{ margin: '0' }}>
            Now that you understand how our technology works, try it out! Allow camera access 
            and let our advanced emotion detection system analyze your facial expressions to 
            provide you with perfectly matched music recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 