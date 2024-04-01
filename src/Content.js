import React, { useState } from "react";
import VideoContent from "./VideoContent";
import "./CSS/Content.css";

function Content({videoArray, findCateory}){
    const [activeBtn, setActiveBtn] = useState(0);

    const buttonArray = ["All", "Tech", "Gaming", "Music", "Traveling", "Cooking", "Art", "Business", "Education", "Beauty", "Other"]

    function btnClicked(index){
        findCateory(buttonArray[index]);
        setActiveBtn(index);
    }

    return(
        <div className="col-12 col-md-8 col-lg-10 px-5 overflow-y-auto" style={{height: "100%"}}>
            <ul className="buttons">
            {
                buttonArray.map((button, index) => (
                <li key={index} className="btn" style={{backgroundColor: `${activeBtn === index ? "rgb(213, 204, 121)" : "#434344"}`}}
                onClick={() => btnClicked(index)} > {button}
                </li>))
            }
            </ul>
            <VideoContent 
                videoArray={videoArray}
            />
        </div>
    );
}

export default Content;