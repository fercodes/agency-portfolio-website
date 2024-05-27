import { PricingCard } from "../components";

const Services = () => {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-cool-red"
    >
      <div className="flex flex-wrap justify-center gap-10">
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
};

export default Services;
