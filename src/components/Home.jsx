import React from "react";

function Home() {
    return (
        <div>

            <div class="row landing-page">

                <div class="landing-left-div col-lg-6">
                    <img class="landingpage-img" src={require("../images/landingpage-image.png")}></img>
                </div>

                <div class="landing-right-div col-lg-6">
                    <div class="landingpage-right-content">
                        <p>Hey guys!</p>
                        <h1  className="home_heading">I'm Ayesha SK</h1>
                        <p>an upcoming Full-stack developer</p>

                        <div class="icons">
                            <a href="https://twitter.com/Ayesha_SK21d?t=EwTy9BH5ffEhDMk_gViLkw&s=09"><i class="fa-brands fa-twitter icon"></i></a>
                            <a href="https://instagram.com/ayesha_sk14?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram icon"></i></a>
                            <a href="https://www.linkedin.com/in/ayeshask"><i class="fa-brands fa-linkedin icon"></i></a>
                            <a href="https://github.com/Ayesha-sk-14"><i class="fa-brands fa-github icon"></i></a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;