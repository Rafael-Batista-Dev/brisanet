import React from "react";

const Plans = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 plan">
            <div className="netuno-plan">
              <div className="plan-header">
                <div className="storage">
                  <span>
                    <i>50</i>{" "}
                  </span>{" "}
                  Mega
                </div>
                <h3 className="title">Netuno</h3>
              </div>
              <ul className="services-list">
                <li>Fibra Óptica</li>
                <li>Download 50 Mbps</li>
                <li>Upload 10 Mbps</li>
                <li>Wi-Fi de Alta Perfomance</li>
                <div>
                  <div className="price">
                    <span>R$</span>73,00
                  </div>
                </div>
              </ul>
              <button className="btn btn_get btn-lg btn-block btn_get_two">
                Assinar!
              </button>
            </div>
          </div>

          <div className="col-md-3 plan">
            <div className="urano-plan">
              <div className="plan-header">
                <div className="storage">
                  <span>
                    <i>100</i>{" "}
                  </span>{" "}
                  Mega
                </div>
                <h3 className="title">Urano</h3>
              </div>
              <ul className="services-list">
                <li>Fibra Óptica</li>
                <li>Download 100 Mbps</li>
                <li>Upload 20 Mbps</li>
                <li>Wi-Fi de Alta Perfomance</li>
                <div>
                  <div className="price">
                    <span>R$</span>83,00
                  </div>
                </div>
              </ul>
              <button className="btn btn_get btn-lg btn-block btn_get_two">
                Assinar!
              </button>
            </div>
          </div>

          <div className="col-md-3 plan">
            <div className="saturno-plan">
              <div className="plan-header">
                <div className="storage">
                  <span>
                    <i>200</i>{" "}
                  </span>{" "}
                  Mega
                </div>
                <h3 className="title">Saturno</h3>
              </div>
              <ul className="services-list">
                <li>Fibra Óptica</li>
                <li>Download 200 Mbps</li>
                <li>Upload 40 Mbps</li>
                <li>Wi-Fi de Alta Perfomance</li>
                <div>
                  <div className="price">
                    <span>R$</span>99,00
                  </div>
                </div>
              </ul>
              <button className="btn btn_get btn-lg btn-block btn_get_two">
                Assinar!
              </button>
            </div>
          </div>

          <div className="col-md-3 plan">
            <div className="jupiter-plan">
              <div className="plan-header">
                <div className="storage">
                  <span>
                    <i>1</i>{" "}
                  </span>{" "}
                  Giga
                </div>
                <h3 className="title">Júpiter</h3>
              </div>
              <ul className="services-list">
                <li>Fibra Óptica</li>
                <li>Download 1 GB</li>
                <li>Upload 200 Mbps</li>
                <li>Wi-Fi de Alta Perfomance</li>
                <div>
                  <div className="price">
                    <span>R$</span>499,00
                  </div>
                </div>
              </ul>
              <button className="btn btn_get btn-lg btn-block btn_get_two">
                Assinar!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
