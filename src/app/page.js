import Image from "next/image";
import Header from "./components/shared/Header";
import BannerNews from "./components/home/BannerNews";

export default function Home() {
  return (
    <>
      <Header />
      <BannerNews />
    </>
  );
}
