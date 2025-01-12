import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: ${props => props.isDarkMode ? '#0f172a' : '#f1f5f9'};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  }
`;

const Footer = () => {
  const isDarkMode = false; // Replace with useTheme() hook
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <FooterContent>
        <Copyright isDarkMode={isDarkMode}>
          © {currentYear} Your Name. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialLink href="https://github.com" target="_blank" isDarkMode={isDarkMode}>
            <FiGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" isDarkMode={isDarkMode}>
            <FiLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank" isDarkMode={isDarkMode}>
            <FiTwitter />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 