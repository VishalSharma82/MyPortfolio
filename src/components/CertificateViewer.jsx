// CertificateViewer.jsx
import React from 'react';
import './Internship_detail.css';

export default function CertificateViewer({ img }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = img;
    link.download = 'Internship_Certificate.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cert-viewer-container">
      <div className="cert-glass-box animate-reveal">
        <img src={img} alt="Certificate" className="cert-image-premium" />
        
        <div className="cert-controls">
          <button onClick={handleDownload} className="cert-btn-primary">
            <i className='bx bxs-download'></i> Download
          </button>
          
          <a href="/#experience" className="cert-btn-secondary">
            <i className='bx bx-arrow-back'></i> Go Back
          </a>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="reachcure-section" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, padding: 0 }}></div>
    </div>
  );
}
