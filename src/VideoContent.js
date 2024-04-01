import React from "react";
import "./CSS/VideoContent.css";

function VideoContent({videoArray}){
    return(
        <div className="videoContent mb-5">
            {videoArray.map((video, index) => (
                <div key={index} className="box">
                    <div className="thumbnail">
                    <img src={video.thumbnail} alt="thumbnail"/>
                    <span>{video.duration}</span>
                </div>
                <p className="title text-white my-2 md-my-3">{video.title}</p>
                <div className="aboutChannel">
                    <img src={video.channelPicture} alt="channelPic"/>
                    <div className="nameAndViews mx-3">
                        <span>{video.channelName}</span><br />
                        <span>15,219 Views</span><span className="mx-4">1 Week ago</span>
                    </div>
                </div>
                </div>
            ))
            }
        </div>
    );
}

export default VideoContent;