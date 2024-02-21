import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Servay from "@/components/Servay";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Servay />
    </main>
  );
}
