import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Buttons/Button";
import { isNumberValidate } from "../../../Utils/Regex";
import { FORMTOASTERRID, OTP_COUNT, OTP_COUNTER } from "../../../Utils/Const";
import { useAppDispatch } from "../../../Redux/Store";

const SignInOTP: React.FC<any> = ({ handleShow, text }) => {

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const [numbercount, setNumberCount] = useState(0);
  const [countDown, setCountdown] = useState(OTP_COUNTER);

  const timeRef = useRef<HTMLAnchorElement>(null);
  const [sendOTP, setOtpSend] = useState<string>("");

  const specialChars = /[@]/;

  const handleClose = () =>{
    handleShow();
  }


  const handleValidate = (e: FormEvent) => {
    e.preventDefault();

    if (timeRef.current) {
      const rese = "0's";
    }
    // if (countDown === 0) {
    //   toast.error("OTP expired, resend the OTP");
    //   return;
    // }
    if (numbercount >= OTP_COUNT) {
    //   toast.error('OTP resend limit reached.')
      handleShow();
      return;
    }
    // gettting the otp
    const first = (document.getElementById("first") as HTMLInputElement).value;
    const second = (document.getElementById("second") as HTMLInputElement)
      .value;
    const third = (document.getElementById("third") as HTMLInputElement).value;
    const fourth = (document.getElementById("fourth") as HTMLInputElement)
      .value;
    const resultOTP = parseInt(first + second + third + fourth, 10);
    if (!first || !second || !third || !fourth) {
    //   Toast({messageText:"Please provide the",messageType:"W",toastId:FORMTOASTERRID});
            return 
    }
    if (resultOTP == undefined || resultOTP === null) {
    //   Toast({messageText:"Please provide the",messageType:"W",toastId:FORMTOASTERRID});
            return 
    }
    // getOTP({ text, resultOTP, navigation, dispatch });
  };

//   const handleIncrement = () => {
//     const count = numbercount;
//     if (count <= OTP_COUNT) {
//       setCountdown(OTP_COUNTER);
//       setNumberCount(count + 1);
//       baseURL
//         .get(`${requestUrl.sendNewOtp}/${text}`)
//         .then((res) => {
//           if (res.status === 200) {
//         Toast({messageText:"OTP send successfully.",messageType:"S",autoClose:1000,toastId:"signOptSuccess"})
//           }
//         })
//         .catch((e) => console.log(e));
//     } 
  
//   };

  const handleOtpInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

    const inputs = [
      document.getElementById("first") as HTMLInputElement,
      document.getElementById("second") as HTMLInputElement,
      document.getElementById("third") as HTMLInputElement,
      document.getElementById("fourth") as HTMLInputElement,
    ];
    const target = event.target as HTMLInputElement;
    const key = event.key;
    const currentIndex = inputs.indexOf(target);
    
    if (!key.match(/^[0-9]$/) && key !== "Backspace") {
      event.preventDefault();
      return;
    }
    if (target.value.length > 1) {
      target.value = target.value.charAt(0);
    }
  
    if (key === "Backspace") {
      if (target.value === "" && currentIndex > 0) {
        inputs[currentIndex - 1].focus();
      }
    } else if (key.match(/^[0-9]$/)) {      
      target.value = key; 
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1].focus();
      }
      event.preventDefault(); 
    }  
   
  };




  useEffect(() => {
    const name = text.substring(0, text.lastIndexOf("@"));
    const domain = text.substring(text.lastIndexOf("@") + 1);
    if (specialChars.test(text)) {
      const arr = text.split("");
      const stars: string[] = [];
      arr.forEach((val:any, i:number) => {
        if (i > 1) {
          stars.push("*");
        }
      });
      const x = text.lastIndexOf("@") - 3;
      stars.length = x;
      setOtpSend(name.substring(0, 2) + "" + stars.join("") + "@" + domain);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center p-8 md:p-14">
      <span className="heading heading-lg text-center">pvNXT Email OTP Signin</span>
      <span className="para para-md text-center">We have sent a code to your email {sendOTP}</span>
      <form>
        <div className="flex flex-row items-center justify-between gap-2 mx-auto w-full max-w-full" id="otp" data-bs-toggle="tooltip" title="Enter otp here">
          <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="first" name="first" onKeyDown={handleOtpInput} />
          <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="second" name="second" onKeyDown={handleOtpInput} />
          <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="third" name="third" onKeyDown={handleOtpInput} />
          <input autoComplete="off" className="input-box1 w-24 h-16 text-xl text-center" type="number" maxLength={1} id="fourth" name="fourth" onKeyDown={handleOtpInput} />
        </div>
        <div className="flex gap-4 max-sm:flex-col mt-8">
          <Button className="btn btn-md-outlineprimary w-full" onClick={handleShow} id="butotp" name="Back" />
          <Button className="btn btn-md-primary w-full" type="submit" id="btnsignin" name="Sign in" onClick={(e) => handleValidate(e)} />
        </div>
      </form>
      {/* <Timer handleIncrement={handleIncrement} resendcount={numbercount} setNumberCount={setNumberCount} timeRef={timeRef} countdown={countDown} setCountdown={setCountdown} handleClose={handleClose}/> */}
    </div>
  );
};

export default SignInOTP;
