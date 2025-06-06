import React, { useEffect, useState } from 'react';

const AudioRequestTable = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/pro-audio-form/save-form.php")
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#333',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    th: {
      backgroundColor: '#4a90e2',
      color: 'white',
      padding: '12px 16px',
      textAlign: 'left',
    },
    td: {
      padding: '12px 16px',
      border: '1px solid #ddd',
      textAlign: 'left',
    },
    trHover: {
      backgroundColor: '#f1f1f1',
    },
    evenRow: {
      backgroundColor: '#fafafa',
    },
    noData: {
      textAlign: 'center',
      padding: '1rem',
      color: '#666',
    }
  };

  if (loading) return <p style={styles.noData}>Loading data...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Audio Form Submissions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Full Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Availability</th>
            <th style={styles.th}>Additional Services</th>
            <th style={styles.th}>Budget</th>
            <th style={styles.th}>Message</th>
          </tr>
        </thead>
        <tbody>
          {formData.length > 0 ? formData.map((item, index) => (
            <tr
              key={item.id}
              style={index % 2 === 0 ? styles.evenRow : {}}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? styles.evenRow.backgroundColor : 'white')}
            >
              <td style={styles.td}>{item.id}</td>
              <td style={styles.td}>{item.full_name}</td>
              <td style={styles.td}>{item.email}</td>
              <td style={styles.td}>{item.phone}</td>
              <td style={styles.td}>{item.availability}</td>
              <td style={styles.td}>{item.additional_services}</td>
              <td style={styles.td}>{item.budget}</td>
              <td style={styles.td}>{item.message}</td>
            </tr>
          )) : (
            <tr>
              <td style={styles.td} colSpan="8">No data found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AudioRequestTable;
