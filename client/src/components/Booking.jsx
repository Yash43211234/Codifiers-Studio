import React from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="booking-container">
  {[1, 2].map((row) => (
    <div className="booking-row" key={row}>
      <div className="booking-column dark">
        <p className="booking-heading">Reserve Your Studio Slot</p>
      </div>

      {[1, 2].map((col) => {
        const isFirst = row === 1 && col === 1;
        const isSecond = row === 1 && col === 2;
        const isThird = row === 2 && col === 1;
        const isFourth = row === 2 && col === 2;

        let imageUrl = '';
        let heading = '';
        let description = '';

        if (isFirst) {
          imageUrl = '';
          heading = 'Electronic Beat Crafting';
          description =
            'Dive into synths, drums, and sequencing. Create your own beats using modern tools like FL Studio and Ableton.';
        } else if (isSecond) {
          imageUrl = 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg';
          heading = 'Vocal Production Lab';
          description =
            'Learn how to record, layer, and perfect vocals with industry-standard plugins and processing techniques.';
        } else if (isThird) {
          imageUrl = 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/20241211_155039+(1)+(1).jpg';
          heading = 'Mixing Essentials';
          description =
            'Understand EQ, compression, and reverb to bring balance and clarity to your tracks.';
        } else if (isFourth) {
          imageUrl = 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg';
          heading = 'Mastering Masterclass';
          description =
            'Discover loudness standards and polishing techniques used by professional mastering engineers.';
        }

        return (
          <div className="booking-column content" key={`${row}-${col}`}>
            <img src={imageUrl} alt="preview" className="booking-image" />
            <div className="text-block">
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>
            <div className="text-box">
              <button onClick={handleRegisterClick}>Register your slot</button>
            </div>
          </div>
        );
      })}
    </div>
  ))}

  {[3, 4].map((row) => (
    <div className="booking-row" key={row}>
      <div className="booking-column dark" />
      <div className="booking-image-wide-container">
        <img
          src={
            row === 3
              ? 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/23f4e11a55b906a4310e045982373adcbcdbef9a.jpg'
              : 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg'
          }
          alt="shared"
          className="booking-image-wide"
        />
      </div>
    </div>
  ))}
</div>

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
          height: 700px;
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
          height: 516px;
          object-fit: cover;
          border-radius: 12px;
        }

        @media (max-width: 1024px) {
          .booking-heading {
            font-size: 2rem;
          }
          .booking-image {
            height: 600px;
            object-fit: cover;
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
          .booking-column.dark{
            padding:0px;
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
