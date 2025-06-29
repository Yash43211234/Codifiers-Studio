import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaX } from 'react-icons/fa';
import { Box, Fab } from '@mui/material'; // ✅ Fab comes from @mui/material
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-columns">
          {/* Useful Links */}
          <div className="footer-column">
            <h3>Useful link</h3>
            <ul>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Services
                </Link>
              </li>

              <li><Link to="/upcoming">Legal</Link></li>
              <li><Link to="/upcoming">Privacy Policy</Link></li>

              <li>
                <Link
                  to="/connect-with-us"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Contact us
                </Link>
              </li>

            </ul>
          </div>

          {/* About Us */}
          <div className="footer-column">
            <h3>About us</h3>
            <p>
              We are a Music Institute, Production house & an Independent Record Label from Siliguri, Darjeeling, India.
            </p>
          </div>

          {/* Connect with Us */}
          <div className="footer-column">
            <h3>Connect with us</h3>
            <p><span>💬</span> <Link to="/contact">Contact us</Link></p>
            <p>
              <FaEnvelope style={{ marginRight: '8px' }} />
              <a href="mailto:team@thechordifiers.studio">team@thechordifiers.studio</a>
            </p>

            <p><FaWhatsapp /> <a href="https://wa.me/917811092672" target="_blank" rel="noopener noreferrer">+91 7811092672</a></p>

            <div className="social-icons">
              <Box
                sx={{
                  '& > :not(style)': { m: 1 },
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Fab
                  color="primary"
                  size="small"
                  component="a"
                  href="https://facebook.com/chordifiersstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <FaFacebookF />
                </Fab>
                <Fab
                  color="primary"
                  size="small"
                  component="a"
                  href="https://linkedin.com/company/chordifiersstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >

                  <FaLinkedinIn />

                </Fab>
                <Fab
                  color="secondary"
                  size="small"
                  component="a"
                  href="https://instagram.com/chordifiers.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >

                  <FaInstagram />

                </Fab>
                <Fab
                  size="small"
                  sx={{ backgroundColor: '#000', color: '#fff' }}
                  component="a"
                  href="https://x.com/theone11show"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="sm" />
                </Fab>

              </Box>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .footer-top {
            background: #000;
            color: #fff;
            padding: 2rem 1rem;
          }

          .footer-columns {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: auto;
          }

          .footer-column {
            flex: 1;
            padding: 1rem;
            min-width: 250px;
          }

          .footer-column h3 {
            margin-bottom: 1rem;
          }

          .footer-column ul {
            list-style: none;
            padding: 0;
          }

          .footer-column ul li a {
            color: yellow;
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
          }

          .footer-column p {
            margin-bottom: 0.5rem;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .footer-column a {
            color: yellow;
            text-decoration: none;
          }

          .social-icons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }

          .social-icons a {
            background: #fff;
            color: #000;
            padding: 6px;
            border-radius: 50%;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            transition: background 0.3s;
          }

          .social-icons a:hover {
            background: yellow;
            color: black;
          }

          @media (max-width: 768px) {
            .footer-columns {
              flex-direction: column;
              align-items: center;
          }

          .footer-column {
              text-align: center;
          }

          .social-icons {
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Footer;
