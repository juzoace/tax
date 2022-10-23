import './Component2.css';
import Vector from '../../../assets/images/Vector.jpg';
import Union4 from '../../../assets/images/Union 4.jpg';
import Path2807 from '../../../assets/images/Path 2807.jpg';
import Path32 from '../../../assets/images/Path 32.png';
import Path33 from '../../../assets/images/Path 33.png';
import Path28 from '../../../assets/images/Path 28.png'
import Ellipse6 from '../../../assets/images/Ellipse 6.png';
import Ellipse49 from '../../../assets/images/Ellipse 49.png';
import Path2460 from '../../../assets/images/Path 2460.png';
import Rectangle419 from '../../../assets/images/Rectangle 419.png';
import Path61 from '../../../assets/images/Path 61.png';
import Ellipse48 from '../../../assets/images/Ellipse 48.png';
import Ellipse7 from '../../../assets/images/Ellipse 7.png';
import Ellipse8 from '../../../assets/images/Ellipse 8.png';


const Component2 = () => {

    return (

        <div className='componentBorder'>
            <div className='headerContainer'>
                <h1>Payment tools designed for you</h1>
                <p>Explore payment features that provide you with every possible solution</p>
            </div>

            <div id="cardParent" className="container">


                    <div className="card-group">

                        <div id="cardBorder left" className="card">
                            
                            <div id='cardResponsiveness' className="card-body cardResponsiveness">

                                                <div className='phoneDiv'>
                                                    <img id="vector" className='floatItemContainer' src={Vector} />
                                                    <img id="Union4" className='floatItemContainer'src={Union4} />
                                                    <img id="Path2807" className='floatItemContainer' src={Path2807} />
                                                </div>

                                <h5 id="cardTitleFix" className="card-title">User Friendly</h5>
                                <p id="cardTextFix" className="card-text">Highly responsive and easy to navigate</p>
                            </div>
                            
                        </div>

                        <div id="center" className="card">
                            
                            <div className="shieldDiv">
                                <img id="path32" className="" src={Path32}/>
                                <img id="path33" className="floatItemContainer" src={Path28}/>
                                <img id="path28" className="floatItemContainer" src={Path33}/>
                            </div>

                            <div className="card-body">
                                <h5 id="cardTitleFix" className="card-title">Secure</h5>
                                <p id="cardTextFix" className="card-text">Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.</p>
                            </div>
                            
                        </div>

                        <div id="cardBorder right" className="card">
                            
                                <div className="shieldDiv">
                                                        <img id="Ellipse48" className="floatItemContainer" src={Ellipse48} />
                                                        <img id="Ellipse49" className="floatItemContainer" src={Ellipse49} />
                                                        <img id="Path2460" className="floatItemContainer" src={Path2460} />
                                                        <img id="Rectangle419" className="floatItemContainer" src={Rectangle419} />
                                                        <img id="Path61" className="floatItemContainer" src={Path61} />
                                                        <img id="Ellipse6" className="floatItemContainer" src={Ellipse6} />
                                                        <img id="Ellipse7" className="floatItemContainer" src={Ellipse7} />
                                                        <img id="Ellipse8" className="floatItemContainer" src={Ellipse8} />
                                </div>

                                <div className="card-body">
                                    <h5 id="cardTitleFix" className="card-title littleTittleFix">Fast</h5>
                                    <p id="cardTextFix" className="card-text littleTextFix">Transacting takes only a few seconds - it's convenient and safe.</p>
                                </div>
                            
                        </div>
                        
                    </div>
            </div>
        </div>
    )

};

export default Component2;