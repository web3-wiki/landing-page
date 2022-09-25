import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  const router = useRouter();
  const [address, setAddress] = useState();
  let metamask = typeof window !== "undefined" && window.ethereum;

  const loginMeta = async () => {
    try {
      if (!metamask) return alert("Please Install MetaMask");

      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        localStorage.setItem("address", accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const address = localStorage.getItem("address");

    if (address) {
      const addressString = `${address.slice(0, 5)}...${address.slice(-4)}`;
      setAddress(addressString);
    }
  }, []);

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
              <Link href="/import-article">Import Wiki</Link>
            </span>

            <span className="nav__link">
              <Link href="/new-article">Create New Wiki</Link>
            </span>

            <span className="nav__link">
              <Link href="/my-page">My pages</Link>
            </span>

            {/* <span className="nav__link">
              <Link href="/proposals">Updated pages</Link>
            </span>

            <span className="nav__link">
              <Link href="/nft-communities">Recent Activities</Link>
            </span> */}
          </Col>

          <Col md={2} className="nav__cta">
            {address ? (
              <button className="btns--connected btns" >
                {address}
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
