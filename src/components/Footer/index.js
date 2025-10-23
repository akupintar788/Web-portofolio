import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Bio } from '../../data/constants';

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.95rem;

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 1.7rem;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.text_primary};
  }

  a:hover svg {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.15);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  margin-top: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Muhammad Abidin</Logo>

        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>

        {/* Contact row tampil horizontal */}
        <ContactRow>
          <ContactItem><LocationOnIcon /> Madiun, jawa timur,Indonesia</ContactItem>
          <ContactItem><EmailIcon /> muhammadabidin1223@gmail.com</ContactItem>
          <ContactItem><PhoneIcon /> +6285859805284</ContactItem>
        </ContactRow>

        <SocialMediaIcons>
          <a href={Bio.facebook} target="_blank" rel="noreferrer"><FacebookIcon /></a>
          <a href={Bio.twitter} target="_blank" rel="noreferrer"><TwitterIcon /></a>
          <a href={Bio.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href={Bio.insta} target="_blank" rel="noreferrer"><InstagramIcon /></a>
        </SocialMediaIcons>

        <Copyright>
          &copy; {new Date().getFullYear()} Muhammad Abidin. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
