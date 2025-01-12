import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.05;
    z-index: -1;
  }

  .glass {
    background: ${({ theme }) => theme.glassBg};
    backdrop-filter: blur(8px);
    border: 1px solid ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.glassShadow};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 4rem 0;
  }
`; 