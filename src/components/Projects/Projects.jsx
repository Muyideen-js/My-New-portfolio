import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import audiowayImg from '../../assets/audioway.png';
import project2Img from '../../assets/Sc.png';
import project3Img from '../../assets/TWW.png';

const ProjectsSection = styled.section`
  position: relative;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.shadow};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: ${({ theme }) => theme.gradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-weight: 600;
  z-index: 1;
  position: relative;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-style: italic;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.glassBg};
  color: ${({ theme }) => theme.text};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const projectsData = [
  {
    title: "Audioway - Music Streaming",
    description: "A modern music streaming app with playlist creation, real-time playback, and user authentication. Built for optimal user experience.",
    image: audiowayImg,
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/audioway",
    live: "https://audioway.demo.com"
  },
  {
    title: "Social Connect",
    description: "A social media platform with real-time messaging, post sharing, and multimedia content support. Built with modern web technologies.",
    image: project2Img,
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot platform with multiple AI models, real-time conversation, and multi-language support.",
    image: project3Img,
    tech: ["React", "Node.js", "OpenAI API", "Socket.io"],
    github: "https://github.com",
    live: "https://demo.com"
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid ref={ref}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank">
                    <FiGithub />
                  </ProjectLink>
                  <ProjectLink href={project.live} target="_blank">
                    <FiExternalLink />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 