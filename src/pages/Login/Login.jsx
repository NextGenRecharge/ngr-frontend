import React, { useState } from "react";
import "./Login.css";
import SignUpBG from "../../asset/icons/SignUpBG";
import MobileInput from "../../components/core/Input/MobileInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import SecureLoginIcon from "../../asset/icons/SecureLoginIcon";
import { Checkbox } from "antd";
import API from "../../services/apiService"; // Import API service
import LocalStorageService from "../../services/localstorageservice"; // Import token service

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobileNumber: "",
      agree: false,
    },
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { mobileNumber, countryCode, agree } = watch();
  const isValid = agree && mobileNumber.length === 10;

  const handleSendOTP = async () => {
    if (isValid) {
      setLoading(true);
      setError("");
      try {
        const payload = {
          payload: [
            {
              mobileNumber: mobileNumber,
              emailId: "sagarmangal10@gmail.com",
              deviceId: "erueoiwr8493eiurq",
              imeiNumber: "",
              deviceType: "WEB",
              uniqueCodeType: "MOBILE",
              locationPermission: true,
              longitude: 0,
              latitude: 0,
              clientType: "INDIVIDUAL",
              contactType: "MOBILE",
            },
          ],
        };
        const response = await API.post("/otp/sent_otp", payload, {
          headers: { "Content-Type": "application/json" },
        });  
        if (response.status === 200) {
          navigate("/otp-verify", { state: { number: mobileNumber } });
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
        setError(
          err.response?.data?.message || "Failed to send OTP. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };
  
console.log(mobileNumber,"mobileNumbermobileNumber")
  function handleMobileChange(e) {
    setValue("mobileNumber", e.target.value);
  }

  function handleAgree(e) {
    setValue("agree", e.target.checked);
  }

  return (
    <div className="box-container p-8">
      <form
        className="box-container-body"
        onSubmit={handleSubmit(handleSendOTP)}
      >
        <div className="h-full w-full flex flex-col justify-between">
          <div className="h-auto flex flex-col gap-6">
            <div>
              <h2 className="text-[24px] font-black text-center leading-relaxed">
                Let's Get You Started!
              </h2>
              <div className="my-3 w-full flex justify-center text-center text-[#00000099] text-sm">
                <div className="w-[260px]">
                  Enter your number to log in or sign up, it's super quick,
                  promise!
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <SecureLoginIcon />
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-full flex flex-col gap-2">
              <div>
                <MobileInput
                  autoFocus
                  name="mobile"
                  className="w-full"
                  selectedCountryCode={countryCode}
                  mobileNumber={mobileNumber}
                  onMobileNumberChange={handleMobileChange}
                  register={register}
                />
              </div>
              <button
                disabled={!isValid || loading}
                className={`${
                  !isValid ? "bg-gray-500" : "bg-primary"
                } w-full h-[48px] mt-1 text-secondary rounded-xl`}
                type="submit"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </div>
            <div>
              <Checkbox
                name="agree"
                checked={agree}
                onChange={handleAgree}
                className="next-checkbox"
              />
              <span className="ml-1 text-[#00000099]">
                I agree to the{" "}
                <span className="text-primary underline font-bold">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-primary underline font-bold">
                  Privacy Policy
                </span>
              </span>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
