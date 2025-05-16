import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-columns">
          {/* Logo/Brand */}
          <div className="footer-column logo">
            <h2>The Chordifiers Studio</h2>
            <p>Your Sound. Your Story. Your Space.</p>
          </div>

          {/* Contact Info */}
          <div className="footer-column contact">
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> info@chordifiers.com</p>
            <p><strong>Instagram:</strong> @chordifiersstudio</p>
            <p><strong>Facebook:</strong> facebook.com/chordifiersstudio</p>
          </div>

          {/* Address */}
          <div className="footer-column address">
            <h3>Studio Address</h3>
            <p>Opp. Don Bosco School, Saktigarh</p>
            <p>Siliguri, West Bengal - 734005</p>
            <p><strong>Phone:</strong> (+91) 78110 92672</p>
            <h3 style={{ marginTop: '1rem' }}>© The Chordifiers Studio</h3>
            <p>2025 • All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="footer-bottom">
        <div className="footer-bottom-columns">
          <div className="bottom-column social">Follow us on Instagram</div>
          <div className="bottom-column email">Send us your queries</div>
          <div className="bottom-column book">Book a session now</div>
        </div>
      </div>

      {/* ✅ Responsive styling */}
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
            min-width: 250px;
            margin-bottom: 1rem;
          }

          .logo h2 {
            font-size: 40px;
            margin-bottom: 0.5rem;
            color: #0a0a23;
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
            font-weight: 600;
            font-size: 1.1rem;
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
              width: 93%;
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
