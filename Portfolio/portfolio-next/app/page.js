import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        <nav>

          <div className="left">Khushi Sharma - Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li> <a href="#experiences">Experiences </a></li>
              <li> <a href="#projects">Projects </a></li>
              <li> <a href="#contactme">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* HOME SECTION  */}
        <section id="home">
          <section className="firstsection">
            <div className="leftsection"> Hello, I am
              <p>KHUSHI SHARMA</p>
              <div className="leftsection">Welcome to my Portfolio
                <div className="buttons">
                  <a href='https://www.linkedin.com/in/khushi-sharma-b68651233'>
                    <button className="btn" >LinkedIn</button>
                  </a>
                  <a href='https://leetcode.com/CoderKhu/'>
                    <button className="btn" >Leetcode</button>
                  </a>
                  <a href='https://github.com/CoderKhu'>
                    <button className="btn" >GitHub</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="rightsection">
              <img src="/2.webp" alt="" />
            </div>
          </section>
        </section>

        <hr />
        {/* SKILLS SECTION  */}
        <section id="skills">
          <section className="fourthsection">
            <h1> My Skills</h1>
            <div className="container">
              <div className="card">
                <div className="box">
                  <div className="content">
                    {/* <h2>1</h2> */}
                    <h3>Acadamic Summary</h3>
                    <p>_____________________________</p>
                    <p>2021-Ongoing | Btech(CSE) |8.74CGPA | Graphic Era Hill University </p>
                    <p>_____________________________</p>
                    <p>2021 | 12th(CBSE) | 84.2% | Scholars Home School</p>
                    <p>_____________________________</p>
                    <p>2019 | 10th(CBSE) | 95.2% | Scholars Home School</p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <div className="content">
                    {/* <h2>1</h2> */}
                    <h3>Computer Skills/
                      Competencies</h3>
                    <p>_____________________________</p>
                    <p>1. Programming Languages: C, C++, Java, HTML</p>
                    <p>_____________________________</p>
                    <p>2. Area Of Interest: DSA using C, OOPs concepts in C++</p>
                    <p>_____________________________</p>
                    <p>3. DataBase: MySQL</p>
                    <p>_____________________________</p>
                    <p>4. Operating System: Windows OS</p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <div className="content">
                    {/* <h2>1</h2> */}
                    <h3>Non-Technical</h3>

                    <p>1. Active Member of the Co-Dev club (Coding Club) of GEHU.</p>
                    <p>_____________________________</p>
                    <p>
                      2.Participated in 4 weeks “Days of DevOps” workshop conducted by ACM Student Chapter of
                      GEU.
                    </p>
                    <p>_____________________________</p>
                    <p>
                      4.Successfully co-ordinated mega events like “Hack-0-Holic” (24 Hour
                      Hackathon).
                    </p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <hr />
        {/* EXPERIENCE SECTION  */}
        <section id="experiences">
          <section className="secondsection">
            <span className="text-grey">My Work </span>
            <h1>
              Experiences
            </h1>
            <div className="box">
              <div className="vertical">
                <img className="image-top" src="/html.png" alt="" />
                <div className="vertical-title">
                  HTML-Developer
                </div>
                <div className="vertical-desc">
                  HTML stands for HyperText Markup Language. It is used to design the web pages. With the help of HTML, you can create a complete website structure. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages and markup language defines the text document within the tag that define the structure of web pages.
                </div>
              </div>

              <div className="vertical">
                <img className="image-top2" src="/css.png" alt="" />
                <div className="vertical-title">
                  CSS-Developer
                </div>
                <div className="vertical-desc">
                  CSS (Cascading Style Sheets) is used to styles web pages. Cascading Style Sheets are fondly referred to as CSS. The reason for using this is to simplify the process of making web pages presentable. It allows you to apply styles on web pages. More importantly, it enables you to do this independently of the HTML that makes up each web page.
                </div>
              </div>

              <div className="vertical">
                <img className="image-top3" src="/js.png" alt="" />
                <div className="vertical-title">
                  JavaScript-Developer
                </div>
                <div className="vertical-desc">
                  JavaScript (JS) is the most popular lightweight, interpreted compiled programming language. It can be used for both Client-side as well as Server-side developments. JavaScript also known as a scripting language for web pages.
                </div>
              </div>

              <div className="vertical">
                <img className="image-top" src="/developer.png" alt="" />
                <div className="vertical-title">
                  Next JS-Developer
                </div>
                <div className="vertical-desc">
                Next.js is a react based framework. It is an awesome tool for creating web application and famous for server-side rendering. Next.js is build by Zeit. Developers with knowledge of HTML, CSS, Java Script and React can easily learn and switch to next.js.
                </div>
              </div>

              <div className="vertical">
                <img className="image-top" src="/developer.png" alt="" />
                <div className="vertical-title">
                  React JS-Developer
                </div>
                <div className="vertical-desc">
                  ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is an open-source, component-based front-end library that is responsible only for the view layer of the application. ReactJS is not a framework, it is just a library developed by Facebook to solve some problems that we were facing earlier.
                </div>
              </div>
            </div>
          </section>
        </section>

        <hr />
        {/* PROJECT SECTION  */}
        <section id="projects">
          <section className="thirdsection">

            <span className="text-grey">My recent </span>
            <h1>
              Projects
            </h1>

            <div className="container">
              <div className="card">
                <div className="box">
                  <div className="content">
                    <h2>1</h2>
                    <h3>Ice-Cream Delivery Website</h3>
                    <p>This is the "Ice-Cream Delivery Website that I had created in 3rd Semester.</p>
                    <a href="http://127.0.0.1:5500/index.html">Read More</a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <div className="content">
                    <h2>2</h2>
                    <h3>Gym Website</h3>
                    <p>This is the "Gym Wesite", that I had created in 2nd Semester. </p>
                    <a href="http://127.0.0.1:5501/index.html#">Read More</a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="box">
                  <div className="content">
                    <h2>3</h2>
                    <h3>Portfolio Website</h3>
                    <p>This is the "Portfolio Website", that i have created in 4th Semester.</p>
                    <a href="http://localhost:3000/">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>


        <hr />
        {/* CONTACT ME SECTION  */}
        <section id="contactme">
          <footer>
            <div className="footerContainer">
              <div className="socialIcons">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="footerNav">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experiences">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contactme">Contact Me</a></li>
                </ul>
              </div>
              <div className="footerBottom">
                <p>Copyright &copy; 2023; Designed by <span className="Designer">KHUSHI SHARMA</span></p>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>


  // document.getElementById('root')
  )
}
