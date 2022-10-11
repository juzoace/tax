import './Component1.css';
import Ellipse1 from '../../../assets/images/Ellipse1.png';
import Ellipse2 from '../../../assets/images/Ellipse2.png';
import Ellipse3 from '../../../assets/images/Ellipse3.png';
import Ellipse4 from '../../../assets/images/Ellipse4.png';
import Ellipse5 from '../../../assets/images/Ellipse5.png';
import Ellipse12 from '../../../assets/images/Ellipse12.png';

const Component1 = () => {
    return (
        <div className='componentBorder'>
            <div id= 'test' className='container'>

                <div className='container-item'>
                    <h1>Secure & seamless <br></br>online transactions</h1>
                    <p>Providing you with the best online payment experience</p>
                    <button id= "container-item-button" >Create free account</button>
                </div>

                <div className='container-item'>

                <div id='individualCircleContainer' className='div1'>
                    <img  src={Ellipse1} alt='Taxaide'/>
                </div>

                <div id='individualCircleContainer' className='div4'>
                    <img  src={Ellipse4} alt='Taxaide'/>
                </div>
                   
                <div id='individualCircleContainer' className='div2'>
                    <img src={Ellipse2} alt='Taxaide' />
                </div>

                <div id='individualCircleContainer' className='div3'>
                        <img  src={Ellipse3} alt='Taxaide'/>                             
                </div>

                <div id='individualCircleContainer' className='div12'>
                    <img  src={Ellipse12} alt='Taxaide'/>
                </div>

                <div id='individualCircleContainer' className='div5'>
                            <img  src={Ellipse5} alt='Taxaide'/>
                </div>   
                    
                </div>
            </div>
        </div>
    )
}


export default Component1;