import makeHistoryImg from '../../assets/img/make-history-image.jpg';
import { AnchorLink } from '../UI/AnchorLink';

export const MakeHistorySection = () => {
  return (
    <section className="max-container px-10 2xl:px-0 pb-20 lg:py-20">
      <div className="bg-primary-light bg-opacity-60 flex flex-wrap justify-center p-4 sm:p-10">
        <div className="lg:w-1/2 relative appear-item">
          <img
            src={makeHistoryImg}
            alt="uma cadeira em uma floresta, em volta de árvores"
          />
        </div>
        <div className="lg:w-1/2 lg:px-20 flex flex-col items-start justify-center gap-7">
          <div className="uppercase text-secundary-light tracking-wide font-sans font-medium mt-6">
            Aging as Art
          </div>
          <h2 className="text-3xl sm:text-4xl">Make history</h2>
          <p className="font-sans">
            For the love of what's new and what's old, we source from vendors
            with an expert eye for products that imbue a sense of originality
            and timelessnes.
          </p>
          <AnchorLink label="Shop now" path="/shop" />
        </div>
      </div>
    </section>
  );
};
