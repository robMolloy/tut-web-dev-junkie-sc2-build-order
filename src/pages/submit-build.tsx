import { type NextPage } from "next";
import Head from "next/head";
import { BuildForm } from "../components/BuildForm/BuildForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-400 p-4">
        <BuildForm />
      </main>
    </>
  );
};

export default Home;
