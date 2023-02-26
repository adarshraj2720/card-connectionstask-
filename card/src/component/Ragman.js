import chatimg from '../images/live-chat.png'
import locationimg from '../images/location.png'
import rentimg from '../images/rent.png'

import productimg from '../images/Product Details Page.png'
import chatscreenimg from '../images/Chat Screen.png'


import qrimg from '../images/qr-code.png'

import trukimg from '../images/Vector.png'


import { NavLink } from "react-router-dom"


export default function Ragman() {
    return (
        <>
            <header>
                <h1>RAGMAN</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' exact>


                                <a href="#">Home</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/privacy'>
                                <a href="#">Privacy & Policy</a>
                            </NavLink>

                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <NavLink to='/refund'>
                                <a href="#">Refund and Cancellation Policy</a>

                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='container'>
                <section className='section1' >
                    <h2>Ragman india's best app for selling second hand products.</h2>
                    <div style={{ margin: "30px 0", paddingBottom: "50px" }} className='flex-around'>
                        <div >
                            <div className="ab">
                                <img style={{ width: "64px", height: "64px" }} src={chatimg} alt="chat"></img>
                            </div>
                            <br />
                            <span style={{ display: "flex", justifyContent: "center", fontWeight: "600", fontSize: "12px", }}>Instant Chat</span>
                        </div>
                        <div>
                            <div className="ab">
                                <img style={{ width: "64px", height: "64px" }} src={locationimg} alt="product"></img>
                            </div>
                            <br />
                            <span style={{ display: "flex", justifyContent: "center", fontWeight: "600", fontSize: "12px", }}>Nearby Product</span>
                        </div>
                        <div>
                            <div className="ab">
                                <img style={{ width: "64px", height: "64px" }} src={rentimg} alt="rent"></img>
                            </div>
                            <br />
                            <span style={{ display: "flex", justifyContent: "center", fontWeight: "600", fontSize: "12px" }}>Buy & Sell</span>
                        </div>
                    </div>
                </section>
                <section className='section2'>
                    <div className='flex-around'>
                        <div>
                            <div className="abc" style={{ width: "400px", height: "102px", backgroundColor: "#FFFFFF", textAlign: "center", marginBottom: "20px", padding: "10px" }}>
                                <h3>AUTHENTICATED RAGMEN</h3>
                                <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>
                                    Instill in us your trust and we promise that
                                    we’ll offer the best of professionals to come
                                    and cater to you.
                                </p>
                            </div>
                            <div className="abc" style={{ width: "400px", height: "102px", backgroundColor: "#FFFFFF", textAlign: "center", padding: "10px" }}>
                                <h3>KNOW PRICING BEFORE HAND</h3>
                                <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "20px" }}>
                                    Instill in us your trust and we promise that
                                    Nothing better than knowing your profits before hand!
                                    We offer you exactly that and nothing less.
                                </p>
                            </div>
                        </div>
                        <img style={{ width: "150px", height: "284px" }} src={productimg} alt="productimg" />
                        <img style={{ width: "150px", height: "284px" }} src={chatscreenimg} alt="productimg" />
                    </div>
                </section>
                <section className='section3 '>
                    <img style={{ width: "83px", height: "83px" }} src={qrimg} alt="qrimg" />
                    <div className='center' >
                        <p style={{ fontWeight: "700", fontSize: "18px", marginBottom: "10px" }}>Our Application Available on Playstore</p>
                        <button className='don-btn'>Download App Now</button>
                    </div>

                </section>
            </main>
            <footer className="flex-around align-start">
                <div>
                    <figure style={{ display: "flex", justifyContent: "flex-end" }}>
                        <img style={{ width: "41px", height: "22px", }} src={trukimg} alt="" />
                    </figure>
                    <h4>RAGMAN</h4><br />
                    <p style={{ fontSize: "10px", color: "white" }}>SELL GARBGE GET MONEY</p>
                </div>

                <div>
                    <ul className="flex-col">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Privacy & Policy</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex-col">
                        <li>
                            <a>Linkedin</a>
                        </li>
                        <li>
                            <a>Facebook</a>
                        </li>
                        <li>
                            <a>Instgram</a>
                        </li>
                        <li>
                            <a>Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}