import React from 'react';

const AccountSuspensionNotice: React.FC = () => {
  const handleAppealClick = () => {
    // Add your appeal logic here (e.g., navigation or modal trigger)
    console.log('User clicked on Appeal');
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay} className='px-4'>
        <div style={styles.card} className="fade-in">
          <h1 style={styles.title}>Vaše konto je určeno k pozastavení</h1>
          <p style={styles.message}>
            Zaznamenali jsme aktivitu, která porušuje naše podmínky používání.
            Pokud si myslíte, že došlo k chybě, můžete se proti rozhodnutí odvolat.
          </p>
          <a href='/instagram' style={styles.button} onClick={handleAppealClick}>
            Odvolat se proti rozhodnutí
          </a>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
    animation: 'fadeIn 1s ease-out',
  },
  title: {
    fontSize: '28px',
    color: '#b00020',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#b00020',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default AccountSuspensionNotice;
