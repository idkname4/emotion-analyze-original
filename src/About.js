import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '30px' }}>
        About Emotion-Based Music Recommender
      </h1>
      
      <div style={{ lineHeight: '1.6', fontSize: '16px' }}>
        <h2>What is Emotion-Based Music Recommender?</h2>
        <p>
          Our Emotion-Based Music Recommender is an innovative web application that combines 
          cutting-edge facial recognition technology with intelligent music recommendation algorithms. 
          By analyzing your facial expressions in real-time, our app can detect your current emotional 
          state and suggest music that matches your mood.
        </p>

        <h2>How It Works</h2>
        <p>
          Using advanced machine learning models and computer vision technology, our app:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Captures your facial expressions through your device's camera</li>
          <li>Analyzes micro-expressions to determine your emotional state</li>
          <li>Maps emotions to carefully curated music recommendations</li>
          <li>Provides instant access to songs that complement your mood</li>
        </ul>

        <h2>Key Features</h2>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Real-time Emotion Detection:</strong> Instant analysis of facial expressions</li>
          <li><strong>Multi-language Support:</strong> Music recommendations in various languages</li>
          <li><strong>Privacy-Focused:</strong> All processing happens locally on your device</li>
          <li><strong>User-Friendly Interface:</strong> Simple and intuitive design</li>
          <li><strong>Responsive Design:</strong> Works seamlessly on desktop and mobile devices</li>
        </ul>

        <h2>Technology Behind the App</h2>
        <p>
          Our application leverages several advanced technologies:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Face-api.js:</strong> Powerful facial recognition and expression analysis</li>
          <li><strong>React.js:</strong> Modern, responsive user interface</li>
          <li><strong>Machine Learning Models:</strong> Pre-trained neural networks for emotion detection</li>
          <li><strong>WebRTC:</strong> Real-time camera access and video processing</li>
        </ul>

        <h2>Emotion Categories</h2>
        <p>
          Our system can detect and respond to various emotional states:
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li><strong>Happy:</strong> Upbeat, energetic music to enhance your positive mood</li>
          <li><strong>Sad:</strong> Soothing, comforting tracks to provide emotional support</li>
          <li><strong>Angry:</strong> Calming, peaceful music to help you relax</li>
          <li><strong>Surprised:</strong> Dynamic, exciting music to match your energy</li>
          <li><strong>Fearful:</strong> Gentle, reassuring melodies to ease anxiety</li>
          <li><strong>Disgusted:</strong> Light, pleasant music to improve your mood</li>
          <li><strong>Neutral:</strong> Balanced, versatile music selections</li>
        </ul>

        <h2>Why Choose Our App?</h2>
        <p>
          Unlike traditional music recommendation systems that rely on listening history or 
          user preferences, our emotion-based approach provides a more intuitive and 
          contextually relevant music experience. Whether you're feeling down and need 
          uplifting music, or you're happy and want to enhance that feeling, our app 
          understands your emotional state and responds accordingly.
        </p>

        <h2>Privacy and Security</h2>
        <p>
          We take your privacy seriously. All facial analysis is performed locally on your 
          device - no images or personal data are sent to our servers. Your emotional data 
          remains private and secure, ensuring a safe and trustworthy experience.
        </p>

        <h2>Get Started</h2>
        <p>
          Ready to experience music that truly understands your emotions? Simply allow 
          camera access, let our app analyze your facial expressions, and discover 
          personalized music recommendations that match your current mood.
        </p>

        <div style={{ 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px', 
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', fontStyle: 'italic', color: '#666' }}>
            "Music is the language of emotions. Let our app translate your feelings into 
            the perfect soundtrack for your day."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 