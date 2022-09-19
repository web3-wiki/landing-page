import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./Search";

export default function NewArticle() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="new">
          <h3 className="heading">📇Create a new article ✍️</h3>

          <div className="box">
            <input className="new__title" placeholder="Title" type={"text"} />

            <textarea
              rows={8}
              className="new__body"
              placeholder="Body text"
              type="text"
            />
          </div>

          <div className="new__row">
            <div md={6} className="box choose-file">
              <input type={"file"} />
            </div>
            <div md={6} className="box">
              <textarea
                rows={6}
                className="new__body"
                placeholder="Description"
                type="text"
              />
            </div>
          </div>

          <div className="box reference">
            <textarea
              rows={3}
              className="new__body"
              placeholder="🔗 Reference's"
              type="text"
            />
          </div>

          <div className="cta">
            <button className="btns">
                Save 🛟
            </button>

            <button className="btns">
                Mint ⛓
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
