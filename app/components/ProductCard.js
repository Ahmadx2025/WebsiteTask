export default function ProductCard({
  image,
  title,
  height = "420px",
  showBadge = false,
  className = "",
}) {
  return (
    <div className={`card product-card ${className}`} style={{ height }}>
      <img src={image} className="card-img" alt={title} />
      <div className="card-img-overlay">
        <h3 className="product-title">{title}</h3>
        {showBadge && (
          <a href=""
            className="badge product-btn position-absolute "
            style={{
              width: "160px",
              height: "30px",
              bottom: "85px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Explore Products
          </a>
        )}
      </div>
    </div>
  );
}
