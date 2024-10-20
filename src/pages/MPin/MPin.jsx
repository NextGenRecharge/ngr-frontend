import logo from "../../asset/logo.png";
import bannerMPIN from '../../asset/BannerMPIN.png'
import './MPin.css'
import { MPININPUT } from "./MPinInput";

const MPin = () => {
    return (
        <div className="mpin-container">
            <div className="mpin-set">
                {/* logo and franchise button */}

                <div className="mpin-header">
                    <div className="logo-container">
                        <img src={logo} alt="Company logo" className="logo" />
                    </div>
                    <div className="franchise-apply">
                        <button type="submit" className="w-48 p-2 mt-1 bg-primary text-secondary rounded">
                            Apply for franchise
                        </button>
                    </div>
                </div>

                {/* mpin set up message */}

                <div className="mt-2 mpin-title">
                    <h2>Set up your 4 digit MPIN</h2>
                </div>

                {/* Existing account check */}
                <div className="mb-8 already-acc-container">
                    <p>Already have an account? <a className="click-here-link" href="/login">Click here</a></p>
                </div>

                {/* set and confirm pin field */}
                <div className="mt-4 set-pin-cont">
                    <div className="mb-6 enter-pin-cont">
                        <p>Enter your PIN</p>
                        <MPININPUT />
                    </div>
                    <div className="mt-2 mb-6 conf-pin-cont">
                        <p>Confim your PIN</p>
                        <MPININPUT />
                        {/* <PinForm />  */}
                    </div>
                </div>

                {/* continue to payment */}
                <div className="continue-btn-cont">
                    <button type="submit" className="w-56 p-2 mt-1 bg-primary text-secondary rounded continue-btn">
                        Continue to payment
                    </button>
                </div>
            </div>

            {/* Banner image */}
            <div className="mpin-side-image">
                <img height={"100%"} width={"100%"} src={bannerMPIN} alt="MPIN banner image" className="mpin-banner" />
            </div>
        </div>
    )
}

export default MPin;