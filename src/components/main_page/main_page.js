import React from "react";

function MainPage() {
  return (
    <main>
      <div className="hero_slider owl-carousel owl-theme">
        <div className="slide slide-1" />
      </div>
      <section className="department_sec">
        <h1 className="title">DEPARTMENT</h1>
        <div className="row_container">
          <figure>
            <img src="assets/wsfpo_org/protect.png" alt="" />
            <figcaption>
              <h3>Protection</h3>
              <hr />
            </figcaption>
          </figure>
          <figure>
            <img src="assets/wsfpo_org/sport.png" alt="" />
            <figcaption>
              <h3>Sport</h3>
              <hr />
            </figcaption>
          </figure>
          <figure>
            <img src="assets/wsfpo_org/health.png" alt="" />
            <figcaption>
              <h3>Health</h3>
              <hr />
            </figcaption>
          </figure>
          <figure>
            <img src="assets/wsfpo_org/edu.png" alt="" />
            <figcaption>
              <h3>Education</h3>
              <hr />
            </figcaption>
          </figure>
        </div>
      </section>
      <div id="card_sec">
        <section className="card_sec">
          <div className="card_container">
            <div className="cards card_one">
              <h1 className="title">News</h1>
              <div className="card_image">
                <img
                  src="assets/wsfpo_org/photo-1529518152792-d08317b26e22-683x1024.jpg"
                  alt=""
                />
              </div>
              <a className="clr-green-btn" href title target="_blank">
                All
              </a>
            </div>
            <div className="cards card_two">
              <h1 className="title">Event</h1>
              <div className="card_image">
                <img
                  src="assets/wsfpo_org/photo-1517554558809-9b4971b38f39-1024x683.jpg"
                  alt=""
                />
              </div>
              <a className="clr-green-btn" href title target="_blank">
                All
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="logo_sec">
        <h1 className="title">Logo of Companies</h1>
        <div
          className="brand_slider owl-carousel owl-theme"
          style={{ textAlign: "center" }}
        >
          <div className="item" style={{ display: "inline-block" }}>
            <img src="assets/wsfpo_org/insurance2_brand1.png" alt="" />
          </div>
          <div className="item" style={{ display: "inline-block" }}>
            <img src="assets/wsfpo_org/insurance2_brand2.png" alt="" />
          </div>
          <div className="item" style={{ display: "inline-block" }}>
            <img src="assets/wsfpo_org/insurance2_brand3.png" alt="" />
          </div>
          <div className="item" style={{ display: "inline-block" }}>
            <img src="assets/wsfpo_org/insurance2_brand4.png" alt="" />
          </div>
          <div className="item" style={{ display: "inline-block" }}>
            <img src="assets/wsfpo_org/insurance2_brand5.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
