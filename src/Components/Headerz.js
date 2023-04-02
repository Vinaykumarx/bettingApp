import React, { Component } from "react";
import Fade from "react-reveal";

const Headerz = (props) => {
    return (
        <div id='headerrr'>
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>
                <a className='navbar-brand page-scroll' href='#headerrr'>
                    <img src="images/Smmguru_logo.png" style={{ width: 200, paddingBottom: '20px', margin: "0px 20px 0px 40px" }} className="img-responsiveeee" alt="" />
                </a>
                <ul id="nav" className="nav navbar-nav navbar-right">
                    <li className="current">
                        <a className="smoothscroll" href="#headerrr">
                            Home
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#caution">
                            Caution
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#process">
                            Process
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#portfolio">
                            Works
                        </a>
                    </li>

                    <li>
                        <a className="smoothscroll" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="">

                        </a>
                    </li>
                </ul>
            </nav>

            {/* <div className='intro'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2 intro-text'>
                                <Fade bottom>
                                    <h1 className="responsive-headline">
                                        {props.data ? props.data.title : 'Loading'}
                                        <span></span>
                                    </h1>
                                </Fade>
                                <Fade bottom duration={5200}>
                                    <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                                    <a
                                        href='#features'
                                        className='btn btn-custom btn-lg page-scroll'
                                    >
                                        Learn More
                                    </a>{' '}
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='intro'>
                <div className='overlay' >
                    <div className='container'>




                        {/* second column start*/}
                        <div className='col-md-6 col-md-offset-0 intro-text first-column'>
                            <div className="row bannerrrrrr">
                                <div className="banner-textttt" style={{ lineHeight: '10px' ,textAlign:'center' }}>
                                <img src="images/banner_Img.jpeg" width={'420px'} alt="" />

                                    <hr />
                                    <ul>
                                        {props?.data?.title6?.map((ele) =>
                                            <li>
                                                <Fade bottom>
                                                    <h4 style={{ fontSize: '15px' }} className="responsive-headline">{props.data ? ele : 'Loading'}</h4>
                                                </Fade>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* second column end*/}

                        {/* first column start*/}
                        <div className='col-md-6 col-md-offset-0 intro-text'>
                            <div className="row bannerrrrrr">
                                <div className="banner-textttt" style={{ lineHeight: '10px' ,textAlign:'center'}}>
                                    <Fade bottom>
                                        <h1 style={{ fontSize: '40px' }} className="">{props.data ? props.data.title1 : 'Loading'}</h1>
                                    </Fade>
                                    <ul>
                                        {props?.data?.title2?.map((ele) =>
                                            <li>
                                                <Fade bottom>
                                                    <h4 style={{ fontSize: '30px' }} className="responsive-headline">{props.data ? ele : 'Loading'}</h4>
                                                </Fade>
                                            </li>
                                        )}
                                    </ul>
                                    <img src="images/open-24hours.gif" width={'220px'} alt="" />

                                    <Fade bottom>
                                        <h2 style={{ fontSize: '30px' }} className="responsive-headline">{props.data ? props.data.title3 : 'Loading'}</h2>
                                    </Fade>
                                    <ul>
                                        {props?.data?.title4?.map((ele) =>
                                            <li>
                                                <Fade bottom>
                                                    <h5 style={{ fontSize: '20px' }} className="responsive-headline">{props.data ? ele : 'Loading'}</h5>
                                                </Fade>
                                            </li>
                                        )}
                                    </ul>
                                    <Fade bottom duration={1200}>
                                        <h3>{props.data ? props.data.title5 : 'Loading'}</h3>
                                    </Fade>
                                    <hr />
                                    <Fade bottom duration={2000}>
                                        <ul className="social">
                                            <a href={"https://wa.me/9902752168?text=" + props?.data?.message} target="_blank" className="button btn project-btn">
                                                <i className="fa fa-book"></i>Get your betting account now
                                            </a>
                                            <a href={"https://wa.me/9902752168?text=" + props?.data?.message} target="_blank" className="button btn github-btn">
                                                <i className="fa fa-github"></i>Call now
                                            </a>
                                        </ul>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        {/* first column end*/}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Headerz;
