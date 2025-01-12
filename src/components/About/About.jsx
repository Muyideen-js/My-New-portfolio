import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: ${props => props.isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'};
  color: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  border-radius: 20px;
  font-size: 0.9rem;
`;

const About = () => {
  const isDarkMode = false; // Replace with useTheme() hook
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <AboutSection id="about" isDarkMode={isDarkMode}>
      <Container ref={ref}>
        <AboutImage
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80" 
            alt="About me"
          />
        </AboutImage>
        <AboutContent
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle isDarkMode={isDarkMode}>About Me</SectionTitle>
          <AboutText isDarkMode={isDarkMode}>
            I'm a passionate Full Stack Developer with experience in building responsive 
            and user-friendly web applications. With a strong foundation in both frontend 
            and backend technologies, I strive to create efficient and scalable solutions 
            that solve real-world problems.
          </AboutText>
          <SkillsList>
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((skill, index) => (
              <SkillTag
                key={skill}
                isDarkMode={isDarkMode}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsList>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 