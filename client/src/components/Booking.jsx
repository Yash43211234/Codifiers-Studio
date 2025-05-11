import React from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register'); // replace with your actual route
    };
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap', // Optional for responsiveness
    };

    const columnStyle = {
        flex: 1,
        backgroundColor: 'black',
        height: '600px',
        color: 'white',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
    };
    const imageContainerStyle = {
        display: 'flex',
        flex: 2,
    };

    const imageStyle = {
        maxWidth: '100%',
        height: '500px',
        objectFit: 'cover',
    };

    const imageStyleone = {
        maxWidth: '100%',
        height: '600px',
        objectFit: 'cover',

    };

    const textBlockStyle = {
        width: '100%',
        textAlign: 'left',
        marginTop: '15px',

    };

    const borderedBoxStyle = {
        ...textBlockStyle,
        border: '1px solid white',
        padding: '10px 0px 10px 8px',

    };

    return (
        <>
            {/* --------------------------first row----------------------- */}
            {/* first row */}
            <div style={containerStyle}>
                {/* First Column */}
                <div style={columnStyle}>
                    <p style={{ fontSize: '40px', textAlign: 'center' }}>Booking Experience for Slot</p>
                </div>

                {/* Second Column */}
                <div style={columnStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="preview"
                        style={imageStyle}
                    />

                    <div style={textBlockStyle}>
                        <h2 style={{ margin: '0 0 5px', fontSize: '18px' }}>Hip Hop Foundations</h2>
                        <p style={{ fontSize: '13px', margin: 0 }}>
                            This class helps you develop your own unique movement vocabulary and respond to music in the moment.
                        </p>
                    </div>

                    <div style={borderedBoxStyle}>
                        <button style={{ marginTop: '5px', padding: '5px 10px' }}>Register your slot</button>
                    </div>
                </div>

                {/* Second Column */}
                <div style={columnStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="preview"
                        style={imageStyle}
                    />

                    <div style={textBlockStyle}>
                        <h2 style={{ margin: '0 0 5px', fontSize: '18px' }}>Hip Hop Foundations</h2>
                        <p style={{ fontSize: '13px', margin: 0 }}>
                            This class helps you develop your own unique movement vocabulary and respond to music in the moment.
                        </p>
                    </div>

                    <div style={borderedBoxStyle}>


                        <button
                            style={{ marginTop: '5px', padding: '5px 10px' }}
                            onClick={handleRegisterClick}
                        >
                            Register your slot
                        </button>

                    </div>
                </div>
            </div>

            {/* ----------------------------second row ------------------- */}
            {/* first row */}
            <div style={containerStyle}>
                {/* First Column */}
                <div style={columnStyle}>
                    <p style={{ fontSize: '40px', textAlign: 'center' }}>Booking Experience for Slot</p>
                </div>

                {/* Second Column */}
                <div style={columnStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="preview"
                        style={imageStyle}
                    />

                    <div style={textBlockStyle}>
                        <h2 style={{ margin: '0 0 5px', fontSize: '18px' }}>Hip Hop Foundations</h2>
                        <p style={{ fontSize: '13px', margin: 0 }}>
                            This class helps you develop your own unique movement vocabulary and respond to music in the moment.
                        </p>
                    </div>

                    <div style={borderedBoxStyle}>
                        <button style={{ marginTop: '5px', padding: '5px 10px' }}>Register your slot</button>
                    </div>
                </div>

                {/* Second Column */}
                <div style={columnStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="preview"
                        style={imageStyle}
                    />

                    <div style={textBlockStyle}>
                        <h2 style={{ margin: '0 0 5px', fontSize: '18px' }}>Hip Hop Foundations</h2>
                        <p style={{ fontSize: '13px', margin: 0 }}>
                            This class helps you develop your own unique movement vocabulary and respond to music in the moment.
                        </p>
                    </div>

                    <div style={borderedBoxStyle}>
                        <button
                            style={{ marginTop: '5px', padding: '5px 10px' }}
                            onClick={handleRegisterClick}
                        >
                            Register your slot
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------------------------third row---------------------------             */}


            <div style={containerStyle}>
                {/* Column 1 */}
                <div style={columnStyle}>
                    {/* Optional content here */}
                </div>

                {/* Columns 2 & 3 combined */}
                <div style={imageContainerStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="shared"
                        style={imageStyleone}
                    />
                </div>
            </div>

            {/* --------------------------forth row----------------------- */}
            <div style={containerStyle}>
                {/* Column 1 */}
                <div style={columnStyle}>
                    {/* Optional content here */}
                </div>

                {/* Columns 2 & 3 combined */}
                <div style={imageContainerStyle}>
                    <img
                        src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
                        alt="shared"
                        style={imageStyleone}
                    />
                </div>
            </div>

        </>
    );
}

export default Booking;
