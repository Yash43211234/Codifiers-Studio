import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  // Countdown timer example (optional)
  // Set target launch date here (yyyy-mm-dd hh:mm:ss)
  const launchDate = new Date('2025-06-30T00:00:00');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = launchDate - now;
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="coming-soon-container">
        <div className="content">
          <h1>🚧 Coming Soon 🚧</h1>
          <p>Our awesome page is under construction. Stay tuned!</p>

          {timeLeft ? (
            <div className="countdown">
              <div>
                <span>{timeLeft.days}</span>
                <small>Days</small>
              </div>
              <div>
                <span>{timeLeft.hours}</span>
                <small>Hours</small>
              </div>
              <div>
                <span>{timeLeft.minutes}</span>
                <small>Minutes</small>
              </div>
              <div>
                <span>{timeLeft.seconds}</span>
                <small>Seconds</small>
              </div>
            </div>
          ) : (
            <p>We're launching soon!</p>
          )}
        </div>
      </div>

      <style>{`
       .coming-soon-container {
       
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  flex-direction: column;
}

.content {
  max-width: 600px;
  background: rgba(0, 0, 0, 0.25);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 500;
}

.countdown {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

.countdown > div {
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 20px;
  border-radius: 8px;
  min-width: 70px;
}

.countdown span {
  font-size: 2rem;
  font-weight: 700;
  display: block;
  line-height: 1;
}

.countdown small {
  font-size: 0.8rem;
  text-transform: uppercase;
  opacity: 0.8;
}

@media (max-width: 480px) {

  .content {
    margin-top: auto;
    margin-bottom: 20px;
    

    padding: 30px 20px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .countdown {
    flex-direction: column;
    gap: 12px;
  }

  .countdown > div {
    min-width: auto;
    padding: 12px 0;
  }
}

      `}</style>
    </>
  );
}
