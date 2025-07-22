import React from "react";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* Banner Image */}
      <img 
        src="/bann.jpg" 
        alt="Restaurant Banner" 
        style={styles.bannerImage} 
      />

      <h1 style={styles.heading}>About Our Restaurant</h1>
      <p style={styles.paragraph}>
        Welcome to <strong>Restaurant Hub</strong>, your go-to destination for a delightful dining experience.
        We pride ourselves on serving delicious, high-quality meals made from the freshest ingredients.
      </p>

      {/* Restaurant Interior Image */}
      <img 
        src="/restaurant-interior.jpg" 
        alt="Restaurant Interior" 
        style={styles.image} 
      />

      <h2 style={styles.subHeading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li>🍽️ Wide range of cuisines, including Italian, Indian, and Continental.</li>
        <li>🌿 Fresh, locally sourced ingredients for every meal.</li>
        <li>👨‍🍳 Experienced chefs dedicated to culinary excellence.</li>
        <li>🏡 Cozy ambiance perfect for family dinners and special occasions.</li>
      </ul>

      
      <p style={styles.note}>
        Come and experience the taste of perfection. We look forward to serving you!
      </p>
    </div>
  );
};

// Styles for About Us Page
const styles = {
  container: {
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  bannerImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#ff6347",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "1.8rem",
    color: "#d2691e",
    marginTop: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#333",
    lineHeight: "1.6",
  },
  list: {
    textAlign: "left",
    fontSize: "1.2rem",
    color: "#444",
    listStyleType: "none",
    paddingLeft: "0",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    margin: "20px 0",
  },
  note: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#ff4500",
    marginTop: "30px",
  },
};

export default AboutUs;
