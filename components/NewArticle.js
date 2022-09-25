import { ethers } from "ethers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMoralisFile } from "react-moralis";
import {
  CONTRACT_ABI_WIKI,
  CONTRACT_ADDRESS_WIKI,
} from "../constants/wikiContract";
import { create } from "ipfs-http-client";
import axios from "axios";

const client = create("https://ipfs.infura.io:5001/api/v0");

export default function NewArticle() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    image: "",
    reference: "",
  });
  const [address, setAddress] = useState();
  const [image, setImage] = useState();

  const getSignerOrProvider = () => {
    let provider;
    window.ethereum
      .enable()
      .then((provider = new ethers.providers.Web3Provider(window.ethereum)));
    return provider.getSigner();
  };

  const getContract = () => {
    const signer = getSignerOrProvider();

    // contract instance
    return new ethers.Contract(
      CONTRACT_ADDRESS_WIKI,
      CONTRACT_ABI_WIKI,
      signer
    );
  };

  const mint = async () => {
    const data = new FormData();
    data.append("file", image);
    // minting logic
    const fileResponse = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      image,
      {
        headers: {
          "Content-Type": `multipart/form-data;`,
          pinata_api_key: "2fec244783e2868c53fe",
          pinata_secret_api_key:
            "7b5dc87addce9bc0fa249bc9c3baa4e9ea075e5b972063058949e65987ea4cf4",
        },
      }
    );
    const { data: fileData = {} } = fileResponse;
    const { IpfsHash } = fileData;
    const fileIPFS = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;
  };

  useEffect(() => {
    const address = localStorage.getItem("address");

    if (address) {
      const addressString = `${address.slice(0, 5)}...${address.slice(-4)}`;
      setAddress(addressString);
    }

    console.log(getContract());
    console.log(formData);
  }, [formData]);

  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="new">
          <h3 className="heading">📇Create a new article ✍️</h3>

          <div className="box">
            <input
              className="new__title"
              placeholder="Title"
              type={"text"}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />

            <textarea
              rows={8}
              className="new__body"
              placeholder="Body text"
              type="text"
              onChange={(e) => {
                setFormData({ ...formData, body: e.target.value });
              }}
            />
          </div>

          <div className="new__row">
            <div md={6} className="box choose-file">
              <input
                type={"file"}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <div md={6} className="box">
              <textarea
                rows={6}
                className="new__body"
                placeholder="Description"
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="box reference">
            <textarea
              rows={3}
              className="new__body"
              placeholder="🔗 Reference's"
              type="text"
              onChange={(e) => {
                setFormData({ ...formData, reference: e.target.value });
              }}
            />
          </div>

          <div className="cta">
            <button className="btns">Save 🛟</button>

            <button className="btns" onClick={mint}>
              Mint ⛓
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
