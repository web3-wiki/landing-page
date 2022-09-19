import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [address, setAddress] = useState();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  const loginMeta = () => {
    // metamask login
  }

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // if (address) {
    //   router.push({
    //     pathname: "/nft-communities",
    //     query: {
    //       address,
    //     },
    //   });
    // }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={`nav box ${visible && `nav-blured-bg`}`}>
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