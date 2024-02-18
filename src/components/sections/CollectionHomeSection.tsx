import { BromleyImg } from '../../constants/data.ts';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const CollectionHomeSection = () => {
  return (
    <section className="max-container mb-20 px-6 sm:px-10 2xl:px-0">
      <h2 className="text-center text-secundary-light uppercase font-sans font-medium py-6 my-10">
        This is the new Nostalgia
      </h2>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4 text-center lg:pr-8 mt-8 order-2 lg:order-1">
          <p className="uppercase font-sans font-medium text-secundary-light tracking-wide">
            roweam new vintage
          </p>
          <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-normal">
            The Bromley Collection
          </h3>
          <p className="font-sans text-secundary py-2">
            Our cornerstone collection, designed with families and comfort in
            mind. Exquisite designs that foster a life well lived for
            generations to come.
          </p>
          <AnchorLink label="Shop now" path="/shop" />
        </div>
        <div className="lg:w-1/2 lg:order-3 w-full md:w-[90%]">
          <img
            src={BromleyImg}
            alt="Sofá da coleção Bromley"
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};
