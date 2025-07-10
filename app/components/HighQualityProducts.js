import ProductCard from "./ProductCard";

export default function HighQualityProducts() {
  return (
    <section
      className="py-5 mb-5 high-quality-products"
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 py-5">
            <h1 className="section-title py-4 mt-0">High Quality Products</h1>
            <p className="section-subtitle">
              Crafting Excellence, Delivering Quality
            </p>
          </div>
        </div>

        {/* Curved Line Background */}
        <div className="curved-line-background">
          <img
            src="/assets/SVG/Decorative1.svg"
            alt="Decorative curved line"
            className="curved-line-img"
          />
        </div>

        {/* Bento Grid Layout */}
        <div
          className="row mb-1 products-row-top"
          style={{ maxWidth: "1600px" }}
        >
          {/* Large Chalks Card */}
          <div className="col-lg-8 col-md-7 col-12 mb-3 mb-md-0">
            <ProductCard
              image="/assets/Chalks.png"
              title="Chalks"
              height="420px"
              className="chalks-card"
            />
          </div>

          {/* Modeling Clay Card */}
          <div className="col-lg-4 col-md-5 col-12">
            <ProductCard
              image="/assets/ModelingClayImg.png"
              title={
                <>
                  Modeling
                  <br />
                  Clay
                </>
              }
              height="420px"
              className="clay-card"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row products-row-bottom" style={{ maxWidth: "1600px" }}>
          {/* Dough Card */}
          <div className="col-lg-4 col-md-4 col-12 mb-3">
            <ProductCard
              image="/assets/DoughImg.png"
              title="Dough"
              height="415px"
              showBadge={true}
              className="dough-card"
            />
          </div>

          {/* Crayons Card */}
          <div className="col-lg-4 col-md-4 col-12 mb-3">
            <ProductCard
              image="/assets/CrayonsImg.png"
              title="Crayons"
              height="415px"
              className="crayons-card"
            />
          </div>

          {/* Moulds Card */}
          <div className="col-lg-4 col-md-4 col-12 mb-3">
            <ProductCard
              image="/assets/MouldsImg.png"
              title="Moulds"
              height="415px"
              className="moulds-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
