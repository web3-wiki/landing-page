import { ethers } from "ethers";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "../components/Nav";
import NewArticle from "../components/NewArticle";
import { CONTRACT_ABI_WIKI, CONTRACT_ADDRESS_WIKI } from "../constants/wikiContract";

export default function Home() {
  const [loading, setLoading] = useState(false);

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

  const getWikiPages = () => {
    // get wiki pages
    const contract = getContract();

    setLoading(true);

    contract.callStatic
      .wikipages()
      .then((res) => {
        setLoading(false);
        setContractBuyer(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWikiPages();
  }, []);

  return (
    <div>
      <Head>
        <title>My pages | WikiStake </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Nav />

      <div className="header">
        <div className="bg"></div>
        <Container fluid className="cont">
          <div className="new">
            {loading ? <p>Loading....</p> : <p>hello</p>}
          </div>
        </Container>
      </div>
    </div>
  );
}
