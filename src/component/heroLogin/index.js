import React, { useState } from "react";

import "./style.css"

const HeroLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const firebaseConfig = {
    //     apiKey: "AIzaSyDf7B8R1inLA4WiC6yZhZbSCYE8ZYURjdA",
    //     authDomain: "marvelblog-a6a0a.firebaseapp.com",
    //     projectId: "marvelblog-a6a0a",
    //     storageBucket: "marvelblog-a6a0a.appspot.com",
    //     messagingSenderId: "114705780833",
    //     appId: "1:114705780833:web:8a498ff670956dc05c1a20"
    // };


    // const app = initializeApp(firebaseConfig);

    // const auth = getAuth(app);


    const submitValues = ( {email, password}) => {
        setEmail(email);
        setPassword(password)
        console.log(email, password)
    }



    return (
        <>
            <div className='background'>
                <div className="content">
                    <div className="login">
                        <form>
                            <div className="box">
                                <label>
                                    Email
                                </label>
                                <input type="text" placeholder="Enter your email" id="" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="box">
                                <label>
                                    Password
                                </label>
                                <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" value="Login" onClick={submitValues} />
                        </form>
                    </div>
                </div>
            </div>


        </>
    )

};

export default HeroLogin;