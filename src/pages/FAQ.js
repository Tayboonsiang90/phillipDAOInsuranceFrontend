import React, { useState } from "react";
import { useGlobalContext } from "../contexts/globalProvider";

// // Environment Variables

// Standard sleep function
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export default function FAQ() {

    return (
        <React.Fragment>
            <div class="accordion accordion-flush border border-5" id="accordionFaq">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-expanded="false" aria-controls="flush-collapse">
                            <b className="font-gold-big">Frequently Asked Questions (FAQ)</b>
                        </button>
                    </h2>
                    <div id="flush-collapse" class="accordion-collapse" aria-labelledby="flush-heading" data-bs-parent="#accordionFaq">
                        <div class="accordion-body">
                            <div className="accordion accordion-flush border" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                            1. What is Metamask?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                                                Metamask
                                            </a>{" "}
                                            is the most widely used crypto wallet to interact with your Ethereum account. Use this{" "}
                                            <a href="https://drive.google.com/file/d/1-B5Tji0XZbZcp3KqoWnoaATXv6wL4VCG/view?usp=sharing" target="_blank" rel="noreferrer">
                                                guide
                                            </a>{" "}
                                            to install Metamask.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                            2. What is ETH?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            You need ETH to make transactions on the blockchain. You can claim some ETH free{" "}
                                            <a href="https://tangerine-yeot-9ac935.netlify.app/EthFaucet" target="_blank" rel="noreferrer">
                                                here
                                            </a>
                                            .
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                            3. What is VOTE?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">VOTE is a token used to represent 1 voting power on the blockchain.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                                            4. How to get VOTE?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            You can claim 100 VOTE free once{" "}
                                            <a href="https://tangerine-yeot-9ac935.netlify.app/VoteFaucet" target="_blank" rel="noreferrer">
                                                here
                                            </a>
                                            , or buy{" "}
                                            <a href="https://app.uniswap.org/#/swap?chain=rinkeby&inputCurrency=ETH&outputCurrency=0x257D9Cf29c6f26806c94794a7F39Ee3c28cD28e7" target="_blank" rel="noreferrer">
                                                here
                                            </a>
                                            .
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                                            5. Other questions?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Reach out to taybs@phillip.com.sg (Tay Boon Siang) via Teams messages. I'll be happy to help you get your first NFT!</div>
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
