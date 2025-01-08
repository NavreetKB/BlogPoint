import React from "react";
import logo from '../images/logobg.png'; // Adjust path as necessary


const Footer=()=>{
    return(
        <footer style={styles.footer}>
        <div style={{marginRight:'auto',marginLeft:'auto',display:'flex'}}>
        <div style={styles.logoContainer}>
          <img 
            src={logo} 
            alt="Blog Logo" 
            style={styles.logo} 
          />
        </div>
        <div style={styles.infoContainer}>
          <p style={styles.infoText}>© 2023 Blog Point. All rights reserved.</p>
          <p style={styles.infoText}>Contact: info@BlogPoint.com</p>
          <p style={styles.infoText}>Follow us on social media:</p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.link}><img height={40} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-256.png"></img></a>
            <a href="#" style={styles.link}><img height={40} src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-256.png"></img></a>
            <a href="#" style={styles.link}><img height={40} src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_instagram-512.png"></img></a>
          </div>
        </div>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderTop: "1px solid #e9ecef",
    },
    logoContainer: {
      flex: "0 0 150px", // Space for the logo
      marginRight: "20px",
    },
    logo: {
      width: "100%",
      height: "auto",
    },
    infoContainer: {
      flex: "1",
    },
    infoText: {
      alignItems:"right",
      margin: "5px 0",
      fontSize: "25px",
      color: "#6c757d",
    },
    socialLinks: {
      marginTop: "10px",
    },
    link: {
       margin: "25px",
    }
  }
    

export default Footer