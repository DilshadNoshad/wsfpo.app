import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <section>
          <div className="footer_blocks_wrapper">
            <div className="footer_block footer_btn">
              <a className="btn_outline" href>
                Contact us
              </a>
            </div>
            <div className="footer_block footer_btn">
              <a className="btn_outline" href>
                Suggestions
              </a>
            </div>
            <div className="footer_logo">
              <div className="image_container-footer">
                <figure>
                  <img src="assets/wsfpo_org/logo-SEFID-128.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="footer_bottom"></div>
      <div className="copyright">
        © 2020 World Special Family Protection Organization. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
