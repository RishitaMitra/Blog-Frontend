import React from 'react'
//import Media from 'react-media'
import './picture/human.png'
import './picture/lap.png'
import $ from 'jquery'
export default function Header(){
    return(
        <>
        <head>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script>
    $(document).ready(function(){
        $('.fa-bars').click(function(){
            $('.nav-list').toggleClass('show');
        })
    });
    
    </script>
    </head>
<body>
    <div className="contain">
    <nav className="navbar">
        <i className="fa fa-bars" aria-hidden="true" id="check"></i>
       <b><h1>BLOG</h1></b>
       <div className="new">
           
        <ul className="nav-list" id="menulist">
                
            <div className="nav-list-li">
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#contact">LOG IN/SIGN UP</a></li>
            </div>
        </ul>
        </div>
    </nav>
    <div className="contain-img">
    
       
       <div className="image">
       <img src={"picture/human.png"} alt="pic"/></div>
       <div className="main">
       <div className="big">We Share</div><br/>
       <div className="blue">Knowledge</div><br/>
       <div className="write">
       <p className="para">Join our community to learn<br/> and share your knowledge with <br/>the rest of the world.</p></div><br/>
       <div className="button">
        <button className="btn">Start A Blog</button></div><br/>
        </div>
    </div>
    </div>
    <div className="two">
    <div className="second">
       <img src={"picture/lap.png"} alt="pic2"/>
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
        </div>
    
            </body>

        </>

    );
}