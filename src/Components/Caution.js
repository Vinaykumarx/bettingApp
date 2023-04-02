import React, { Component } from "react";
import Fade from "react-reveal";

const Caution = (props) => {
    return (
        <section id="caution">
            <div className="container-fluid py-5" style={{  backgroundColor: "red" }}>
                <div className="container ">
                    <div className="row text-center">
                        <div >
                            <Fade bottom>
                                <h1 style={{ fontSize: '50px' }}>
                                    {props.data ? props.data.title : 'Loading'}
                                    <span></span>
                                </h1>
                            </Fade>
                            <img alt="" src="images/fraud.png" />
                            <Fade bottom duration={5200}>
                                <h2 style={{ fontSize: '20px' }}>{props.data ? props.data.paragraph : 'Loading'}</h2>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Caution;