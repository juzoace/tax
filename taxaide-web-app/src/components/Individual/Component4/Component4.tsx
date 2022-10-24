import banner from "../../../assets/images/banner.png" 
import './Component4.css'
const Component4 = () => {
    return (
        <div className="individualComponent4Border">
            {/* <div className="container">
                <div className="row">
                    <div className="col-sm">
                    One of three columns
                    </div>
                    <div className="col-sm">
                    One of three columns
                    </div>
                </div>
            </div> */}
            <div>
                <img id="banner" src={banner} />
            </div>
        </div>
    )
};

export default Component4;