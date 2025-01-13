import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem 0;
  margin-top: auto;
  width: 100%;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Muyideen.Jsx. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 