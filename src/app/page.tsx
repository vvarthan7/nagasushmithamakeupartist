import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
      </main>
      <footer></footer>
    </>
  );
}
