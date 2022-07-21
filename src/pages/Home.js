import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalProvider";
import carousel0 from "../media/logo.jpg";
import carousel1 from "../media/carousel1.jpg";

// // Environment Variables

// Standard sleep function
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default function Home() {
    let { currentAccountAddress, metamaskExistCheck, currentChainId, currentAccountEthBal, currentAccountVoteBal, setCurrentAccountAddress, setMetamaskExistCheck, setCurrentChainId, setCurrentAccountEthBal, setCurrentAccountVoteBal } = useGlobalContext();

    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide border border-5" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="me-3" src={carousel0} alt="Logo" style={{ width: "100%", marginTop: "300px", marginBottom: "250px" }} />
                    </div>
                    <div className="carousel-item">
                        <img className="me-3" src={carousel1} alt="Logo" style={{ width: "100%" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>
    );
}
