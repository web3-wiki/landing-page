import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  const router = useRouter();
  const [address, setAddress] = useState();

  const loginMeta = () => {
    // metamask login
  }

  return (
    <div className={`nav box`}>
      <Container fluid className="cont">
        <Row className="nav__row">
          <Col md={2} className="nav__logo">
            <Link href="/">
              <img src="/logo/wikistake-icon-bw.png" alt="logo" width="20px" />
            </Link>
          </Col>
          <Col sm={0} md={8} className="nav__links hide-on-phone">
            <span className="nav__link">
              <Link href="/roadmap">Import Wiki</Link>
            </span>

            <span className="nav__link">
              <Link href="/about-us">My pages</Link>
            </span>

            <span className="nav__link">
              <Link href="/proposals">Updated pages</Link>
            </span>

            <span className="nav__link">
              <Link href="/nft-communities">Recent Activities</Link>
            </span>
          </Col>

          <Col md={2} className="nav__cta">
            {address ? (
              <button className="btns--connected btns" onClick={logout}>
                Logout
              </button>
            ) : (
              <button className="btns" onClick={loginMeta}>
                Connect wallet
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}