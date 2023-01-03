import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

const BuildsPage: NextPage = () => {
  const builds = trpc.builds.getBuilds.useQuery();
  return (
    <>
      <Head>
        <title>View | SC2 Build Orders</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-400 p-4">
        View Build Orders
        <div>
          {builds?.data?.map((build, j) => (
            <div key={j}>
              {j} {build.matchUp} {build.buildOrder}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BuildsPage;
