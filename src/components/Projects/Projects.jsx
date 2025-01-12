import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

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
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
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