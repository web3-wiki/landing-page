import Head from "next/head";
import Nav from "../components/Nav";
import NewArticle from "../components/NewArticle";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Write New Article | WikiStake </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Nav />

      <NewArticle/>
    </div>
  );
}
