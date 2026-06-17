// LeftPanel.jsx
import React from 'react';
import './left.css';

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <h1 className="main-heading">
        Join hundreds of students already making campus trade easy.
      </h1>

      <div className="logo-section">
        <div className="logo-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
            />
          </svg>
        </div>
        <span className="logo-text">Campus link</span>
      </div>

      <p className="subtitle">
        You're only a few taps away from connecting with students who buy and sell what you need on campus.
      </p>
    </div>
    
  );
}