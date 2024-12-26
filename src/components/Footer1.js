import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import f2 from "../assets/f2.png";

const Footer1 = () => {
  const styles = {
    container: {
      backgroundImage: `url(${f2})`,
      backgroundPosition: "bottom",
      padding: "20px",
      marginTop: "70px",
      backgroundColor: "#FDF4E9",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    section: {
      marginBottom: "20px",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "10px",
    },
    paragraph: {
      textAlign: "justify",
      lineHeight: "1.6",
      marginLeft: "10px",
    },
    title2: {
      fontWeight: "bold",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "80px",
      '@media (max-width: 1024px)': { // Tablet view
        display: "none", // Hide title2 in tablet view
      },
    },
    paragraph2: {
      textAlign: "justify",
      lineHeight: "1.6",
      marginLeft: "80px",
      '@media (max-width: 1024px)': { // Tablet view
        display: "none", // Hide paragraph2 in tablet view
      },
    },
    title3: {
      fontWeight: "bold",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "10px",
      '@media (max-width: 1024px)': { // Tablet view
        display: "none", // Hide title3 in tablet view
      },
    },
    paragraph3: {
      textAlign: "justify",
      lineHeight: "1.6",
      marginLeft: "10px",
      '@media (max-width: 1024px)': { // Tablet view
        display: "none", // Hide paragraph3 in tablet view
      },
    },
    menuItem: {
      display: "flex",
      justifyContent: "space-between", // Ensures equal spacing
      alignItems: "center",
    },
    footerBottom: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "10px",
    },
    socialIcon: {
      color: "black",
      marginLeft: "5px",
    },
  };

  return (
    <Box sx={styles.container}>
      <Grid container spacing={4}>
        {/* About Us Section */}
        <Grid item xs={12} md={4} sx={styles.section}>
          <Typography variant="h6" sx={styles.title}>
            About Us
          </Typography>
          <Typography variant="body2" sx={styles.paragraph}>
            <strong>SWAGRUHA FOODS</strong> – pioneers of Home Foods. Indulge in
            our sweets for an unforgettable experience. Crafted with 100%
            homemade goodness, using only the freshest, finest natural
            ingredients. Each treat is made as if for our own family, ensuring
            unparalleled quality. Our secret? The finest ghee, delivering
            unparalleled taste. Trusted by our loyal customers, our success is
            fueled by our commitment to taste, hygiene, and customer happiness.
          </Typography>
        </Grid>

        {/* Menu Section */}
        <Grid item xs={12} md={4} sx={styles.section}>
          <Typography variant="h6" sx={styles.title2}>
            Menu
          </Typography>

          <Typography variant="body2" sx={styles.paragraph2}>
            Privacy Policy<br />
            Terms & Conditions<br />
            Cancellations & Refund Policy<br />
            Shipping & Delivery Policy<br />
            Disclaimer Policy<br />
            Site Map<br />
          </Typography>
        </Grid>

        {/* Store Information Section */}
        <Grid item xs={12} md={4} sx={styles.section}>
          <Typography variant="h6" sx={styles.title3}>
            Store Information
          </Typography>
          <Typography variant="body2" sx={styles.paragraph3}>
            D.No: 38-8-58, Opposite PWD grounds, M.G. Road,<br /> Vijayawada-520010
            <br />
            <Link href="mailto:swagruhafoods@yahoo.com" sx={styles.link}>
              swagruhafoods@yahoo.com
            </Link>
            <br />
            9949845000
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={styles.footerBottom}>
        <Typography variant="body2">
          © 2024 swagruhafoods. All Rights Reserved
        </Typography>
        <Box>
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.socialIcon}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.socialIcon}
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.socialIcon}
          >
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer1;
