export default function NewsSection() {
  return (
    <div
      className="mb-4 col news-section"
      style={{
        width: "620px",
        borderRadius: "60px",
        position: "relative",
        paddingLeft: "10px",
      }}
    >

  <div style={{ position: "relative", width: "100%" }}>
  <img
    src="/assets/NewsImg.png"
    className="img-fluid news-main-image"
    alt="News"
    style={{
      width: "100%",
      height: "560px",
      objectFit: "cover",
      borderRadius: "60px",
      display: "block"
    }}
  />
  <div className="news-image-overlay" style={{ borderRadius: "60px" }}></div>
</div>


      <img
        src="/assets/svg/Decorative3.svg"
        className="absolute news-decoration-left"
        alt="News"
        style={{
          position: "absolute",
          bottom: "310px",
          left: "-40px",
          zIndex: "-1",
          width: "195px",
          height: "191px",
        }}
      />
      <img
        src="/assets/svg/Decorative4.svg"
        className="absolute news-decoration-right"
        alt="News"
        style={{
          position: "absolute",
          bottom: "330px",
          right: "-10px",
          zIndex: "-1",
          width: "90px",
          height: "auto",
        }}
      />

      <div className="mt-5 news-content">
        <h4 className="news-title">News Title</h4>
        <p className=" news-text mb-3">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim
        </p>
        <a href="#" className="read-more-btn">
          Read More
        </a>
      </div>
    </div>
  );
}
