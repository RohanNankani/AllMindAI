export default function TitleComponent() {
  return (
    <section className="hero-section mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1>Company ownership, from the future</h1>
        <p>A next generation platform for modern founders, powered by AI.</p>
        <button className="cta-button">Request a Demo</button>
        <div className="mt-12">
          <div className="video-wrapper">
            <video 
              className="background-video" 
              src="/ring.mp4" 
              type="video/mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}