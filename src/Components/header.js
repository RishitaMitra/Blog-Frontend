import React from "react";
//import Media from 'react-media'
import firstpic from "./picture/human.png";
import secondpic from "./picture/lap.png";
import "./style.css";

export default function Header(){
    return(
        <>
        <head>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
    
   
    </head>
<body>
    <div className="contain">
    
    <div className="contain-img">
    
       
       <div className="image">
       <img src={firstpic} alt=" "/></div>
       <div className="main">
       <div className="big">We Share</div><br/>
       <div className="blue">Knowledge</div><br/>
       <div className="write">
       <p className="para">Join our community to learn<br/> and share your knowledge with <br/>the rest of the world.</p></div><br/>
       <div className="button">
        <button className="btn">Start A Blog</button></div><br/>
        </div>
    </div>
    </div><br/><br/><br/><br/>
    <div className="parent">
    <div className="two">
    <div className="second">
       <img src={secondpic} alt=" "/>
    </div>
    <div className="second-main">
    <div className="create">
        Content<br/>Design
    </div><br/>
    <div className="small">
        Learn from the best.
    </div><br/>
    <div className="button">
        <button className="btn">Start A Blog</button></div>
        </div>
        </div></div>
        <br/><br/><br/>
        <div className="parent">
        <div className="two">
    <div className="second">
       <img src={secondpic} alt=" "/>
    </div>
    <div className="second-main">
    <div className="create">
        Content<br/>Design
    </div><br/>
    <div className="small">
        Learn from the best.
    </div><br/>
    <div className="button">
        <button className="btn">Start A Blog</button></div>
        </div>
        </div></div>
           
            </body>

        </>

    );
}