import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalProvider";
import car1 from "../media/car1.jpg";
import car2 from "../media/car2.jpg";

// // Environment Variables

// Standard sleep function
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default function Link4() {
    let { currentAccountAddress, metamaskExistCheck, currentChainId, currentAccountEthBal, currentAccountVoteBal, setCurrentAccountAddress, setMetamaskExistCheck, setCurrentChainId, setCurrentAccountEthBal, setCurrentAccountVoteBal } = useGlobalContext();

    return (
        <React.Fragment>
            {" "}
            <div className="d-flex flex-column justify-content-center">
                <h3 className="font-alert p-3">Your Connected ETH Address: {currentAccountAddress}</h3>
                <h3 className="font-alert">{currentAccountAddress} is a whitelisted claims approver.</h3>
                <h1 className="font-fancy p-3">Claims waiting for claims approval</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Policy #37465: Car
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Policy #34867: Car
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Policy #29846: Car
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Policy #22857: Car
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Policy #21958: Car
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Policy #17767: Car
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Policy #1325: Car
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div>
                                            <span className="fw-bold font-alert">Policy Number:</span> 37465
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Type of Cover:</span> Comprehensive / Named Driver Plan
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy Start Date:</span> 18/05/2022
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Policy End Date:</span> 17/08/2023
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Driver:</span> Tay Boon Siang
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Phone:</span> +65 97726707
                                        </div>
                                        <div className="mt-3">
                                            <span className="fw-bold font-alert">Vehicle Registration Number:</span> SMD2848H
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Make & Model:</span> Hyundai Elantra 1.6
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Vehicle Colour:</span> Silver
                                        </div>
                                        <div>
                                            <span className="fw-bold font-alert">Year of First Registration:</span> 2018
                                        </div>
                                        <div className="d-flex mt-3">
                                            <img className="me-3 img-thumbnail rounded" src={car1} alt="Logo" style={{ width: "40%" }} />
                                            <img className="me-3 img-thumbnail rounded" src={car2} alt="Logo" style={{ width: "40%" }} />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <div className="border border-5">
                                            <div className="text-center h1 font-fancy">Assessed Damage</div>
                                            <div className="text-center h1">$789.34</div>
                                        </div>
                                        <div className="border border-5 mt-3">
                                            <div className="text-center h1 font-fancy">Damage Assessor</div>
                                            <div className="text-center">0x20022983cDD1DC62Abc6fB880E760d6C7476a249</div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-lg font-alert mt-4">
                                            Approve
                                        </button>
                                        <button type="button" className="btn btn-danger btn-lg font-alert mt-4">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
