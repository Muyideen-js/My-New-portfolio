import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { useTheme } from '../../context/ThemeContext';
import profile from "../../assets/my_img.jpg"

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
`;

const HeroCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 3rem;
  padding: 3rem;
  border-radius: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: visible;
  max-height: 400px;
  
  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const Greeting = styled.span`
  display: block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.glassBg};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradient};
    color: white;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Hero = () => {
  const { theme } = useTheme();

  return (
    <HeroSection>
      <div className="container">
        <HeroCard
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <ImageWrapper variants={fadeInUp}>
            <img src={profile} alt="Muyideen" />
          </ImageWrapper>
          <HeroContent variants={staggerContainer}>
            <motion.div variants={staggerContainer}>
              <Greeting variants={fadeInUp}>Hey there! 👋</Greeting>
              <MainTitle variants={fadeInUp}>
                I'm Muyideen.Jsx
              </MainTitle>
              <Role variants={fadeInUp}>Full Stack Developer</Role>
              <SubTitle variants={fadeInUp}>Building amazing web experiences</SubTitle>
            </motion.div>
            <SocialLinks variants={fadeInUp}>
              <SocialIcon 
                href="https://github.com" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <FiGithub />
              </SocialIcon>
              <SocialIcon 
                href="https://linkedin.com" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com" 
                target="_blank"
                whileHover={{ y: -3 }}
              >
                <RiTwitterXLine />
              </SocialIcon>
            </SocialLinks>
          </HeroContent>
        </HeroCard>
      </div>
    </HeroSection>
  );
};

export default Hero; 