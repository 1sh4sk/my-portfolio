import React from "react";

function Contactme() {
    return (
        <div>
            <div class="row landing-page">

                <div class="landing-left-div col-lg-6">
                    <img class="landingpage-img" src={require("../images/landingpage-image.png")}></img>
                </div>

                <div class="landing-right-div col-lg-6">
                    <div class="landingpage-right-content">
                        <h1>Contact</h1>
                        <p>
                            Wanna get in touch? feel free to leave a message. If i did not reply within two days, I would probably wandering in my dreams!
                        </p>

                        <div class="contact-icons">
                            <div>
                                <a href="https://twitter.com/1sh4sk"><i class="fa-brands fa-twitter icon"></i><p>Twitter</p></a>
                                <a href="https://instagram.com/1sh4sk"><i class="fa-brands fa-instagram icon"></i><p>Instagram</p></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/1sh4sk"><i class="fa-brands fa-linkedin icon"></i><p>Linkedin</p></a>
                                <a href="https://github.com/1sh4sk"><i class="fa-brands fa-github icon"></i><p>Github</p></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="demo">
                <h1>work in progress...</h1>
            </div>

            <section className="main-content">
                <div>
                    <form>
                        <h1>Send me an email</h1>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter your name" />
                        <label>Email address:</label>
                        <input type="email" placeholder="Enter your email" />
                        <label>Message:</label>
                        <textarea rows="4" columns="50" placeholder="Type your message" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contactme;