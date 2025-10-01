import React, { useState, useEffect } from 'react';
import LocationCard from './components/LocationCard';
import NetworkCard from './components/NetworkCard';
import SuggestionCard from './components/SuggestionCard';
import useBackgroundTasks from './utils/useBackgroundTasks';

import './App.css';

function App() {
  const [coords, setCoords] = useState({});
  const [network, setNetwork] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  useBackgroundTasks(coords, network);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lastLocation");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCoords(parsed);
    }
  }, []);

  const refresh = () => {
    console.log("🔄 Refresh clicked");
    setRefreshing(true);
    setToastVisible(true);

    // Geolocation
    navigator.geolocation.getCurrentPosition((position) => {
      const newCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCoords(newCoords);
      localStorage.setItem("lastLocation", JSON.stringify(newCoords));
    });

    // Network
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      setNetwork(connection.effectiveType);
    }

    // Set last refreshed time
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastRefreshed(now);

    setTimeout(() => {
      setRefreshing(false);
      setToastVisible(false);
    }, 2000);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? 'dark-theme' : ''}`}>
      {/* Header */}
      <div className="header">
        <h1 className="heading">🧭 <span className="gradient-text">OutCheck</span></h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-btn"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
        </button>
      </div>

      <p className="subtitle">Checks conditions before you step out.</p>

      {/* Refresh Button */}
      <button
        onClick={refresh}
        className={`refresh-btn ${refreshing ? 'refreshing' : ''}`}
      >
        {refreshing ? "✅ Refreshed!" : "🔄 Refresh Info"}
      </button>

      {/* Last Refreshed Time */}
      {lastRefreshed && (
        <p className="last-refreshed">
          ⏰ Last refreshed at {lastRefreshed}
        </p>
      )}

      {/* Main Grid */}
      <div className="grid">
        <div className="card">
          <LocationCard setCoords={setCoords} coords={coords} />
        </div>
        <div className="card">
          <NetworkCard setNetwork={setNetwork} network={network} />
        </div>
        <div className="card">
          <SuggestionCard coords={coords} network={network} />
        </div>
      </div>
      <footer className="footer">
        <p>
          © 2025 OutCheck — Created by <span className="signature">&lt;TK&gt;</span>
        </p>
      </footer>
      {/* Toast Snackbar */}
      {toastVisible && (
        <div className="toast">
          ✅ Data refreshed successfully!
        </div>
      )}
    </div>
  );
}

export default App;
