import React, {useEffect, useRef, useState} from "react";
import styled, {css} from "styled-components";
import theme from "../theme";
import Navigation from "./Navigation";

interface PageTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const Banner = styled.div`
  display: flex;
  height: 171px;
`;

const BannerLeft = styled.img``;

const BannerCenter = styled.img`
  display: flex;
  flex: 1;
`;

const BannerRight = styled.img``;

interface StickyProps {
  "data-isSticky": boolean;
}

const Sticky = styled.div<StickyProps>`
  display: flex;
  ${props => props["data-isSticky"] &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    `
  }
`;

const StickyLeft = styled.div`
  background-image: url("src/assets/banner/sticky_left.png");
  min-width: 340px;
  padding: 6px 0px 6px 160px;
  width: 340px;
`;

const StickyCenter = styled.img`
  display: flex;
  flex: 1;
`;

const StickyRight = styled.img`
  display: flex;
  flex: 1;
`;

const Logo = styled.img`
  height: 30px;
`;

const Body = styled.div<StickyProps>`
  background-color: ${theme.primary};
  height: 100%;
  overflow: auto;
  padding: ${props => props["data-isSticky"] ? 147 : 60}px 160px 0px 160px;
`;

const Footer = styled.div`
  align-items: center;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const FooterImage = styled.img`
  height: 45px;
`;

const FooterText = styled.div`
  color: white;
  font-size: 14px;
  margin-top: 10px;
`;

const PageTemplate: React.FC<PageTemplateProps> = ({children}) => {
  const [isSticky, setSticky] = useState(false);
  const bannerRef = useRef(null);
  const stickyRef = useRef(null);
  const handleScroll = () => {
    setSticky(
      stickyRef.current.getBoundingClientRect().top <= 0 &&
      stickyRef.current.getBoundingClientRect().top >= bannerRef.current.getBoundingClientRect().bottom
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <>
      <Banner ref={bannerRef}>
        <BannerLeft src="src/assets/banner/banner_left.png" />
        <BannerCenter src="src/assets/banner/banner_center.png" />
        <BannerRight src="src/assets/banner/banner_right.png" />
      </Banner>
      <Sticky data-isSticky={isSticky} ref={stickyRef}>
        <StickyLeft>
          <Logo src="src/assets/logo/logo_primary.png" />
          <Navigation />
        </StickyLeft>
        <StickyCenter src="src/assets/banner/sticky_center.png" />
        <StickyRight src="src/assets/banner/sticky_right.png" />
      </Sticky>
      <Body data-isSticky={isSticky}>
        {children}
        <Footer>
          <FooterImage src={"src/assets/logo/logo_white.png"} />
          <FooterText>© 2020 Chad Vincente</FooterText>
        </Footer>
      </Body>
    </>
  );
}

export default PageTemplate;
