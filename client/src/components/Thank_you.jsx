import React from "react";

const Thank_you = () => {
    return (
        <>
            <style>
                {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #fceb1f;
          }

          .thank-you-box {
                background: white;
    max-width: 600px;
    margin: 134px auto;
    padding: 78px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    position: relative;
    height: 288px;
          }

          .thank-you-box::before {
            content: "";
          
            background-image: url('guiter.png'); 
            opacity: 0.1;
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            height: 100%;
            z-index: 0;
          }

          .checkmark {
            font-size: 80px;
            color: green;
            z-index: 1;
          }

          h2 {
               margin: 18px 0 29px;

               font-size:24px;
    z-index: 1;
          }

          p {
            z-index: 1;
          }

          .thank-you-box > * {
            position: relative;
            z-index: 1;
          }
        `}
            </style>
            <div className="thank-you-box">
                <div className="checkmark">✔</div>
                <h2>Thank You For Registering!</h2>
                <p>
                    You’re one step closer to the stage. Our team will <br/>review your
                    submission and reach out with further details.
                </p>
                <p>
                    Follow us on Instagram @chordlifers.studio for <br/>event
                    updates, line-ups, and behind-the-scenes drops!
                </p>
            </div>
        </>
    );
};

export default Thank_you;