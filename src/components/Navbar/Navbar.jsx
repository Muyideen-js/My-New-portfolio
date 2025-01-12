import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
`;

const NavContent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo>M.JSX</Logo>
        <NavLinks>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
        <MenuButton
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
      </NavContent>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLink href="#home" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;