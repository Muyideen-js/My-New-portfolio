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
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.gradient};
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.glassBg};
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.gradient};
  border-radius: 3px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const skillsData = {
  frontend: [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'JavaScript', icon: SiJavascript, level: 95 },
    { name: 'Redux', icon: SiRedux, level: 80 },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, level: 85 },
    { name: 'Python', icon: FaPython, level: 80 },
    { name: 'MongoDB', icon: SiMongodb, level: 75 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
  ],
  tools: [
    { name: 'Docker', icon: FaDocker, level: 75 },
    { name: 'AWS', icon: FaAws, level: 70 },
    { name: 'Git', icon: FaGitAlt, level: 90 },
    { name: 'Database Design', icon: FaDatabase, level: 85 },
  ]
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <SkillsGrid>
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <SkillCard
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <SkillCategory>{category.charAt(0).toUpperCase() + category.slice(1)}</SkillCategory>
              {skills.map((skill, index) => (
                <SkillItem key={skill.name}>
                  <SkillHeader>
                    <SkillName>
                      <skill.icon /> {skill.name}
                    </SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <ProgressBar>
                    <Progress
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 1 }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </section>
  );
};

export default Skills; 