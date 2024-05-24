import { Navbar } from "./components";
import { Hero } from "./sections";
const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <section>About us</section>
      <section>Projects</section>
      <section>Services</section>
      <section>Contact</section>
      <section>Footer</section>
    </main>
  );
};

export default App;
