import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";

export default function ImportArticle() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="new">
          <h3 className="heading">ðCopy and paste a link from your Wikipedia article</h3>


          <div className="box reference">
            <input
              className="new__title"
              placeholder="ð Url"
              type="text"
            />
          </div>

          <div className="cta">
            <button className="btns">
                Save ð
            </button>

            <button className="btns">
                Mint â
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
