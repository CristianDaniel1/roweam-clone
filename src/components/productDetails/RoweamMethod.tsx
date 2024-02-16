import sofaTableImg from '../../assets/img/sofa-table.jpg';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const RoweamMethod = () => {
  return (
    <section className="py-20 px-6 sm:px-10 2xl:px-0">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 max-container p-6 md:p-10 bg-primary-light bg-opacity-60">
        <div className="lg:w-3/5 w-full">
          <img
            src={sofaTableImg}
            alt="mesa de madeira rara"
            className="w-full object-contain"
          />
        </div>
        <div className="lg:w-2/5 flex flex-col justify-center items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl opacity-80 pb-6 pt-4">
            The Roweam Method
          </h2>
          <p className="font-sans pb-4">
            We believe in the storytelling power of one-of-a-kind pieces that
            are made to age through the generation. Our custom products do just
            that. All material options are tried and true favorites that patina
            perfectly. So welcome the sun and play, sleep and stain—our
            furniture is meant for a fully lived life.
          </p>
          <AnchorLink
            label="Learn more"
            path="/about"
            className="text-sm my-4"
          />
        </div>
      </div>
    </section>
  );
};
