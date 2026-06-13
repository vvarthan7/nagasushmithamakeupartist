import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
      </main>
      <footer></footer>
    </>
  );
}
