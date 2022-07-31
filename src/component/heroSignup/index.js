import React from "react";

import "./style.css"

const HeroLogin = () => {
    return (
        <>
            <div className='background'>
                <div className="content">
                    <div className="Signup">
                        <form>
                            <div className="box">
                                <label>
                                    Name
                                </label>
                                <input type="text" placeholder="Enter your name" id="name" />
                            </div>
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
                            <input type="submit" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>


        </>
    )

};

export default HeroLogin;