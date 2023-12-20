import React from "react";
import Header from "../Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <section>
          <h1 className="display-4 mb-4">About Us</h1>
          <p className="lead">
            Welcome to The Generics, your premier destination for high-quality
            generic products! Our diverse range of items caters to your everyday
            needs, from healthcare essentials to trendy accessories. We've
            designed our store to simplify your shopping experience while
            providing unbeatable value. At The Generics, we prioritize
            affordability and quality. Explore our virtual aisles and discover
            the convenience of shopping for reliable products that enhance your
            lifestyle.
          </p>
        </section>

        <section className="d-flex ">
          <img
            src="https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium"
            alt="The Generics Store"
            className="img-fluid rounded-circle border border-dark p-2 m-4"
            style={{
              width: "300px",
              height: "300px",
            }}
          />

          <div className="flex-grow-1">
            <h2 className="h4 mb-3">Why Choose The Generics?</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Quality Assurance:</strong> Our generics undergo
                stringent quality checks to meet industry standards, providing
                you with peace of mind and trust in every purchase.
              </li>
              <li>
                <strong>Affordability:</strong> Enjoy cost-effective solutions
                without compromising on quality. Everyone deserves access to
                reliable products without the premium price tag.
              </li>
              <li>
                <strong>Diverse Selection:</strong> Explore a wide array of
                generic products across various categories, including health and
                wellness, household essentials, and stylish accessories.
              </li>
              <li>
                <strong>User-Friendly Platform:</strong> Our website is designed
                with you in mind. Navigate effortlessly, find what you need
                quickly, and enjoy a seamless shopping experience from the
                comfort of your home.
              </li>
              <li>
                <strong>Secure Checkout:</strong> Your privacy and security are
                our top priorities. Rest assured, our secure checkout process
                ensures that your personal information is handled with the
                utmost confidentiality.
              </li>
            </ul>
            <p>
              Shop with confidence at The Generics, where quality,
              affordability, and convenience converge to redefine your online
              shopping experience. Start browsing now and discover the world of
              possibilities with our curated selection of generics!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
