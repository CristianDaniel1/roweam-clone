import newNostalgia from '../../assets/img/new-nostalgia.jpg';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const NewNostalgiaSection = () => {
  return (
    <section
      className="max-container flex flex-wrap sm:flex-nowrap items-center py-10 mt-14 px-6 sm:px-10 2xl:px-0 gap-4 md:gap-10"
      id="new-nostalgia"
    >
      <div className="sm:w-3/5 pb-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-none opacity-90 py-8">
          Furniture is a gathering place and our curated collection is the
          conversation piece.
        </h2>
        <AnchorLink label="Shop now" path="/shop" />
      </div>
      <div className="sm:w-2/5">
        <img
          src={newNostalgia}
          alt="madeira com detalhes feitos a mão"
          className="object-contain object-center"
        />
        <p className="py-4 font-sans text-sm md:text-base">
          Adorning life with handmade details.
        </p>
      </div>
    </section>
  );
};
