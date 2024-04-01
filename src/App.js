import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Content from "./Content"

function App(){
    const [APIdata, setAPIData] = useState([]);
    const [videoArray, setVideoArray] = useState(APIdata);
    const [searchText, setSearchText] = useState("");

    function search(event){
        let text = event.target.value;
        if(text === "")
            findCateory("All");
        else
            setVideoArray(APIdata.filter(video => ((video.title).toLowerCase().includes(text.toLowerCase())) || ((video.channelName).toLowerCase().includes(text.toLowerCase())) ));
        setSearchText(text);
    }

    function findCateory(type){
        if(type === "All")
            setVideoArray(APIdata);
        else
            setVideoArray(APIdata.filter(video => (video.category).toLowerCase() === type.toLowerCase()));
        setSearchText("");
    }

    const fetchData = async () => {
        try{
            const response = await fetch("/api/public/videos", {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            if(!response.ok)
                throw new Error("Failed to fetch data");
            const data = await response.json();
            setAPIData(data);
            setVideoArray(data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            <Header 
                searchText={searchText}
                search={search}
            />
            <div className="container-fluid m-0 p-0" style={{height: "calc(100vh - 100px)"}}>
                <div className="row" style={{height: "100%"}}>
                    <NavBar />
                    <Content 
                        videoArray={videoArray}
                        findCateory={findCateory}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;