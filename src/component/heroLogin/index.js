import React from "react";

import "./style.css"

const HeroLogin = () => {
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
                                <input type="text" placeholder="Enter your email" id="" />
                            </div>
                            <div className="box">
                                <label>
                                    Password
                                </label>
                                <input type="password" placeholder="Enter your password" />
                            </div>
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>


        </>
    )

};

export default HeroLogin;