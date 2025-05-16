import React from 'react';
import { useNavigate } from 'react-router-dom';


function Booking() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      {/* --- Booking Rows --- */}
      <div className="booking-container">
        {[1, 2].map((row) => (
          <div className="booking-row" key={row}>
            <div className="booking-column dark">
              <p className="booking-heading">Booking Experience for Slot</p>
            </div>

            {[1, 2].map((col) => (
              <div className="booking-column content" key={col}>
                <img
                  src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                  alt="preview"
                  className="booking-image"
                />
                <div className="text-block">
                  <h2>Hip Hop Foundations</h2>
                  <p>
                    This class helps you develop your own unique movement vocabulary
                    and respond to music in the moment.
                  </p>
                </div>
                <div className="text-box">
                  <button onClick={handleRegisterClick}>Register your slot</button>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Row 3 & 4: Wide Images */}
        {[3, 4].map((row) => (
          <div className="booking-row" key={row}>
            <div className="booking-column dark" />
            <div className="booking-image-wide-container">
              <img
                src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                alt="shared"
                className="booking-image-wide"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Advanced CSS Styling */}
      <style>{`
        .booking-container {
          width: 100%;
          
        }

        .booking-row {
          display: flex;
          flex-wrap: wrap;
          margin: 0;

        }

        .booking-column {
          flex: 1;
          box-sizing: border-box;
          padding: 20px;
        }

        .booking-column.dark {
          background-color: black;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 600px;
        }

        .booking-heading {
          font-size: 2.5rem;
          text-align: left;
        }

        .booking-column.content {
          background-color: #f5f5f5;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 600px;
        }

        .booking-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
        }

        .text-block {
          margin-top: 15px;
        }

        .text-block h2 {
          margin: 0 0 5px;
          font-size: 1.1rem;
        }

        .text-block p {
          margin: 0;
          font-size: 0.9rem;
        }

        .text-box {
          margin-top: auto;
          border: 0px solid #000;
          padding: 10px;
        }

        .text-box button {
          padding: 8px 16px;
          background-color: #d0fbf9;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }

        .booking-image-wide-container {
          flex: 2;
          padding: 40px;
        }

        .booking-image-wide {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Responsive Media Queries */
        @media (max-width: 1024px) {
          .booking-heading {
            font-size: 2rem;
          }
          .booking-image {
            height: 250px;
            onject-fit:cover;
          }
          .booking-image-wide {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .booking-row {
            flex-direction: column;
          }

          .booking-column,
          .booking-image-wide-container {
            flex: 1 1 100%;
          }

          .booking-heading {
            font-size: 1.7rem;
          }

          .booking-image {
            height: 220px;
          }

          .booking-image-wide {
            height: 300px;
          }

          .text-block h2 {
            font-size: 1rem;
          }

          .text-block p {
            font-size: 0.8rem;
          }

          .text-box {
            margin-top: 10px;
          }

          .text-box button {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Booking;
