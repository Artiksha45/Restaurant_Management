import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #222;
  color: white;
  font-size: 1rem;
`;

const Highlight = styled.span`
  color: #ff6f61;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 <Highlight>Restaurant Hub</Highlight>.Address :Shop No 1, Near, Indapur Rd, Baramati, Maharashtra, India </p>
    </FooterContainer>
  );
}

export default Footer;
