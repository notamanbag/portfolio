import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta,articlesPortfolio } from "../../content_option";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { redirect } from "react-router-dom";
export const Portfolio = () => {

  const redirectUser = (link)=>{
    console.log("Clicked");
    window.open(link, '_blank');
  }
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        <h2 className="display-8 mb-6"> Certification and Achievements </h2>{" "}
            <hr className="t_border my-2 ml-9 text-left" />
                <div className="mb-5 po_items_ho">
                    {dataportfolio.map((data, i) => {
                        return (
                          <div key={i} className="po_item">
                            <img 
                              onClick={() => redirectUser(data.link)}  // Wrap the function call in an anonymous function
                              src={data.img} 
                              alt="" 
                            />
                            <div style={{color:"white", fontSize:"14px" , marginTop:"10px"}}>{data.text}</div>
                          </div>
                        );
                      })}
                    </div>
          <h2 className="display-8 mb-6"> Articles </h2>{" "}
            
            <hr className="t_border my-2 ml-9 text-left" />
                <div className="mb-5 po_items_ho">
            {articlesPortfolio.map((data, i) => {
                return (
                  <div key={i} className="po_item">
                    <img 
                      onClick={() => redirectUser(data.link)}  // Wrap the function call in an anonymous function
                      src={data.img} 
                      alt="" 
                    />
                    <div style={{color:"white", fontSize:"14px" , marginTop:"10px"}}>{data.text}</div>
                  </div>
                );
              })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
