import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./section/hero_section";
import Service from "./section/service_section";
import Solution from "./section/solution_section";
export default function Home() {
  return (
  <>

  <header>
<Navigation/>
<Hero/>
  </header>
  <main>
    <Service />
    <Solution/>
  </main>
  
  </>

  );
}
