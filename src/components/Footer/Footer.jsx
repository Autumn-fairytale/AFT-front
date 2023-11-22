export const Footer = () => {
  return (
    <footer
      style={{
        background: '#1E1E1E',
        padding: '20px',
        textAlign: 'center',
        color: '#FF9100',
      }}
    >
      <p>&#169; 2023 IDLO</p>

      <div style={{ marginTop: '10px' }}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};
