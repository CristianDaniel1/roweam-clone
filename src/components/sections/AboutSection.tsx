import aboutImg from '../../assets/img/about-2.jpg';

export const AboutSection = () => {
  return (
    <section
      className="max-container px-10 2xl:px-0 flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center pb-10 font-sans"
      id="about"
    >
      <div className="lg:w-3/5 appear-item relative md:w-[90%] w-full order-2 lg:order-1">
        <img
          src={aboutImg}
          alt="mesas e cadeiras marrons estilo vintage, em uma sala"
          className="object-contain w-full"
        />
      </div>
      <div className="lg:px-4 lg:w-2/5 order-1">
        <h2 className="uppercase text-lg tracking-wider text-secundary-light font-medium my-4 opacity-90">
          About
        </h2>
        <p className="my-4">
          Roweam is a luxury furniture brand whose heirloom custom furniture
          pieces evoke a sense of simple nostalgia. Inspired by the minds of
          designers, crafted by the hands of artisans, and sourced with leading
          industry expertise, our collection of new and true vintage is more
          than what is new and now. It's a tangible experience that inspires a
          lifetime of comfort.
        </p>
      </div>
    </section>
  );
};
