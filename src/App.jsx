import logo from './logo.svg';
import './App.css';
import './sass/app.css'
import NavBar from './components/NavBar';
import React from 'react';


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

const topFunction = () => {
  window.scrollTo({
    top: 0, 
    left: 0,
    behavior: 'smooth'

  })
  document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function App() {
  


  let isSoon = true

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isSoon = false
  } else {
    isSoon = true
  }
  const [soon, setSoon] = React.useState(isSoon);
  const [leng, setLeng] = React.useState(true);
  return (
    <div>
      {/* hello */}
      <NavBar className='navbar' soon={soon} setSoon={setSoon} leng={leng} setLeng={setLeng}/>
      <div id='Сontacts' className={soon ? "light-theme m-b-105" : "dark-theme m-b-105"}  style={{height: "105px"}}></div>
     
      <div className={soon ? "cv_body light-theme" : "cv_body dark-theme"}>
        <div  className='about'>
          <img src="./avatar.jpeg" alt="avatar" />

          <div className={soon ? 'light-theme-color contact' : 'dark-theme-color contact'}>
            <a href="mailto:danielfrolovshapiro@gmail.com" target="_blank">
              <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fillRule="evenodd"/>
              </svg>
              <p>Email</p>
             </a>
            <a href="https://wa.me/972586601967" target="_blank">
            <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>whatsapp</title>
<path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
</svg>
            {/* <img src='./wa.jpeg' alt="wa" /> */}
            <p>WhatsApp</p></a>
            <a href="https://t.me/Daniel5757" target="_blank">
              {/* <img src="" alt="" /> */}
              <svg fill="#000000" width="50px" height="50px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"/></svg>
              <p>Telegram</p>
              </a>

              <a href="https://www.linkedin.com/in/daniel-shapiro-8283a9125/" target="_blank">
              {/* <img src="" alt="" /> */}
              <svg fill="#000000" width="40px" height="40px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd"/>
</svg>
              <p>LinkedIn</p>
              </a>
            
          </div>
        </div>

        <div id='Skills' className={soon ? "light-theme m-b-105" : "dark-theme m-b-105"}  style={{height: "105px"}}></div>


        <div  name="ProfessionalSkills" className='ProfessionalSkills'>
            <h2>{leng ? 'Professional Skills' : 'Профессиональные навыки'} </h2>
            <p>SwiftUI, HTML,  CSS, SCSS, JavaScript, React, TypeScript, Redux Toolkit, React Router v6, SQL, PHP, Windows,Java, Python, JUnit, iOS, Android, HTTP/HTTPS, HTTP2, XML, JSON, REST API, git, GitHub, GitLab. </p>
          </div>

          <div className='PersonalSkills'>
            <h2>{leng ? 'Personal Skills' : 'Личные качества'}</h2>
            <p>{leng ? 'Highly capable of self-learning and constant improvement of professional skills, self- motivated, self-managed, determined and energetic, result-oriented, good time management and planning skills, excellent interpersonal skills.' : 'Высокая способность к самообучению и постоянному совершенствованию профессиональных навыков, самомотивация, самоуправление, решительность и энергичность, ориентированность на результат, хорошие навыки управления временем и планирования, отличные навыки межличностного общения.'}</p>
          </div>


          <div id='MyProjects' className={soon ? "light-theme m-b-105" : "dark-theme m-b-105"}  style={{height: "105px"}}></div>

          <div  className='MyProjects'>
            <h2>{leng ? 'My Projects' : 'Мои проекты'}</h2>
            <div>
              <div className='swift'>
                <h3>Shiwt</h3>
                <div className='swift_cards'>
                  
                  <div className='swift_cart'>


                  


                    {/* <a href="https://youtube.com/shorts/gpFrYC1c5zs" target="_blank"> */}
                    <iframe width="295" height="675" src="https://www.youtube.com/embed/gpFrYC1c5zs" title="Uber" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                      {/* <img src='./skills/swift/Uber.jpeg' alt="uber"/> */}
                      {/* <p>Uber</p> */}
                    {/* </a> */}
                    
                  </div>

                  <div className='swift_cart'>
                    <iframe width="459" height="816" src="https://www.youtube.com/embed/MNi5zWIPv54" title="Furniture Shop" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <a href=""> */}
                      {/* <img src='./skills/swift/FurnitureShop.png' alt="uber"/> */}
                      {/* <p>Furniture Shop</p> */}
                    {/* </a> */}
                  </div>

                  <div className='swift_cart'>
                  <iframe width="459" height="816" src="https://www.youtube.com/embed/qzFFyYEVVh4" title="Crypto" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <a href="">
                      <img src='./skills/swift/Crypto.png' alt="uber"/>
                      <p>Crypto</p>
                    </a> */}
                  </div>

                  <div className='swift_cart'>
                  <iframe width="459" height="816" src="https://www.youtube.com/embed/uty4Y4DnEoo" title="Locations" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <a href="">
                      <img src='./skills/swift/Locations.png' alt="uber"/>
                      <p>Locations</p>
                    </a> */}
                  </div>

                  <div className='swift_cart'>
                  <iframe width="459" height="816" src="https://www.youtube.com/embed/-KdHnUFMgvA" title="Todo list" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <a href="">
                      <img src='./skills/swift/ToDoList.png' alt="uber"/>
                      <p>To Do List</p>
                    </a> */}
                  </div>

                  <div className='swift_cart'>
                  <iframe width="459" height="816" src="https://www.youtube.com/embed/dL58YYA1wZE" title="registration" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <a href="">
                      <img src='./skills/swift/Registration.png' alt="uber"/>
                      <p>Registration</p>
                    </a> */}
                  </div>

                  <div className='swift_cart'>
                    <a href="https://drive.google.com/file/d/1WpaQFN2kTsXzKcLeaOL0EBp6-brJ9YGB/view" target="_blank">
                      <img src='./skills/swift/Shop_Card.png' alt="uber"/>
                      {/* <p>Shop Card</p> */}
                    </a>
                  </div>

                </div>
              </div>
              
              <div className='react'>
                <h3>{leng ? 'React (without adaptation for phones)' : 'React (без адаптации для телефонов)'} {}</h3>
                <div className='react_carts'>
                  
                  <div className='react_cart'>
                    <a href="https://danielfrel.github.io/react-sneakers/" target="_blank">
                      <img src='./skills/react/snikers.png' alt="snikers"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://rizza.vercel.app/" target="_blank">
                      <img src='./skills/react/pizza.png' alt="pizza"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://photos-olive.vercel.app/" target="_blank">
                      <img src='./skills/react/photo.png' alt="photos"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://danielfrel.github.io/todo-list-react/" target="_blank">
                      <img src='./skills/react/todo.png' alt="todo"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://counter-navy-rho.vercel.app/" target="_blank">
                      <img src='./skills/react/counter.png' alt="counter"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://users-two-eta.vercel.app/" target="_blank">
                      <img src='./skills/react/userInvitation.png' alt="users"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://quiz-jade-mu.vercel.app/" target="_blank">
                      <img src='./skills/react/quiz.png' alt="quiz"/>
                    </a>
                  </div>

                  <div className='react_cart'>
                    <a href="https://modal-olive.modalWindow.app/" target="_blank">
                      <img src='./skills/react/snikers.png' alt="modal"/>
                    </a>
                  </div>
                  
                </div>
              </div>

              <div className='verstka'>
                <h3>{leng ? 'html, css (without adaptation for phones)' : 'html, css (без адаптации для телефонов)'}</h3>
                <div className='verstka_carts'>
                  
                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/project_1/" target="_blank">
                      <img src='./skills/verstka/1.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_10/task1/" target="_blank">
                      <img src='./skills/verstka/2.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_9/" target="_blank">
                      <img src='./skills/verstka/3.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_8/" target="_blank">
                      <img src='./skills/verstka/4.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_7/" target="_blank">
                      <img src='./skills/verstka/5.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_6/" target="_blank">
                      <img src='./skills/verstka/6.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_5/" target="_blank">
                      <img src='./skills/verstka/7.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/HTML-layouts/lesson_4/" target="_blank">
                      <img src='./skills/verstka/8.png' alt="uber"/>
                    </a>
                  </div>

                  <div className='verstka_cart'>
                    <a href="https://danielfrel.github.io/Smart-Winners/" target="_blank">
                      <img src='./skills/verstka/9.png' alt="uber"/>
                    </a>
                  </div>

                  
                </div>
              </div>

            </div>
          </div>

          <div id='education' className={soon ? "light-theme m-b-105" : "dark-theme m-b-105"}  style={{height: "105px"}}></div>

          <div  name="education" className='Education'>
            <h2>{leng ? 'Education' : 'Образование'}</h2>
            <p>{leng ? 'Touro university Moscow September 2021 - December 2022' : 'Университет Туро Москва сентябрь 2021 - декабрь 2022'}</p>
            <p>{leng ? 'The Tel Ran Educational Center - Full stack developer, from November 2019 – June 2021.' : 'Образовательный центр Tel Ran - разработчик полного стека, с ноября 2019 г. по июнь 2021 г.'}</p>
            <p>{leng ? 'Self-study on the websites sololearn.com and javarush' : 'Самостоятельное обучение на сайтах sololearn.com и javarush'}</p>
            <p>{leng ? 'In 2014 - 2017 studied at the Belarusian National Technical University.' : 'В 2014 - 2017 годах учился в Белорусском национальном техническом университете.'}</p>
          </div>

          <div  className='Languages'>
            <h2>{leng ? 'Languages' : 'Языки'}</h2>
            <p>{leng ? 'Russian, Hebrew, English.' : 'Русский, Иврит, Английский'}</p>
          </div>

      </div>
      
      <button onClick={topFunction} id="myBtn" title="Go to top"><img className='myBtn_img' style={{height: "20px", width: "20px"}} src="./upload.png" alt="" /></button>
      {/* <button onClick={topFunction} id="myBtn" title="Go to top">⬆</button> */}
    </div>
  );
}

export default App;
