import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" paddingBottom={3} paddingTop={6}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={4}
        >
          {/* logo and social media */}
          <Box flexBasis={{ xs: "100%", md: "40%" }} display="flex" flexDirection="column">
            <Box
              component="img"
              src={logo}
              height={36}
              alt="Medify"
              marginBottom={2}
              sx={{
                width: 'auto', 
              }}
            />
            <Box display="flex" gap={1.5}>
              <Box component="img" src={fb} height={36} />
              <Box component="img" src={twitter} height={36} />
              <Box component="img" src={yt} height={36} />
              <Box component="img" src={pinterest} height={36} />
            </Box>
          </Box>
              {/* footerlinks section */}
          <Box flexBasis={{ xs: "100%", md: "20%" }}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Box>

          <Box flexBasis={{ xs: "100%", md: "20%" }}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Ophthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Box>
        </Box>

        {/* copyright text */}
        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          paddingTop={3}
          marginTop={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          ©2023 Rishab Bhattacharya. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}