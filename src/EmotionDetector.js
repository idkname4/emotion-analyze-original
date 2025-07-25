import React, { useRef, useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import songs from './songData';
import AdBanner from "./AdBanner";

const MODEL_URL = process.env.PUBLIC_URL + '/models';

const EmotionDetector = () => {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState('');
  const [photo, setPhoto] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(true);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [error, setError] = useState('');
  const [faceDetected, setFaceDetected] = useState(false);

  // Get unique languages from song data
  const languages = Array.from(new Set(songs.map(song => song.language)));
  // Filter songs by detected emotion and selected language
  const recommendedSongs = songs.filter(
    song => song.emotion === emotion && song.language === language
  );

  useEffect(() => {
    const loadModels = async () => {
      setLoading(true);
      setModelsLoaded(false);
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        setModelsLoaded(true);
        setLoading(false);
        setError('');
        console.log('Models loaded successfully');
      } catch (err) {
        setError('Failed to load models. Check model files in public/models.');
        setLoading(false);
        setModelsLoaded(false);
        console.error(err);
      }
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      startVideo();
    }
    // eslint-disable-next-line
  }, [modelsLoaded]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setError('');
        }
      })
      .catch((err) => {
        setError('Error accessing webcam. Please allow camera access and refresh.');
        console.error('Error accessing webcam:', err);
      });
  };

  // Analyze button handler
  const handleAnalyze = async () => {
    if (
      videoRef.current &&
      videoRef.current.readyState === 4 &&
      !videoRef.current.paused &&
      !videoRef.current.ended
    ) {
      try {
        const detections = await faceapi.detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceExpressions();
        if (detections && detections.expressions) {
          setFaceDetected(true);
          const sorted = Object.entries(detections.expressions).sort((a, b) => b[1] - a[1]);
          setEmotion(sorted[0][0]);
          setAnalyzed(true);
          // Capture photo
          const canvas = document.createElement('canvas');
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          setPhoto(canvas.toDataURL('image/png'));
        } else {
          setFaceDetected(false);
          setEmotion('');
          setPhoto(null);
          setAnalyzed(true);
        }
      } catch (err) {
        setError('Detection error: ' + err.message);
        setFaceDetected(false);
        setEmotion('');
        setPhoto(null);
        setAnalyzed(true);
        console.error('Detection error:', err);
      }
    }
  };

  // Retake button handler
  const handleRetake = () => {
    setEmotion('');
    setPhoto(null);
    setFaceDetected(false);
    setAnalyzed(false);
    setError('');
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '80vh',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          flex: 3,
          minWidth: 280,
          padding: '6vw 4vw',
          borderRight: '2px solid #eee',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* Ad Banner - Bottom of Left Panel */}
        <div style={{ width: '100%', margin: '9px 0', textAlign: 'center' }}>
          <AdBanner adSlot="7587599912" style={{ width: 234, height: 60 }} />
        </div>
        <h2 style={{ fontSize: '6vw', marginBottom: '2vw' }}>Emotion Analysis</h2>
        {loading && <p>Loading models...</p>}
        {!loading && modelsLoaded && <p style={{ color: 'green' }}>Models loaded. Ready!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <video
          ref={videoRef}
          autoPlay
          muted
          width={window.innerWidth < 600 ? 220 : 360}
          height={window.innerWidth < 600 ? 160 : 270}
          style={{
            borderRadius: '10px',
            border: faceDetected ? '3px solid #4caf50' : '3px solid #f44336',
            marginTop: 10,
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <div style={{ marginTop: window.innerWidth < 600 ? 12 : 24, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleAnalyze}
            disabled={loading || !modelsLoaded || analyzed}
            style={{
              fontSize: window.innerWidth < 600 ? 14 : 18,
              padding: window.innerWidth < 600 ? '6px 12px' : '8px 24px',
              marginRight: 16,
              background: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              cursor: (loading || !modelsLoaded || analyzed) ? 'not-allowed' : 'pointer',
              opacity: analyzed ? 0.5 : 1,
              minWidth: 80,
              transition: 'opacity 0.2s',
            }}
          >
            Analyze
          </button>
          <button
            onClick={handleRetake}
            disabled={loading || !modelsLoaded || !analyzed}
            style={{
              fontSize: window.innerWidth < 600 ? 14 : 18,
              padding: window.innerWidth < 600 ? '6px 12px' : '8px 24px',
              background: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              cursor: (loading || !modelsLoaded || !analyzed) ? 'not-allowed' : 'pointer',
              opacity: !analyzed ? 0.5 : 1,
              minWidth: 80,
              transition: 'opacity 0.2s',
            }}
          >
            Retake
          </button>
        </div>
        {/* Show captured photo and emotion after analysis */}
        {analyzed && (
          <div style={{ marginTop: window.innerWidth < 600 ? 18 : 32, textAlign: 'center', width: '100%' }}>
            <h3 style={{ fontSize: window.innerWidth < 600 ? 18 : 24 }}>Captured Photo</h3>
            {photo ? (
              <img src={photo} alt="Captured" style={{ width: window.innerWidth < 600 ? 120 : 240, borderRadius: 8, border: '2px solid #333', maxWidth: '100%' }} />
            ) : (
              <p>No face detected.</p>
            )}
            <div style={{ marginTop: 16, fontSize: window.innerWidth < 600 ? 16 : 22 }}>
              {emotion ? `Detected Emotion: ${emotion}` : 'No emotion detected'}
            </div>
          </div>
        )}
        {/* Language Filter */}
        <div style={{ marginTop: window.innerWidth < 600 ? 18 : 30, width: '100%' }}>
          <label htmlFor="language-select" style={{ fontWeight: 'bold', marginRight: 8 }}>Language:</label>
          <select
            id="language-select"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            style={{ fontSize: window.innerWidth < 600 ? 14 : 16, padding: 4, width: '60%' }}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Right Panel */}
      <div
        style={{
          flex: 1,
          padding: window.innerWidth < 600 ? '4vw 2vw' : 32,
          background: '#fafafa',
          minWidth: 0,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Ad Banner - Top of Right Panel */}
        <div style={{ width: '100%', margin: '0 0 16px 0', textAlign: 'center' }}>
          <AdBanner adSlot="7587599912" style={{ width: 234, height: 60 }} />
        </div>
        <h3 style={{ textAlign: 'center', fontSize: window.innerWidth < 600 ? 18 : 24 }}>Recommended Songs</h3>
        {analyzed && emotion && recommendedSongs.length === 0 && (
          <p>No songs found for this emotion and language.</p>
        )}
        <ul style={{ paddingLeft: 20 }}>
          {analyzed && recommendedSongs.map(song => (
            <li key={song.url} style={{ marginBottom: window.innerWidth < 600 ? 10 : 18 }}>
              <a href={song.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', fontSize: window.innerWidth < 600 ? 14 : 18 }}>{song.title}</a>
              <span style={{ marginLeft: 8, color: '#555', fontSize: window.innerWidth < 600 ? 12 : 16 }}>by {song.artist}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmotionDetector;
