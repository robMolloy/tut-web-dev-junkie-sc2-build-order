import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | SC2 Build Orders</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        Welcome to SC2 build Order Manager
        <div>
          <Link href="./submit-build">Go To Submit Build Page</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
