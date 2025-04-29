'use client';

import Data from "@data/sections/history.json";
import Popup from 'reactjs-popup';
import ImageView from "@components/ImageView";

const HistorySection = ({ paddingTop = 0 }) => {
  return (
    <>
      <div className="container-fluid">
        <div className={paddingTop ? "row p-30-0" : "row"}>

          {/* Left Column */}
          <div className="col-lg-6">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4 dangerouslySetInnerHTML={{ __html: Data.col1.title }} />
              </div>
            </div>

            <div className="art-timeline art-gallery" id="history">
              {Data.col1.items.map((item, key) => (
                <div className="art-timeline-item" key={`education-item-${key}`}>
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.title}</h5>
                        <div className="art-el-suptitle mb-15">{item.subtitle}</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    <p>{item.text}</p>

                    {/* Button logic */}
                    {(() => {
                      if (item.button) {
                        switch (item.button.type) {
                          case "modal":
                            return (
                              <Popup
                                trigger={
                                  <a className="art-link art-color-link art-w-chevron">
                                    {item.button.label}
                                  </a>
                                }
                                modal
                                closeOnDocumentClick
                                overlayStyle={{
                                  background: 'rgba(0, 0, 0, 0.85)'
                                }}
                              >
                                <div
                                  style={{
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                                    maxWidth: '90%',
                                    maxHeight: '80vh',
                                    overflowY: 'auto',
                                    textAlign: 'center'
                                  }}
                                >
                                  <img
                                    src={item.button.link}
                                    alt="Certificate"
                                    style={{
                                      maxWidth: '100%',
                                      maxHeight: '70vh',
                                      borderRadius: '8px'
                                    }}
                                  />
                                </div>
                              </Popup>
                            );
                          case "link":
                            return (
                              <a
                                className="art-link art-color-link art-w-chevron"
                                href={item.button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.button.label}
                              </a>
                            );
                          default:
                            return null;
                        }
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4 dangerouslySetInnerHTML={{ __html: Data.col2.title }} />
              </div>
            </div>

            <div className="art-timeline">
              {Data.col2.items.map((item, key) => (
                <div className="art-timeline-item" key={`works-item-${key}`}>
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.title}</h5>
                        <div className="art-el-suptitle mb-15">{item.subtitle}</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    <p>{item.text}</p>

                    {/* Button logic */}
                    {(() => {
                      if (item.button) {
                        switch (item.button.type) {
                          case "modal":
                            return (
                              <Popup
                                trigger={
                                  <a className="art-link art-color-link art-w-chevron">
                                    {item.button.label}
                                  </a>
                                }
                                modal
                                closeOnDocumentClick
                                overlayStyle={{
                                  background: 'rgba(0, 0, 0, 0.85)'
                                }}
                              >
                                <div
                                  style={{
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    borderRadius: '10px',
                                    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                                    maxWidth: '90%',
                                    maxHeight: '80vh',
                                    overflowY: 'auto',
                                    textAlign: 'center'
                                  }}
                                >
                                  <img
                                    src={item.button.link}
                                    alt="Certificate"
                                    style={{
                                      maxWidth: '100%',
                                      maxHeight: '70vh',
                                      borderRadius: '8px'
                                    }}
                                  />
                                </div>
                              </Popup>
                            );
                          case "link":
                            return (
                              <a
                                className="art-link art-color-link art-w-chevron"
                                href={item.button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.button.label}
                              </a>
                            );
                          default:
                            return null;
                        }
                      }
                    })()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ImageView />
      </div>
    </>
  );
};

export default HistorySection;
