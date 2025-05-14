import React from 'react';

function Footer() {
  return (
    <div className="footer">

      <div className="footer-top">
        <div className="footer-columns">
          <div className="footer-column logo">
            <h2>The Chordifiers Studio</h2>
          </div>

          <div className="footer-column contact">
            <p>Email:</p>
            <p>hello@figma</p>
            <p>Instagram:</p>
            <p>@figma</p>
            <p>Facebook:</p>
            <p>figma</p>
          </div>

          <div className="footer-column address">
            <h3>Address</h3>
            <p>Saktigarh, Siliguri</p>
            <p>West Bengal - 734005</p>
            <p>(+91)7811092672</p>
            <h3>©The Chordifiers Studio</h3>
            <p>2025 All Rights Reserved</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-columns">
          <div className="bottom-column social">Our Socials</div>
          <div className="bottom-column email">Email us</div>
          <div className="bottom-column book">Book us</div>
        </div>
      </div>

      {/* ✅ Media queries and CSS in the same file */}
      <style>
        {`
          .footer-top {
            background: #d0fbf9;
            color: black;
            padding: 2rem 1rem;
          }

          .footer-columns {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .footer-column {
            flex: 1;
            padding: 0 1rem;
          }

          .logo h2 {
            font-size: 40px;
          }

          .footer-bottom {
            height: 300px;
          }

          .footer-bottom-columns {
            display: flex;
            justify-content: space-between;
            height: 100%;
          }

          .bottom-column {
            flex: 1;
            padding: 0 1rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .bottom-column.social {
            background: #1f41ff;
          }

          .bottom-column.email {
            background: #000000;
          }

          .bottom-column.book {
            background: #d900ff;
          }

          /* 🔻 Responsive for Mobile */
          @media (max-width: 768px) {
            .footer-columns,
            .footer-bottom-columns {
              flex-direction: column;
              align-items: center;
            }

            .footer-column,
            .bottom-column {
              width: 100%;
              text-align: center;
              padding: 1rem;
            }

            .logo h2 {
              font-size: 28px;
            }

            .footer-bottom {
              height: 400px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
