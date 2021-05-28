import React, { useState, useEffect } from "react"

const LabelTitle = (props) => {
    return(
        <div className="sub-desc-cont">
            <label onClick={props.onClick}>
                {props.title}
            </label>
        </div>
    )
}
const SubText = (props) => {
    return(
        <div className="sub-cont">
            <p className="sub-text">
                {props.text}
            </p>
        </div>
    )
}

const Home = () => {

    var [sub1, SetSub1] = useState("")
    var [sub2, SetSub2] = useState("")
    var [sub3, SetSub3] = useState("")
    var [all, SetAll] = useState("Read All")
    
    const handleLabel1 = () => {
        if (sub1 === "") {
            SetSub1(
                <SubText
                    text="What I had a hard time with 
                        was placement and styling the 
                        pages to get a good user experience. 
                        And in the beginning, the 
                        API was a bit awkward, 
                        but it worked out, 
                        I thought!"
                />    
            )
            SetSub2("")
            SetSub3("")
        } else {
            SetSub1("")
        }
    }
    const handleLabel2 = () => {
        if (sub2 === "") {
            SetSub2(
                <SubText
                    text="
                        Yes it would have been 
                        better UX / UI, but otherwise 
                        I'm happy. This is the first 
                        time I have worked with this 
                        API and my first task I received 
                        from an employer. So overall 
                        I am satisfied, as I have 
                        gained experience in 
                        doing a task."

                />    
            )
            SetSub1("")
            SetSub3("")
        } else {
            SetSub2("")
        }
    }
    const handleLabel3 = () => {
        if (sub3 === "") {
            SetSub3(
                <SubText
                    text="
                        I chose to do this task 
                        in React, I know it is 
                        not really a framework. 
                        But if we call it a 
                        framework, I chose it 
                        because I like it, 
                        and it's my favorite 
                        right now. And it's a 
                        good library!"
                />    
            )
            SetSub1("")
            SetSub2("")
        } else {
            SetSub3("")
        }
    }
    
    function handleAll() {
        console.log(all.length)
        if (all.length >= 8) {
            SetAll("Close")
            SetSub1(
                <SubText
                    text="
                        What I had a hard time with 
                        was placement and styling the 
                        pages to get a good user experience. 
                        And in the beginning, the 
                        API was a bit awkward, 
                        but it worked out, 
                        I thought!"
                /> 
            )
            SetSub2(
                <SubText
                    text="
                        Yes it would have been 
                        better UX / UI, but otherwise 
                        I'm happy. This is the first 
                        time I have worked with this 
                        API and my first task I received 
                        from an employer. So overall 
                        I am satisfied, as I have 
                        gained experience in 
                        doing a task."
                /> 
            )
            SetSub3(
                <SubText
                    text="
                        I chose to do this task 
                        in React, I know it is 
                        not really a framework. 
                        But if we call it a 
                        framework, I chose it 
                        because I like it, 
                        and it's my favorite 
                        right now. And it's a 
                        good library!"
                /> 
            )
        } else {
            SetAll("Read All")
            SetSub1("")
            SetSub2("")
            SetSub3("")
        }
    }
    
    return (
        <div id="main-home">
            <div className="home-image"/>
            <div className="home-title-sub">
                <div className="title-cont">
                    <h2>Dmitri Nilsson Bysell</h2>
                </div>
                <LabelTitle
                    onClick={handleLabel1}
                    title="1. What parts did you struggle with and why?"
                />
                {sub1}       
                <LabelTitle 
                    onClick={handleLabel2}
                    title="2. Would you 
                    do anything differently 
                    if you were to do it again?"
                />       
                {sub2}       
                <LabelTitle 
                    onClick={handleLabel3}
                    title="3. Which 
                    framework did you choose and 
                    why? If you did not choose 
                    to use a framework, why?"
                />       
                {sub3}
                <h2 
                    onClick={() => handleAll()}
                    className="all">{all}</h2>
            </div>
        </div>
    )
}

export default Home