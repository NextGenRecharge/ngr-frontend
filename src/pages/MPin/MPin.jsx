import './MPin.css'
import { MPININPUT } from "./MPinInput";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import { useForm } from "react-hook-form";
import SetMPinBg from "../../asset/icons/SetMPinBg";
import { useNavigate } from "react-router-dom";

const MPin = () => {
    const { handleSubmit, setValue } = useForm({
        defaultValues: {
            set: '',
            confirm: ''
        }
    });
    const navigate = useNavigate();
    const handlePinChange = (type, value) => {
        setValue(type, value);
    }

    function onSubmit(data) {
        if (data.set === data.confirm) {
            console.log(data);
            navigate('/create-account');
        } else {
            alert("MPIN does not match");
        }
    }

    return (
        <div className="mpin-container">
            <form className="mpin-form" action="" onSubmit={handleSubmit(onSubmit)}>
                <TitleBanner
                    icon={<SetMPinBg />}
                    title="SET NEW M-PIN"
                    subtitle="HEY THERE!"
                    description="SET YOUR 4 DIGIT M-PIN"
                >
                    <div className="w-full flex justify-between flex-col">
                        <div className="w-full flex flex-col justify-center gap-2">
                            <MPININPUT length={4} onChange={(value) => handlePinChange("set", value)} />
                            <MPININPUT length={4} onChange={(value) => handlePinChange("confirm", value)} />
                        </div>
                        <button className="w-full p-2 mt-1 bg-primary text-secondary rounded" type="submit">CONFIRM</button>
                    </div>
                </TitleBanner>
            </form>
        </div>
    )
}

export default MPin;