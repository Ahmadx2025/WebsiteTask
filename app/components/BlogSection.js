export default function BlogSection() {
  return (
    <div
      className="mb-4 col blog-section"
      style={{
        width: "620px",
        borderRadius: "60px",
        position: "relative",
        paddingLeft: "50px",
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
  <img
    src="/assets/BlogImg.png"
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
        src="/assets/svg/Decorative2.svg"
        className="absolute blog-decoration "
        alt="News"
        style={{
          position: "absolute",
          bottom: "300px",
          left: "-10px",
          zIndex: "-1",
          width: "237px",
          height: "auto",
        }}
      />
      <div
        className="mt-5 blog-content"
        style={{
          marginLeft: "20px",
        }}
      >
        <h4 className="news-title">Blog Title</h4>
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
