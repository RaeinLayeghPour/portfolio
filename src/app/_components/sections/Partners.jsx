import Data from '@data/sections/partners';

const PartnersSlider = ({ paddingTop }) => {
  return (
    <>
      {/* partners */}
      <div className="container-fluid">
        {/* row */}
        <div className={`row justify-content-center p-${paddingTop}-0`}>

          {/* only first 3 items */}
          {Data.items.slice(0, 3).map((item, key) => (
            <div className="col-4 col-md-3 col-lg-2 text-center" key={`partners-slider-item-${key}`}>
              <img
                className="art-brand"
                src={item.image}
                alt={item.alt}
                style={{ maxWidth: '100%', height: '100px', objectFit: 'contain' }}
              />
            </div>
          ))}
          
        </div>
        {/* row end */}
      </div>
      {/* partners end */}
    </>
  );
};

export default PartnersSlider;
