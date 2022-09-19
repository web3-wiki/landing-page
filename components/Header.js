import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";

export default function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} md={12} className="header__col">
              <div className="box header__box">
                <div className="header__heading">
                <h1 className="h1">{`WikiStake`}</h1>
                <h3>📖Platform for decentralized information</h3>
                </div>
                
                <Row>
                  <Col md={4} className="header__details">
                    <p className="p">
                    A decentralized information platform as an alternative to Wikipedia. Each article has its own community of collaborators who have staked Aave aTokens. Only article collaborators have the ability to write, maintain, and vote on modifications.
                    </p>
                  </Col>

                  <Col md={8} className="header__search">
                        <Search/>
                  </Col>
                </Row>
              </div>
            </Col>
            
          </Row>
        </div>
      </Container>
    </div>
  );
}