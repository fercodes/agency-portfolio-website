import { Navbar } from "./components";
import { Hero, AboutUs, Projects, Services } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <Projects />
      <Services />
      <section>Contact</section>
      <section>Footer</section>
    </main>
  );
};

export default App;
