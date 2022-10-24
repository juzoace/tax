import { useState } from 'react';
import PayBillBackground from "../../../assets/images/Pay Bill Background.png";
import PayBill from "../../../assets/images/Pay Bill.png";
import AirtiimeBundlesBackground from "../../../assets/images/Airtiime Bundles Background.png";
import AirtimeBundles from "../../../assets/images/Airtime Bundles.png";
import MoneyTransferBackground from "../../../assets/images/Money Transfer Background.png";
import MoneyTransfer from "../../../assets/images/Money Transfer.png";
import TollFeeBackground from "../../../assets/images/Toll Fee Background.png";
import TollFee from "../../../assets/images/Toll Fee.png";
import "./Component3.css";

const Component3 = () => {

    const [imageIndicator, setImageIndicator] = useState({
        payBill: true,
        buyAirtime: false,
        moneyTranfer: false,
        payTollFee: false
    })

    const selectPayBill = () => {
        
        setImageIndicator({
            payBill: true,
            buyAirtime: false,
            moneyTranfer: false,
            payTollFee: false
        })

    }

    const selectBuyAirtime = () => {
        setImageIndicator({
            payBill: false,
            buyAirtime: true,
            moneyTranfer: false,
            payTollFee: false
        })
 
    }

    const selectMoneyTranfer = () => {
        setImageIndicator({
            payBill: false,
            buyAirtime: false,
            moneyTranfer: true,
            payTollFee: false
        })
    }

    const selectPayTollFee = () => {
        setImageIndicator({
            payBill: false,
            buyAirtime: false,
            moneyTranfer: false,
            payTollFee: true
        })
    }



    return (
        <div className='individualComponent3Border'>
            <div id="individualComponent3Container" className="container">
                {/* Left card */}
               <div className='col-sm-12 col-12 col-md-6'>
                    <div id="leftCardResponsive" className="card-group ">
                        
                        <div className="card cardGroup">
                            
                            <div onClick={selectPayBill} id={`${imageIndicator.payBill ? 'SelectCardItem' : 'UnselectCardItem'}`} className="card-item">
                                <h1>Pay bills</h1>
                                <p>Paying your bills has never been so easy.</p>
                            </div>

                            <div onClick={selectBuyAirtime} id={`${imageIndicator.buyAirtime ? 'SelectCardItem' : 'UnselectCardItem'}`}>
                                <h2>Buy Airtime & Data</h2>
                                <p>Never get caught with low airtime and data again</p>
                            </div>

                            <div onClick={selectMoneyTranfer} id={`${imageIndicator.moneyTranfer ? 'SelectCardItem' : 'UnselectCardItem'}`} className="card-item">
                                <h3>Money Transfer</h3>
                                <p>Transferring money is now hassle free</p>
                            </div>

                            <div onClick={selectPayTollFee} id={`${imageIndicator.payTollFee ? 'SelectCardItem' : 'UnselectCardItem'}`} className="card-item lastItem">
                                <h4>Pay Toll Fee</h4>
                                <p>Never worry about getting a toll ticket again.</p>
                            </div>

                        </div>

                        
                    </div>
               </div>
                


                {/* Right card */}
                <div className='col-sm-12 col-12 col-md-6'>
                <div id="rightCardResponsive" className="card-group cardGroupContainer ">
                        <div className="card cardGroup">
                            
                            {imageIndicator.payBill && 
                                <div className='cardImageParent'>
                                    <div id="cardImage1" className='cardImage'> 
                                        <img id="PayBillBackground" className='img-responsive' src={PayBillBackground} />
                                    </div>
                                    <div id="cardImage2" className='cardImage'>
                                        <img id="PayBill" className='img-responsive' src={PayBill} />
                                    </div>
                                </div>
                            }

                            {imageIndicator.buyAirtime &&
                                <div className='cardImageParent'>
                                    <div id="cardImage3" className='cardImage'> 
                                        <img id="AirtiimeBundlesBackground" className='img-responsive' src={AirtiimeBundlesBackground} />
                                    </div>
                                    <div id="cardImage4" className='cardImage'>
                                        <img id="AirtimeBundles" className='img-responsive' src={AirtimeBundles} />
                                    </div>
                                </div>
                            }

                            {imageIndicator.moneyTranfer &&
                                <div className='cardImageParent'>
                                    <div id="cardImage5" className='cardImage'> 
                                        <img id="MoneyTransferBackground" className='img-responsive' src={MoneyTransferBackground} />
                                    </div>
                                    <div id="cardImage6" className='cardImage'>
                                        <img id="MoneyTransfer" className='img-responsive' src={MoneyTransfer} />
                                    </div>
                                </div>
                            }

                            {imageIndicator.payTollFee &&
                                <div className='cardImageParent'>
                                    <div id="cardImage7" className='cardImage'> 
                                        <img id="TollFeeBackground" className='img-responsive' src={TollFeeBackground} />
                                    </div>
                                    <div id="cardImage8" className='cardImage'>
                                        <img id="TollFee" className='img-responsive' src={TollFee} />
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Component3;