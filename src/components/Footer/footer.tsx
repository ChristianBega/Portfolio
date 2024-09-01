import { Link } from "react-router-dom";
import Icon from "../../components/Icon/icon";
import Typography from "../../components/Typography/typography";
import { StyledEclipseBg, StyledEclipseBgOrb, StyledFooter, StyledFooterWrapper } from "./footer.styles";
import useMediaQueries from "../../utils/useMediaQueries/useMediaQueries";
import { MediaQueries } from "../../utils/useMediaQueries/types";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
};

const Footer: React.FC<MediaQueries> = () => {
  const { isSm, isMd } = useMediaQueries();
  return (
    <StyledFooterWrapper>
      <StyledEclipseBgOrb isSm={isSm} isMd={isMd} />
      <StyledFooter isSm={isSm} isMd={isMd}>
        <StyledEclipseBg />
        <div className="footer-content-container">
          <Typography className="footer-content-children" route={"/"} component={Link} variant="logo_text">
            Christian Bega
          </Typography>
          <ul className="footer-content-children" role="list" style={{ display: "flex", gap: "2rem" }}>
            <li style={{ ...listItemStyle }}>
              <Icon src="/icons/Mail-Icon.svg" size="32px" alt="Github Icon"></Icon>
            </li>
            <li style={{ ...listItemStyle }}>
              <Icon src="/icons/LinkedIn-Icon.svg" size="32px" alt="Github Icon"></Icon>
            </li>
            <li style={{ ...listItemStyle }}>
              <Icon src="/icons/github-icon.svg" size="28px" alt="Github Icon"></Icon>
            </li>
          </ul>
        </div>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
