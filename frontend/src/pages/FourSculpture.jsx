import React from 'react';
import '../styles/sculpture.css';

const FourSculpture = () => {
  return (
    <div className="sculpture-page">
      {/* Outer frame with warm background */}
      <div className="sculpture-frame">
        
        {/* Main content panel */}
        <main className="sculpture-panel">
          
          {/* Header Section */}
          <header className="sculpture-header">
            <span className="sculpture-eyebrow">Quartz Crystal Sculpture</span>
            <h1 className="sculpture-title">Four</h1>
          </header>

          {/* Spacer */}
          <div className="sculpture-spacer-lg" />

          {/* Description Section */}
          <section className="sculpture-description">
            <p>
              Four draws its name from the four classical elements—Earth, Air, Fire, 
              and Water—each present in the crystalline structure and the light it 
              captures. The sculpture stands as a meditation on elemental balance, 
              its natural facets refracting and reflecting the ambient qualities of 
              its surroundings.
            </p>
            <p>
              Intended as a spatial anchor rather than a decorative object, Four 
              establishes presence within a room. It invites stillness, drawing 
              attention not to itself, but to the quality of light and atmosphere 
              in the space it inhabits.
            </p>
          </section>

          {/* Spacer */}
          <div className="sculpture-spacer-xl" />

          {/* Visual Section */}
          <section className="sculpture-visual">
            {/* Hero Image */}
            <div className="sculpture-image-hero">
              <img 
                src="https://customer-assets.emergentagent.com/job_elemental-art/artifacts/sapwohmp_crystal%20image.jpg" 
                alt="Four - Quartz Crystal Sculpture"
                className="sculpture-img"
              />
            </div>

            {/* Video Section */}
            <div className="sculpture-video">
              <div className="video-wrapper">
                <iframe 
                  src="https://www.youtube.com/embed/mlYTNbPvq1I?si=xM-V2tuPmnewIEle" 
                  title="Four - Crystal Sculpture"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Spacer */}
          <div className="sculpture-spacer-xl" />

          {/* Quiet Divider */}
          <div className="sculpture-divider" />

          {/* Spacer */}
          <div className="sculpture-spacer-lg" />

          {/* Specifications Section */}
          <section className="sculpture-specs">
            <h2 className="specs-heading">Specifications</h2>
            
            <div className="specs-grid">
              <div className="specs-item">
                <span className="specs-label">Material</span>
                <span className="specs-value">Natural Quartz Crystal</span>
              </div>
              <div className="specs-item">
                <span className="specs-label">Height</span>
                <span className="specs-value">Approximately 6 feet</span>
              </div>
              <div className="specs-item">
                <span className="specs-label">Width</span>
                <span className="specs-value">Approximately 27 inches</span>
              </div>
              <div className="specs-item">
                <span className="specs-label">Origin</span>
                <span className="specs-value">Single Source</span>
              </div>
            </div>

            {/* Price */}
            <div className="sculpture-price">
              <span className="price-value">$17,500</span>
            </div>
          </section>

          {/* Spacer */}
          <div className="sculpture-spacer-xl" />

          {/* Quiet Divider */}
          <div className="sculpture-divider" />

          {/* Spacer */}
          <div className="sculpture-spacer-lg" />

          {/* Contact Section */}
          <section className="sculpture-contact">
            <p className="contact-text">For inquiries</p>
            <a 
              href="mailto:studio@four-sculpture.com" 
              className="contact-email"
            >
              studio@four-sculpture.com
            </a>
          </section>

          {/* Spacer */}
          <div className="sculpture-spacer-xl" />

        </main>

        {/* Footer */}
        <footer className="sculpture-footer">
          <span className="footer-text">© 2025</span>
        </footer>

      </div>
    </div>
  );
};

export default FourSculpture;
