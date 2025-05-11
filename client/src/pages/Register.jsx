import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    slot: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:4000/api/formdata',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert(`Slot Registered for ${formData.name}`);
      setFormData({ name: '', email: '', slot: '' }); // Clear form
    } else {
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Submission failed:', error);
    alert('Something went wrong!');
  }
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


  return (
    <>
    <div style={{ margin: '100px', color: '#333', fontFamily: 'sans-serif', fontSize: '16px' }}>
  <h1 style={{ marginBottom: '25px', fontSize: '32px' }}>Register Your Slot</h1>

  <p style={{ marginBottom: '35px', maxWidth: '650px', fontSize: '17px', lineHeight: '1.6' }}>
    At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels.
    Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique,
    or simply someone who finds joy in moving, you’ll find a home here.
  </p>

  <form onSubmit={handleSubmit} style={{ maxWidth: '450px' }}>
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', fontSize: '15px' }}
      />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', fontSize: '15px' }}
      />
    </div>

    <div style={{ marginBottom: '25px' }}>
      <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Preferred Slot:</label>
      <input
        type="text"
        name="slot"
        value={formData.slot}
        onChange={handleChange}
        placeholder="e.g. Monday 5PM"
        required
        style={{ width: '100%', padding: '10px', fontSize: '15px' }}
      />
    </div>

    <button
      type="submit"
      style={{
        padding: '12px 24px',
        background: '#000',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        borderRadius: '4px'
      }}
    >
      Register Now
    </button>
  </form>
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

export default Register;
