import React from "react";
import PlansTv from "./components/PlansTv";

export default function Tv() {
  return (
    <>
      <div className="content" style={{ background: "#FFF" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-title">
                <h1>Toda a emoção da TV</h1>
              </div>
            </div>

            <PlansTv />
          </div>
        </div>
      </div>
    </>
  );
}
