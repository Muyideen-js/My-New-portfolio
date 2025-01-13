import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #4F46E5;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
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
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #4F46E5;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: #4F46E5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #4F46E5;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: #4F46E5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: #4F46E5;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text};

  svg {
    font-size: 1.5rem;
    color: #4F46E5;
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <Subtitle>Feel free to reach out to me for any questions or opportunities!</Subtitle>
        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="Your name" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Your email" />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea placeholder="Your message" />
            </FormGroup>
            <SubmitButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
          <ContactInfo>
            <ContactItem>
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>yusufabolaji2007@gmail.com</p>
              </div>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+2348156564849</p>
              </div>
            </ContactItem>
            <ContactItem>
              <FiMapPin />
              <div>
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </ContactItem>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 