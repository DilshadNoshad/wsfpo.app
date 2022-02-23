import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div>
  <div id="header">
    <section>
      <div className="top_header">
        <div className="main_image">
          <div className="logo">
            <img src="assets/wsfpo_org/logo.png" alt="wsfo logo" />
          </div>
        </div>
        <div className="main_title">
          <p>World Special Family Protection Organization</p>
          <p>Family is not an important thing, family is everything.</p>
        </div>
      </div>
    </section>
  </div>
  <header>
    <section>
      <nav>
        <ul>
          <li><Link className="main_menu-list" to="/reg-vote">VOTE</Link></li>
          <li><Link className="main_menu-list" to="/">Home</Link></li>
          <li>
            <a className="main_menu-list" href>About Wsfpo</a>
            <ul className="sub-menu">
              <li id className="menu-item">
                <Link to="/about-history"><span>History of WSFPO</span></Link>
              </li>
              <li className="menu-item">
                <Link to="/vision-goals" ><span>Vision and Goals</span></Link>
              </li>
              <li className="menu-item">
                <a href><span>Main Bodies</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>WSFPO’s Logo</span></a>
              </li>
            </ul>
          </li>
          <li><a className="main_menu-list" href>What We Do</a></li>
          <li>
            <a className="main_menu-list" href>Department</a>
            <ul className="sub-menu">
              <li id className="menu-item">
                <a href><span>Family Protection</span></a>
              </li>
              <li className="menu-item">
                <a href aria-current="page"><span>Sport</span></a>
              </li>
              <li className="menu-item">
                <a href><span>Health</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>Education</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a className="main_menu-list" href>Partners</a>
            <ul className="sub-menu">
              <li id className="menu-item">
                <a href><span>Official Representatives</span></a>
              </li>
              <li className="menu-item">
                <a href aria-current="page"><span>Official Member</span></a>
              </li>
              <li className="menu-item">
                <a href><span>International Collaborators</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>International Collaborators</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>Sponsors</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>Partner’s Request</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a className="main_menu-list" href>Resourse</a>
            <ul className="sub-menu">
              <li id className="menu-item">
                <a href><span>Hall Of Fame</span></a>
              </li>
              <li className="menu-item">
                <a href aria-current="page"><span>Gallery</span></a>
              </li>
              <li className="menu-item">
                <a href><span>Documents</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>Databases</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>WSPFO E-Library</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a className="main_menu-list" href>Services</a>
            <ul className="sub-menu">
              <li id className="menu-item">
                <a href><span>Holding events,<br />seminars, courses</span></a>
              </li>
              <li className="menu-item">
                <a href="https://wsfpo.org/vision-and-goals/" aria-current="page"><span>Musculoskeletal <br />Assessment</span></a>
              </li>
              <li className="menu-item">
                <a href><span>Volunteers</span></a>
              </li>
              <li id="menu-item-518" className="menu-item">
                <a href><span>How to donate to the WSFPO Organization</span></a>
              </li>
            </ul>
          </li>
          <li>
            <div className="search-field">
              <form method action>
                <ion-icon name="search-outline" /><input type="text" className="field" name="s" placeholder="Enter your search" /><input type="submit" className="submit" defaultValue style={{display: 'none'}} />
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</div>

  );
}

export default Header;
