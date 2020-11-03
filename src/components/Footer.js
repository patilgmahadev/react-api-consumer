import React, { memo } from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>This book is available to read in full on <a href="https://www.gutenberg.org/files/861/861-h/861-h.htm">the Project Gutenburg website</a>.</p>
    </footer>
  );
}

export default memo(Footer);