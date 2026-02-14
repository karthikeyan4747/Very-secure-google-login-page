import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import arrow from "../assets/arrow.png"
import ok from "../assets/5.gif"
import devious from "../assets/4.jpg"
import mouse from "../assets/1.gif"
import smily from "../assets/2.jpg"
import devious_smily from "../assets/3.jpg"
import muhehe from "../assets/muhehehe.mp3"

function Login() {
    const [values, setValues] = useState(null)

    const audio = new Audio(muhehe);
    audio.loop = true

    const playSound = ()=>{
        audio.play();
    }

    return (
        <>
            <div className="login">
                <h1 id="login-h1">Login</h1>
                <GoogleLogin shape="pill" width={"90px"} onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential)
                    setValues(decoded)
                    console.log(decoded)
                    playSound()
                }} />


                <img src={arrow} id="arrowimg" />
                <img src={ok} id="okgif" />
                {values && (
                    <>
                        <div id="values">
                        <h2>{values.name}</h2>
                        <h2>{values.email}</h2>
                        <img src={mouse} alt="profile picture" width="100" />
                        <img src={smily}></img>
                        <img src={devious_smily}></img>
                        
                        </div>
                    </>
                )}
                <img src={devious} id="devious" />
            </div>
        </>
    )
}

export default Login;