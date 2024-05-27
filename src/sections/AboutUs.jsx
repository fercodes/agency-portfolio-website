const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex min-h-screen w-full flex-col justify-center gap-10 bg-cool-red"
    >
      <div className="relative flex w-full items-start justify-center px-10 pt-28 max-sm:px-8">
        <p className="mx-auto max-w-3xl font-montserrat text-3xl text-white">
          Nos encanta materializar la creatividad en ideas hechas realidad.
          <br />
          Somos una agencia dedicada y comprometida, dispuesta a crear lo mejor
          para tu negocio y que no tiene miedo a pensar fuera de la caja.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
