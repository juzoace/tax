import './Component1.css';
import Ellipse1 from '../../../assets/images/Ellipse1.png';
import Ellipse2 from '../../../assets/images/Ellipse2.png';
import Ellipse3 from '../../../assets/images/Ellipse3.png';
import Ellipse4 from '../../../assets/images/Ellipse4.png';
import Ellipse5 from '../../../assets/images/Ellipse5.png';
import Ellipse12 from '../../../assets/images/Ellipse12.png';

const Component1 = () => {
    return (
        <div id="containerId">
            <div  className='container'>
                <div id= 'test' className='container row'>

                    <div id="secureTransaction" className='col-sm-12 col-12 col-md-6'>
                        <h1>Secure & seamless <br></br>online transactions</h1>
                        <p>Providing you with the best online payment experience</p>
                        <button id= "container-item-button" >Create free account</button>
                    </div>

                    <div className='col-sm-12 col-12 col-md-6 rightBanner'>

                        <div id='individualCircleContainer'>
                            <img id="images" src={Ellipse1} alt='Taxaide' className="img-responsive div1"/>
                        </div>

                        <div id='individualCircleContainer' className='img-responsive div4'>
                            <img id="images" src={Ellipse4} alt='Taxaide'/>
                        </div>
                        
                        <div id='individualCircleContainer' className='img-responsive div2'>
                            <img id="images" src={Ellipse2} alt='Taxaide' />
                        </div>

                        <div id='individualCircleContainer' className='img-responsive div3'>
                                <img id="images" src={Ellipse3} alt='Taxaide'/>                             
                        </div>

                        <div id='individualCircleContainer' className='img-responsive div12'>
                            <img id="images" src={Ellipse12} alt='Taxaide'/>
                        </div>

                        <div id='individualCircleContainer' className='img-responsive div5'>
                            <img id="images" src={Ellipse5} alt='Taxaide'/>
                        </div>   
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Component1;