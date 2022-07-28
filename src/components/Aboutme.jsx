import React from "react";

function Aboutme() {
    return (
        <div>
            <div class="row landing-page">

                <div class="landing-left-div col-lg-6">
                    <img class="landingpage-img" src={require("../images/landingpage-image.png")}></img>
                </div>

                <div class="landing-right-div col-lg-6">
                    <div class="landingpage-right-content">
                        <h1>About</h1>
                        <p>
                            Wanna know more about what i do? Then you are at the right place!
                        </p>
                    </div>
                </div>
            </div>

            <section className="main_content">
                <div className="sub_content box_shadow">
                    <h1>About Me</h1>
                    <p>Hey Guys! My name is Ayesha Sk, currently pursuing Bachelor’s degree in Computer Science and Enginnering stream at C. Abdul Hakeem College of Enginnering and Technology, Vellore, Tamilnadu. You may wonder why computer science and engineering? it’s because my mom told to do so... just kidding! From my childhood i saw a lot of movies where IT guys chill in the company and earn a lot so, i wanted to know about the IT field which is making rich, so here I am. While doing enginnering I found my interest in Full-stack development and constanty improving my skills to become Full-stack developer soon.....   I guess!</p>
                </div>

                <div className="sub_content">
                    <h1>Skills</h1>

                    {/* skill cards */}
                    <div className="cards">
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src={require("../images/front-end.png")} alt="front-end"></img>
                            </div>
                            <div className="card_body">
                                <p>Front-end</p>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src={require("../images/back-end.png")} alt="back-end"></img>
                            </div>
                            <div className="card_body">
                                <p>Back-end</p>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_imgbg">
                                <img className="card_img" src={require("../images/designing.png")} alt="designing"></img>
                            </div>
                            <div className="card_body">
                                <p>Designing</p>
                                <ul>
                                    <li>Figma</li>
                                    <li>UI Design</li>
                                    <li>UX Design</li>
                                    <li>Logo Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* skill cards end */}

                {/* graph bar */}
                <div className="outer_box box_shadow">
                    <div className="box">

                        <div className="graphbox">


                            <div className="skill">
                                <div className="name" style={{ bottom: "92%" }}>HTML5&CSS3</div>
                                <div className="graph" style={{ height: "90%" }}>
                                    <div className="percent">90%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "52%" }}>React</div>
                                <div className="graph" style={{ height: "50%" }}>
                                    <div className="percent">50%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "62%" }}>Python</div>
                                <div className="graph" style={{ height: "60%" }}>
                                    <div className="percent">60%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "72%" }}>Node.js</div>
                                <div className="graph" style={{ height: "70%" }}>
                                    <div className="percent">70%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "62%" }}>MongoDB</div>
                                <div className="graph" style={{ height: "60%" }}>
                                    <div className="percent">60%</div>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="name" style={{ bottom: "101%" }}>Staring at the screen</div>
                                <div className="graph" style={{ height: "99%" }}>
                                    <div className="percent">99%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        </div>

    )
}

export default Aboutme;