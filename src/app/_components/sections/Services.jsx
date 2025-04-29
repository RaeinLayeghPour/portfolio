import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
      {/* services */}
      <div id="projects" className="container-fluid">

        {/* row */}
        <div className="row">

          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4 dangerouslySetInnerHTML={{ __html: Data.title }} />
              </div>
            </div>
          </div>
          {/* col end */}

          {Data.items.map((item, key) => (
            <div className="col-lg-4 col-md-6" key={`services-item-${key}`}>

              {/* service box */}
              <div className="art-a art-service-icon-box">
                <div className="art-service-ib-content">
                  {/* title */}
                  <h5 className="mb-15">{item.title}</h5>
                  {/* description */}
                  <div className="mb-15">{item.text}</div>
                  {/* button */}
                  <div className="art-buttons-frame">
                    {item.button.link.startsWith("http") ? (
                      <a
                        href={item.button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="art-link art-color-link art-w-chevron"
                      >
                        {item.button.label}
                      </a>
                    ) : (
                      <Link
                        href={item.button.link}
                        className="art-link art-color-link art-w-chevron"
                      >
                        {item.button.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {/* service box end */}

            </div>
          ))}

        </div>
        {/* row end */}

      </div>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
