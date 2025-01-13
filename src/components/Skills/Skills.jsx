import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, 
  FaAws, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiMongodb, 
  SiPostgresql, SiRedux, SiTailwindcss 
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #4F46E5;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const SkillCategory = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, level: "95%" },
        { name: "TypeScript", icon: <SiTypescript />, level: "90%" },
        { name: "JavaScript", icon: <SiJavascript />, level: "95%" },
        { name: "Redux", icon: <SiRedux />, level: "85%" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "90%" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: "90%" },
        { name: "Python", icon: <FaPython />, level: "85%" },
        { name: "MongoDB", icon: <SiMongodb />, level: "90%" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "85%" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <FaDocker />, level: "80%" },
        { name: "AWS", icon: <FaAws />, level: "75%" },
        { name: "Git", icon: <FaGitAlt />, level: "90%" },
        { name: "Database Design", icon: <FaDatabase />, level: "85%" },
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <SkillCategory>{category.title}</SkillCategory>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillInfo>
                    <SkillName>{skill.icon} {skill.name}</SkillName>
                    <SkillLevel>{skill.level}</SkillLevel>
                  </SkillInfo>
                  <ProgressBar>
                    <Progress
                      initial={{ width: 0 }}
                      animate={inView ? { width: skill.level } : {}}
                      transition={{ duration: 1, delay: (index * 0.2) + (skillIndex * 0.1) }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 