import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="copywriteFooter">© 2022 Copyright: KookBoards.com</Box>
      <Box className="socialFooter">
        <Box className="socialIcon">
          <a href="https://github.com/kpnguyen9/Kook-Shop" target="_blank">
            <img
              src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653871933/logos/github_lp5vfl.png"
              alt="giticon"
            ></img>
          </a>
        </Box>
        <Box className="socialIcon">
          <a href="https://www.facebook.com/">
            <img
              src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653872022/logos/facebook-logo-2019_o8lwfr.png"
              alt="fbicon"
            ></img>
          </a>
        </Box>
        <Box className="socialIcon">
          <a href="https://twitter.com/?lang=en">
            <img
              src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653872021/logos/twitter_whggqt.png"
              alt="twittericon"
            ></img>
          </a>
        </Box>
        <Box className="socialIcon">
          <a href="https://www.instagram.com/?hl=en">
            <img
              src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653872022/logos/instagram_q4ineb.png"
              alt="igicon"
            ></img>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
