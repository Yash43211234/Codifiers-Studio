import React from 'react'

function Footer() {
  return (
    <div>

        <div style={{ background: '#d0fbf9', color: 'black', padding: '2rem 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Column 1 */}
            <div style={{ flex: 1, padding: '0 1rem', fontSize: '40px' }}>
              <h2>Codifiers Studio</h2>

            </div>

            {/* Column 2 */}
            <div style={{ flex: 1, padding: '0 1rem' }}>
              <p>Email:</p>
              <p>hello@figma</p>
              <p>Instagram:</p>
              <p>@figma</p>
              <p>Facebook:</p>
              <p>figma</p>
            </div>

            {/* Column 3 */}
            <div style={{ flex: 1, padding: '0 1rem' }}>
              <h3>Address</h3>
              <p>243 Darjeeling</p>
              <p>West Bengal</p>
              <p>(+91) 5689-564-563</p>
              <h3>© Codifiers Studio</h3>
              <p>2025 All Rights Reserved</p>
            </div>

          </div>
        </div>



       <div>
          <div style={{height:'300px', display: 'flex', justifyContent: 'space-between' }}>

            {/* Column 1 */}
            <div style={{background:'#1f41ff' ,flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Our Socials</h2>
            </div>

            {/* Column 2 */}
            <div style={{background:'#000000' , flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Email us</h2>
            </div>

            {/* Column 3 */}
            <div style={{background:'#d900ff' , flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Book us</h2>
            </div>

          </div>
        </div>
        
    </div>
  )
}

export default Footer