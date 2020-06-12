import React, { useState, useEffect } from "react";
import { useAuth0 } from "./Auth/Auth";
import FAQ from "./FAQ"
import {useStyles} from "../components/Component-Styles/Home"

import "../App.css";
import {
  Button,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Jumbotron,
  Container,
  Media
} from "reactstrap";
import ProductDisplay from "./ProductDisplay";

const Home = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.jumboParent} >
            <Row className={classes.row}>
              <Col className={classes.column}> 
              <Media object src="https://res.cloudinary.com/dze74ofbf/image/upload/v1591910999/couple_z0vlls.jpg"
              style={{ height: "40vh" }}
              />
              </Col>
              <Col className={classes.column} 
              // style={{ textAlign: "center", color: "rgba(0,0,0,.87)"}}
               >               
                <h1 className={classes.text} >
                  Hassle free online store.
                </h1>                
                <h1  >
                  You handle the designs, we'll handle the rest
                </h1>
               
                <p style={{ textAlign: "center" }}>
                  <Button style={{background: "#4455ee", fontSize: 18, fontWeight: "bold", marginTop: 50}} className="letsGo"
                    href="https://merch-dropper.auth0.com/login?state=g6Fo2SAxazdHVDVjNXBrQW83VnFQOXhEcGdNYjkyaEprQTZMMqN0aWTZIEh4ZTVFVU9jNDM0UjIzSXQ2b3J1N2ZoZmlzWVUzWGpno2NpZNkgUGIzQ3A1cHRZZ2htTlZEanVzalBtc0hQUmtKcTZSQVA&client=Pb3Cp5ptYghmNVDjusjPmsHPRkJq6RAP&protocol=oauth2&redirect_uri=https%3A%2F%2Fmerchdropper.store%2Fredirect&audience=https%3A%2F%2Fmerchdropper-production.herokuapp.com%2F&signup=true&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=MTE4ZEN5dn5wbVItR1hfdDRiSWtMSDlBMHpETEZvS3Z2VDJ4RkZtcFd%2Bcw%3D%3D&code_challenge=Zdjv1_hFiGmK_71yYOoGJV7IVG1PZ0hW1eTU9PlW2Ik&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuNy4wIn0%3D"
                  >
                    Create Store
                  </Button>
                </p>
              </Col>
            </Row>
          {/* </Container> */}
        
      <FAQ/>     
    </div>
  );
};

export default Home;
