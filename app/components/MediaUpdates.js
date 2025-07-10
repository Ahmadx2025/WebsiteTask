import NewsSection from "./NewsSection";
import BlogSection from "./BlogSection";

export default function MediaUpdates() {
  return (
    <section className="py-5 mt-5 relative">
      <div className="container">
        <div className="row mb-5 pb-4">
          <div className="col-12">
            <h2 className="section-title">Media & Updates</h2>
            <p className="section-subtitle mt-4 pt-3">
              Stay informed with the latest news, blogs, and events.
            </p>
          </div>
        </div>

        <div className="row media-updates-row" style={{ gap: "140px" }}>
          <NewsSection />
          <BlogSection />
        </div>
      </div>

      {/* Footer with Wave Effect and Scattered Elements */}
      <img
        src="/assets/footer.png"
        alt="Wave"
        className="footer-wave"
      />
    </section>
  );
}
