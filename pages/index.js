import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });
import Topbar from "@/components/Topbar";
import Cards from "@/components/Cards";
import Graphs from "@/components/Graphs";

export default function Home() {
  return (
    <>
      <Layout>
        <Topbar></Topbar>
        <Cards></Cards>
        <Graphs></Graphs>
      </Layout>
    </>
  );
}
