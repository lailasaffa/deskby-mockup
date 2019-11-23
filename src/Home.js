import React from 'react';
import './App.css';
import Unilever from "./Images/unilever-logo.png";
import Google from "./Images/google-logo.png";
import Uber from "./Images/uber-logo.png";
import Zalora from "./Images/zalora-logo.png";
import Foodpanda from "./Images/foodpanda-logo.png";
import Mediacorp from "./Images/mediacorp-logo.png";
import Gambar from "./Images/coworking-space-2.jpg"; 
import Pin from "./Images/pin-logo.png";
import Host from "./Images/host-logo.png";
import Suitcase from "./Images/suitcase-logo.png";
import Workdesk from "./Images/space-5.jpg";
import Meeting from "./Images/space-3.jpg";
import Conference from "./Images/space-4.jpg";
import Private from "./Images/space-2.jpg";
import Event from "./Images/space-7.jpg";
import Dining from "./Images/space-1.jpg";
import Virtual from "./Images/space-6.jpg";


export class Home extends React.Component{
    render(){
        return(
        <div>
            <div className="container" id="container-background">
                <div className="section">
                    <div id="container-landing-page">
                        <div className="text-center">
                            <h2>Find your next Working Desk,</h2>
                            <h2>Private Office or Event Space</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" id="inputCity" placeholder="Find a Space"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <select id="inputState" className="form-control" placeholder="Space Type">
                                            <option selected>Space Type</option>
                                            <option>Working Desk</option>
                                            <option>Event Space</option>
                                            <option>Meeting Room</option>
                                            <option>Virtual Office</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <button className="btn btn-danger">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div id="container-find-listing">
                        <div className="text-center">
                            <h2 id="text-2">Find Your Workspace</h2>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="row justify-content-center">
                                    <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Workdesk} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Working Desk</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Meeting} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Meeting Room</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                    <div className="card border-light">
                                            <img className="card-img-top"src={Conference} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Conference Room</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Private} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Private Office</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Dining} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Corporate Dining</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Event} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Event Space</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Virtual} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text" id="title">Virtual Office</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                    <br />
                    <div id="container-top-listing">
                        <div className="text-center">
                            <h2 id="text-2">Top Listings</h2>
                        </div>
                        <br />
                        <div className="row">
                        <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                            <div className="row justify-content-center"> 
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Private} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text">
                                                    <span id="title">Rp590,000</span>
                                                    <span>Nice Meeting Room</span>
                                                    <span>Jakarta • Meeting Room</span>
                                                    <span>★★★★★ 8 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Workdesk} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text">
                                                    <span id="title">Rp590,000</span>
                                                    <span>Nice Meeting Room</span>
                                                    <span>Jakarta • Meeting Room</span>
                                                    <span>★★★★★ 8 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Virtual} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text">
                                                    <span id="title">Rp590,000</span>
                                                    <span>Nice Meeting Room</span>
                                                    <span>Jakarta • Meeting Room</span>
                                                    <span>★★★★★ 8 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-3">
                                        <div className="card border-light">
                                            <img className="card-img-top"src={Meeting} width="210" height="280"/>
                                            <div className="card-body text-center">
                                                <p className="card-text">
                                                    <span id="title">Rp590,000</span>
                                                    <span>Nice Meeting Room</span>
                                                    <span>Jakarta • Meeting Room</span>
                                                    <span>★★★★★ 8 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            </div>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div id="container-how-it-works">
                        <div className="text-center">
                            <h2 id="text-2">How it works</h2>
                        </div>
                        <br/>
                        <br/>
                        <div className="row justify-content-center">
                             <div className="col-sm-3">
                                 <div className="text-center">
                                    <img src={Pin} width="60" height="60"/>
                                    <p id="title">1. Browse unique spaces</p>
                                        <p id="text-works">
                                        <span>Explore the marketplace to find a space</span>
                                        <span>that fits your needs. From urban lofts and</span>
                                        <span>studios to modern meeting spaces, we've</span>
                                        <span>got you covered</span>
                                    </p>
                                 </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="text-center">
                                    <img src={Host} width="60" height="60"/>
                                    <p id="title">2. Connect with hosts</p>
                                    <p id="text-works">
                                    <span>We've designed Peerspace to save you</span>
                                    <span>time and hassle. Narrow your search,</span>
                                    <span>message hosts directly and confirm</span>
                                    <span>details through our website or mobile app.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                 <div className="text-center">
                                    <img src={Suitcase} width="60" height="60"/>
                                    <p id="title">3. Book & Enjoy</p>
                                    <p id="text-works">
                                    <span>Finalize your reservation using our secure</span>
                                    <span>online booking process and make the</span>
                                    <span>most of your creative space. We'll make</span>
                                    <span>sure your offsite, event or production is memorable.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div id="container-clients">
                    <div className="text-center">
                            <h2 id="text-2">Our Clients</h2>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="row justitfy-content-center">
                                <div className="col-sm-2"><img src={Google} width="100" height="50"/></div>
                                <div className="col-sm-2"><img src={Unilever} width="50" height="50"/></div>
                                <div className="col-sm-2"><img src={Uber} width="90" height="30"/></div>
                                <div className="col-sm-2"><img src={Zalora} width="150" height="60"/></div>
                                <div className="col-sm-2"><img src={Foodpanda} width="90" height="80"/></div>
                                <div className="col-sm-2"><img src={Mediacorp} width="90" height="60"/></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                <div className="section">
                    <div id="container-planning">
                    <div className="card border-light">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                            <img src={Gambar} class="card-img" alt="..."/>
                            </div>
                            <div className="col-md-6" id="card-planning">
                            <div className="card-body">
                                <h2 id="text-2" class="card-title">
                                    <span>Planning</span><span>something big?</span>
                                </h2>
                                <p className="card-text">
                                    <span>For large and complex events, our team</span>
                                    <span>of experts can help you every step of the way</span>
                                </p>
                                <a href="#" className="btn btn-danger">CONTACT US</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="footer">
                    <div id="container-footer">
                        <div className="row justify-content-center">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="row">
                            <div className="col-sm-3">
                                <p id="title">Airbnb</p>
                                <p id="text">
                                    <span>About us</span>
                                    <span>Careers</span>
                                    <span>Press</span>
                                    <span>Policies</span>
                                    <span>Help</span>
                                    <span>Diversity & Belonging</span>
                                </p>
                            </div>
                            <div className="col-sm-3">
                                <p id="title">Discover</p>
                                <p id="text">
                                    <span>Trust & Safety</span>
                                    <span>Travel Credit</span>
                                    <span>Gift Cards</span>
                                    <span>Airbnb Citizen</span>
                                    <span>Business Travel</span>
                                    <span>Guidebooks</span>
                                    <span>Airbnbmag</span>
                                </p>
                            </div>
                            <div className="col-sm-3">
                            <p id="title">Hosting</p>
                                <p id="text">
                                    <span>Why Host</span>
                                    <span>Hospitality</span>
                                    <span>Responsible Hosting</span>
                                    <span>Community Center</span>
                                </p>
                            </div>
                            <div className="col-sm-3">
                                <form>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option selected>English</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option selected>IDR</option>
                                    </select>
                                </div>
                                </form>
                            </div>
                            </div>
                            <hr/>
                            <p>© Airbnb, Inc.</p>
                        </div>
                        <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );   
    }
}

export default Home;