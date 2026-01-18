import Header from "./components/Header";
import Hero from "./components/Hero";
import Context from "./components/Context";
import Insight from "./components/Insight";
import Curriculum from "./components/Curriculum";
import Movie from "./components/Movie";
import Guides from "./components/Guides";
import Entry from "./components/Entry";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Context />
      <Insight />
      <Curriculum />
      <Movie />
      <Guides />
      <Entry />
      <Footer />
    </main>
  );
}
