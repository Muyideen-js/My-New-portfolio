import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutContent = styled(motion.div)`
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.glassBg};
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  font-weight: 500;
`;

const About = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <AboutSection id="about">
      <Container ref={ref}>
        <AboutContent
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <AboutText>
            I'm a passionate Full Stack Developer with experience in building responsive 
            and user-friendly web applications. With a strong foundation in both frontend 
            and backend technologies, I strive to create efficient and scalable solutions 
            that solve real-world problems.
          </AboutText>
          <SkillsList>
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((skill, index) => (
              <SkillTag
                key={skill}
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