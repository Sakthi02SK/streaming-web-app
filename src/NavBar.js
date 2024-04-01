import React from "react";
import "./CSS/navBar.css"

function NavBar() {
    return (
        <div className="col-12 col-md-4 col-lg-2 overflow-y-auto sideBar" style={{height: "100%"}}>
            <nav className="text-white">
                <ul className="option">
                    <li><i className="fa-solid fa-house"></i>Home</li>
                    <li><i className="fa-regular fa-compass"></i>Explore</li>
                    <li><i className="fa-regular fa-clock"></i>Watch Later</li>
                    <li><i className="fa-solid fa-book"></i>Library</li>
                    <li><i className="fa-solid fa-clock-rotate-left"></i>History</li>
                    <li><i className="fa-solid fa-gear"></i>Settings</li>
                    <li><i className="fa-regular fa-flag"></i>Report History</li>
                    <li><i className="fa-regular fa-circle-question"></i>Help</li>
                    <li><i className="fa-solid fa-circle-exclamation"></i>Send Feedback</li>
                </ul>
                <p>Subscriptions</p>
                <ul className="subList">
                    <li><img src="https://yt3.ggpht.com/ytc/AIdro_niY5P7XbsaAxlxeBMARgIEsVq6sHNOkZMKFyolrQ=s68-c-k-c0x00ffffff-no-rj" alt="img1"/>Mrwhosetheboss</li>
                    <li><img src="https://yt3.ggpht.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s68-c-k-c0x00ffffff-no-rj" alt="img2" />Veritasium</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
