import React, { Component } from 'react'
import './NavBar.css'
// import cv from './'

class NavBar extends Component {
    state={clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
return (
    // className="cv_body wrapper"
    
        <nav>
            <a href="#"><img className='img_cv' src="./cv.png" alt="cv" /> 
             <h1>Shapiro Daniel 🇮🇱</h1>
             <h2>26 years</h2>
            </a>

            <div>
                <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>
                    <li>
                        <a href="#">Сontacts</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">My projects</a>
                    </li>
                    <li>
                        <a href="#">Education</a>
                    </li>
                    <li>
                        <a href="#">EN | RU</a>
                    </li>
                    <li>
                        <a href="#">Theme</a>
                    </li>
                </ul>
            </div>

            <div id='mobile'>
                <i id='bar' onClick={this.handleClick} className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    

)
}
}

export default NavBar