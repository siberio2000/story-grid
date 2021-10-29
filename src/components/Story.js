import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import mexicoKavak from "../assets/mexico_kavak.png";
import alphaMedical from "../assets/alpha_medical.png";
import carInsurance from "../assets/car_insurance.png";
import biltRewards from "../assets/bilt_rewards.png";

export default function Story() {
  return (
    <div className="main d-flex justify-content-center">
      <div className="col-xl-10">
        <div className="row mb-2">
          {/* First card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card row g-0 p-2 rounded-border overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col-auto  d-lg-block p-1">
                <img
                  src={mexicoKavak}
                  className="img-responsive"
                  alt="mexico kavak"
                />
              </div>
              <div className="col p-1 d-flex flex-column position-static">
                <p className="mb-0 pb-5">
                  Mexico’s Kavak drives away with $700M in new...
                </p>
                <a
                  href="https://www.definitely-not-just-techcrunch.com/story-1"
                  className="stretched-link"
                >
                  NEWS
                </a>
              </div>
            </div>
          </div>
          {/* Second card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card row g-0 p-2 rounded-border overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col-auto  d-lg-block p-1">
                <img
                  src={alphaMedical}
                  className="img-responsive"
                  alt="Alpha Medical"
                />
              </div>
              <div className="col p-1 d-flex flex-column position-static">
                <p className="mb-0 pb-5">
                  Alpha Medical closes $24M Series B round...
                </p>
                <a
                  href="https://www.definitely-not-just-techcrunch.com/story-2"
                  className="stretched-link"
                >
                  NEWS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          {/* Third card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card row g-0 p-2 rounded-border overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col-auto  d-lg-block p-1">
                <img
                  src={carInsurance}
                  className="img-responsive"
                  alt="Car Insurance"
                />
              </div>
              <div className="col p-1 d-flex flex-column position-static">
                <p className="mb-0 pb-5">
                  Just raises $8M in its effort to beat Root at...
                </p>
                <a
                  href="https://www.definitely-not-just-techcrunch.com/story-3"
                  className="stretched-link"
                >
                  NEWS
                </a>
              </div>
            </div>
          </div>
          {/* Fourth card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="card row g-0 p-2 rounded-border overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
              <div className="col-auto  d-lg-block p-1">
                <img
                  src={biltRewards}
                  className="img-responsive"
                  alt="Bilt Rewards"
                />
              </div>
              <div className="col p-1 d-flex flex-column position-static">
                <p className="mb-0 pb-5">
                  Bilt Rewards banks $60M growth on a $350M...
                </p>
                <a
                  href="https://www.definitely-not-just-techcrunch.com/story-4"
                  className="stretched-link"
                >
                  NEWS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="d-flex justify-content-center">
            <p>Built by Roman Jasko</p>
          </div>
        </div>
      </div>
    </div>
  );
}
