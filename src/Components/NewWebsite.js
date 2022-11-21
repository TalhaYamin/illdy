import React from "react";
import logo from "../assets/illdylogo.png";
import image1 from "../assets/front-page-project-1.jpg";
import image2 from "../assets/front-page-project-2.jpg";
import image3 from "../assets/front-page-project-3.jpg";
import image4 from "../assets/front-page-project-4.jpg";
import image5 from "../assets/front-page-team-3.jpg";
import image6 from "../assets/card-1.jpg";
import image7 from "../assets/card-2.jpg";
import image8 from "../assets/card-3.jpg";
import image9 from "../assets/team-member-1.jpg";
import image10 from "../assets/team-member-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/fontawesome-free-solid";

function NewWebsite() {
  return (
    <>
      <div className="navbar">
        <div className="log-container">
          <img src={logo} alt="images" />
        </div>

        <ul>
          <li>
            <b>
              <a href="#home">About</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#home">Portfolio</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#home">Testimonials</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#news">Services</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#contact">Blog</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#about">Our Team</a>
            </b>
          </li>
          <li>
            <b>
              <a href="#about">Contact Us</a>
            </b>
          </li>
        </ul>
      </div>

      <div className="backgroundImage">
        <div className="imageText">
          <h1>
            Clean<span>.</span>Slick<span>.</span>Pixel Perfect
          </h1>
        </div>

        <p className="imageParagraph">
          lldy is a great one-page theme, perfect for developers and designers
          but also for someone who just wants a <br /> new website for his
          business. Try it now!
        </p>
        <div className="imageButton">
          <button className="imageButtonLeftColor">
            <b>Learn more</b>
          </button>
          <button className="imageButtonRightColor">
            <b>Download</b>
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="about">
        <h1 className="aboutHeading">About</h1>
        <p className="aboutParagraph">
          It is an amazng one-page theme with great features that offers an
          incredible experience. It is easy to install, make changes, adapt for
          your <br /> business. A modern design with clean lines and styling for
          a wide variety of content, exactly how a business design should be.
          You can add <br /> as many images as you want to the main header area
          and turn them into slider.
        </p>
      </div>
      <br />
      <br />
      <br />

      <div className="progressBar">
        <label>Typography</label>{" "}
        <progress value="32" max="100">
          {" "}
          32%{" "}
        </progress>
        <label>Design</label>
        <progress value="50" max="100">
          {" "}
          50%{" "}
        </progress>
        <label>Development</label>{" "}
        <progress value="70" max="100">
          {" "}
          70%{" "}
        </progress>
      </div>
      <br />
      <br />

      <div className="projects">
        <h1 className="projectHeading">Projects</h1>
        <p className="projectQuote">You'll love our work. Check it out!</p>
      </div>

      <div className="gallery-section">
        <div className="imgSize">
          <img src={image1} alt="images" />
        </div>
        <div className="imgSize">
          <img src={image2} alt="images" />
        </div>
        <div className="imgSize">
          <img src={image3} alt="images" />
        </div>
        <div className="imgSize">
          <img src={image4} alt="images" />
        </div>
      </div>

      <div className="testamonials">
        <div className="testamonials-heading">
          <h1>Testimonials</h1>
        </div>
        <div className="testamonials-image">
          <img src={image5} alt="images" />
        </div>
        <div className="testamonials-text">
          <p>
            "Awesome theme with great design and awesome support. If you don’t
            know how to code your own WordPress theme, but you still <br /> want
            a good-looking website for your business, Illdy might be exactly
            what you need. It is a slick theme with a lot of of features to{" "}
            <br /> choose from."
          </p>
          <br />
        </div>
        <div className="testamonial-name">
          <h1>Mike Muller</h1>
        </div>
      </div>

      <div className="services">
        <div className="services-content">
          <h1>Services</h1>
          <p>
            In order to help you grow your business, our carefully selected
            experts can advise you in in the following areas:
          </p>
        </div>
      </div>

      <div className="service-type">
        <div className="web-design">
          <FontAwesomeIcon icon={faCode} className="codeClass" />
          <h1>Web Design</h1>
          <p>
            Consectetur adipiscing elit. Praesent molestie urna <br /> hendrerit
            erat tincidunt tempus. Aliquam a leo risus. <br /> Fusce a metus non
            augue dapibus porttitor at in <br /> mauris. Pellentesque commodo...
          </p>
        </div>
        <div className="web-developement">
          <FontAwesomeIcon icon={faCode} className="codeClass" />
          <h1>WEB DEVELOPEMENT</h1>
          <p>
            Consectetur adipiscing elit. Praesent molestie urna <br /> hendrerit
            erat tincidunt tempus. Aliquam a leo risus. <br /> Fusce a metus non
            augue dapibus porttitor at in <br /> mauris. Pellentesque commodo...
          </p>
        </div>
        <div className="seo-analysis">
          <FontAwesomeIcon icon={faCode} className="codeClass" />
          <h1>SEO Analysis</h1>
          <p>
            Consectetur adipiscing elit. Praesent molestie urna <br /> hendrerit
            erat tincidunt tempus. Aliquam a leo risus. <br /> Fusce a metus non
            augue dapibus porttitor at in <br /> mauris. Pellentesque commodo...
          </p>
        </div>
      </div>

      <section className="latest-news">
        <h1>Latest News</h1>
        <p>
          If you are interested in the latest articles in the industry, take a
          sneak peek at our blog. You have nothing to loose!
        </p><br /><br />
        <button>&raquo; See blog </button>
        <br /><br />
        <div className="container">
          <div className="card">
            <div className="img-container">
              <img src={image8} alt="Avatar" width="100%" />
            </div>
            <div className="description">
              <a href="/">We Have Made Illdy Theme SEO Friendly</a>
              <p>
                Illdy One Page WordPress theme is fully SEO friendly and is
                ready to help you to achieve the highest rankings…
              </p>
              <a href="#" class="previous">
                &raquo; Read more
              </a>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src={image6} alt="Avatar" width="100%" />
            </div>
            <div className="description">
              <a href="/">We Have Made Illdy Theme SEO Friendly</a>
              <p>
                Illdy One Page WordPress theme is fully SEO friendly and is
                ready to help you to achieve the highest rankings…
              </p>
              <a href="#" class="previous">
                &raquo; Read more
              </a>
            </div>
          </div>

          <div className="card">
            <div className="img-container">
              <img src={image7} alt="Avatar" width="100%" />
            </div>

            <div className="description">
              <a href="/">We Have Made Illdy Theme SEO Friendly</a>
              <p>
                Illdy One Page WordPress theme is fully SEO friendly and is
                ready to help you to achieve the highest rankings…
              </p>
              <a href="#" class="previous">
                &raquo; Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="counter">
        <div className="counter1">
          <h1>260</h1>
          <h4>PROJECTS</h4>
        </div>
        <div className="counter1">
          <h1>120</h1>
          <h4>CLIENTS</h4>
        </div>
        <div className="counter1">
          <h1>260</h1>
          <h4>COFFEE</h4>
        </div>
      </section>

      <section className="team-members">
        <div className="team-member-heading">
          <h1>Team</h1>
          <p>
            Meet the people that are going to take your business to the next
            level.
          </p>
        </div>
        <div className="team-member-list">
          <div className="container">
            <div className="team-member-wrapper">
              <div className="team-member-item">
                <div className="team-member-pic">
                  <img src={image9} alt="images" />
                </div>
                <div className="team-member-description">
                  <h1>Mark Lawrance</h1>
                  <h5>Web Designer</h5>
                  <p>Creative, detail-oriented, always focused.</p>
                </div>
              </div>

              <div className="team-member-item">
                <div className="team-member-pic">
                  <img src={image10} alt="images" />
                </div>
                <div className="team-member-description">
                  <h1>Jane Stenton</h1>
                  <h5>SEO Specialist</h5>
                  <p>
                    Curious, tech-geeck and gets serious when it comes to work.
                  </p>
                </div>
              </div>

              <div className="team-member-item">
                <div className="team-member-pic">
                  <img src={image5} alt="images" />
                </div>
                <div className="team-member-description">
                  <h1>John Smith</h1>
                  <h5>Developer</h5>
                  <p>Enthusiastic, passionate with great sense of humor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form-wrapper">
        <div className="container">
          <div className="contact-us-heading">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-us-details-wrapper">
            <div className="contact-address-wrapper">
              <div className="contact-address-heading">
                <p>Address</p>
              </div>
              <div className="contact-address-details">
                <p>Street 221B Baker Street, London, UK</p>
              </div>
            </div>

            <div className="customer-support-wrapper">
              <div className="customer-support-heading">
                <p>Customer Support</p>
              </div>
              <div className="customer-support-details">
                <p>E-mail: contact@site.com</p>
                <p>Phone: (555) 555-5555</p>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="first-row">
              <div className="input-wrapper">
                <label htmlFor="name">Your Name (required)</label>
                <input type="text" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="name">Your Email (required)</label>
                <input id="name" type="text" />
              </div>

              <div className="input-wrapper">
                <label>Subject</label>
                <input type="text" />
              </div>
            </div>

            <div className="message-wrapper">
              <label>Your Message (required)</label>
              <input type="text" />
            </div>

            <div className="button-container">
              <button>Send</button>
            </div>
          </div>{" "}
        </div>
      </section>

      <section className="upper-footer-wrapper">
        <div className="container">
          <div className="upper-footer-contents">
            <div className="upper-footer-information">
              <h1>Product</h1>
              <p>&raquo;Our work</p>
              <p>&raquo;Club</p>
              <p>&raquo;News</p>
              <p>&raquo;Announcemet</p>
            </div>

            <div className="upper-footer-information">
              <h1>INFORMATION</h1>
              <p>&raquo;Pricing</p>
              <p>&raquo;Terms</p>
              <p>&raquo;Affiliates</p>
              <p>&raquo;Blog</p>
            </div>

            <div className="upper-footer-information">
              <h1>SUPPORT</h1>
              <p>&raquo;Documentation</p>
              <p>&raquo;FAQs</p>
              <p>&raquo;Forums</p>
              <p>&raquo;Contact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lower-footer">
        <div className="lower-footer-content">
          <p>
            Theme: Illdy.<span>© Copyright 2017. All Rights Reserved.</span>{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default NewWebsite;
