import { processList } from '../../constants/data.ts';
import { ProcessItem } from '../ProcessItem.tsx';
import { AnchorLink } from '../UI/AnchorLink.tsx';

export const ProcessSection = () => {
  return (
    <section
      className="max-container grid grid-cols-1 lg:grid-cols-2 py-10 mt-16 px-6 sm:px-10 2xl:px-14 gap-20"
      id="process"
    >
      <div className="max-w-4xl">
        <div className="font-sans text-secundary-light uppercase tracking-wide font-medium mt-8">
          Process
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl my-4">
          The Roweam Method
        </h2>
        <p className="py-4 font-sans">
          Part new vintage, part true vintage, our design method takes a
          gathered, authentic approach using well-constructed pieces complete
          with endless character, no matter their age. At Roweam, we believe
          character is a cornerstone of timeless interiors. We create pieces
          that are made to age and live through generations.
        </p>
        <AnchorLink label="Shop now" path="/shop" />
      </div>
      {processList.map(process => (
        <ProcessItem
          key={process.id}
          title={process.title}
          image={process.image}
          alt={process.alt}
          description={process.description}
          id={process.id}
        />
      ))}
    </section>
  );
};
