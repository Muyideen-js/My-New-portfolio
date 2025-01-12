import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: ${props => props.isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${props => props.isDarkMode ? '#2d3748' : '#e2e8f0'};
  background: ${props => props.isDarkMode ? '#1e293b' : 'white'};
  color: ${props => props.isDarkMode ? 'white' : 'black'};

  &:focus {
    outline: 2px solid ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${props => props.isDarkMode ? '#2d3748' : '#e2e8f0'};
  background: ${props => props.isDarkMode ? '#1e293b' : 'white'};
  color: ${props => props.isDarkMode ? 'white' : 'black'};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: 2px solid ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: ${props => props.isDarkMode ? '#1e293b' : 'white'};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${props => props.isDarkMode ? 'var(--primary-dark)' : 'var(--primary-light)'};
`;

const ContactDetails = styled.div`
  h3 {
    color: ${props => props.isDarkMode ? 'white' : 'black'};
    margin-bottom: 0.25rem;
  }

  p {
    color: ${props => props.isDarkMode ? '#94a3b8' : '#64748b'};
    font-size: 0.9rem;
  }
`;

const Contact = () => {
  const isDarkMode = false; // Replace with useTheme() hook
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact" isDarkMode={isDarkMode}>
      <Container>
        <SectionTitle isDarkMode={isDarkMode}>Get In Touch</SectionTitle>
        <Subtitle isDarkMode={isDarkMode}>
          Feel free to reach out for collaborations or just a friendly hello
        </Subtitle>
        <ContactGrid ref={ref}>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label isDarkMode={isDarkMode}>Name</Label>
              <Input type="text" required isDarkMode={isDarkMode} />
            </FormGroup>
            <FormGroup>
              <Label isDarkMode={isDarkMode}>Email</Label>
              <Input type="email" required isDarkMode={isDarkMode} />
            </FormGroup>
            <FormGroup>
              <Label isDarkMode={isDarkMode}>Message</Label>
              <TextArea required isDarkMode={isDarkMode} />
            </FormGroup>
            <SubmitButton
              type="submit"
              isDarkMode={isDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo>
            {[
              {
                icon: FiMail,
                title: 'Email',
                details: 'hello@example.com'
              },
              {
                icon: FiPhone,
                title: 'Phone',
                details: '+1 (234) 567-8900'
              },
              {
                icon: FiMapPin,
                title: 'Location',
                details: 'San Francisco, CA'
              }
            ].map((item, index) => (
              <ContactCard
                key={index}
                isDarkMode={isDarkMode}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <IconWrapper isDarkMode={isDarkMode}>
                  <item.icon />
                </IconWrapper>
                <ContactDetails isDarkMode={isDarkMode}>
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </ContactDetails>
              </ContactCard>
            ))}
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 