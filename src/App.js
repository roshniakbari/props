// import logo from './logo.svg';
// import './App.css';
import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF , FaTwitter , FaLinkedin , FaWhatsapp , FaStar,FaUniversity, FaHandPointRight  } from "react-icons/fa";
import { TiSocialGooglePlus , TiSocialInstagram } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { IoIosArrowBack ,IoIosArrowForward  } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import { FaGraduationCap, FaUserFriends,FaChalkboardTeacher} from "react-icons/fa";
import { CiPenpot } from "react-icons/ci";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiTeacher,GiUpgrade } from "react-icons/gi";
import { HiArrowLongRight,HiUserGroup,HiComputerDesktop } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import myimg from "./img/f_logo.SVG";
import myimg1 from "./img/i1.SVG";

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



var icon_bar=[
    {ico:<FaFacebookF></FaFacebookF>},
    {ico:<FaTwitter></FaTwitter>},
    {ico:<TiSocialGooglePlus></TiSocialGooglePlus>},
    {ico:<FaLinkedin></FaLinkedin>},
    {ico:<TiSocialInstagram></TiSocialInstagram>},
    {ico:<AiOutlineYoutube></AiOutlineYoutube>},
    {ico:<FaWhatsapp></FaWhatsapp>},
]

var arr_obj=[
    {name:"HOME"},
    {name:"COURSES"},
    {name:"ACTIVITIES"},
    {name:"BLOG"},
    {name:"KNOW US"},
    {name:"GET IN TOUCH"},
    {name:"STUDENT ZONE"},
]

var slider = [require("./img/a1.jpg"), require("./img/a2.jpg"), require("./img/a3.jpg"),require("./img/a4.jpg"),
 require("./img/a5.jpg"), require("./img/a6.jpg")]

 var courses = [
    { img: require("./img/i3.jpg"), name: "Development Courses"},
    { img: require("./img/i4.jpg"), name: "Design Courses"},
    { img: require("./img/i5.jpg"), name: "Programming IT"},
    { img: require("./img/i6.jpg"), name: "Trendy Courses"},
    { img: require("./img/i7.jpg"), name: "Civil-Mech. Engineering"},
    { img: require("./img/i8.jpg"), name: "Business Development"}
]

var counter= [
  { icon:<FaUserFriends></FaUserFriends>,count:"18000+", name: 'HAPPY STUDENTS'},
  { icon:<CiPenpot></CiPenpot>,count:"10+", name: 'CERTIFICATION APPROVAL'},
  { icon:<FaChalkboardTeacher></FaChalkboardTeacher>,count:"100+", name: 'CERTIFIED TEACHERS'},
  { icon:<FaGraduationCap></FaGraduationCap>,count:"12000+", name: 'STUDENTS PLACEDS'} 
]

var read_our= [
  { icon:<GiTeacher class='sv1'></GiTeacher>, 
    name: 'Industry Experts As Trainers',
    pragraph:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  { icon:<HiUserGroup class='sv2'></HiUserGroup>, 
    name: 'Latest Curriculum',
    pragraph:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
  },
  { icon:<HiComputerDesktop class='sv3'></HiComputerDesktop>, 
    name: 'Latest Technology',
    pragraph:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
  },
  { icon:<MdSupportAgent  class='sv4'></MdSupportAgent>, 
  name: 'Industry Experts As Trainers',
  pragraph:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
},
{ icon:<GiUpgrade class='sv5'></GiUpgrade>, 
  name: 'Latest Curriculum',
  pragraph:"We will be provided free upgradation for any newer version of the course you have."
},
{ icon:<FaHandsHoldingChild class='sv6'></FaHandsHoldingChild>, 
  name: 'Latest Technology',
  pragraph:"We will provide you lifetime support on all the courses you learned from us."
},
]

var stu_place=[
  {img:require('./img/i15.png')},
  {img:require('./img/i16.png')},
  {img:require('./img/i17.png')},
  {img:require('./img/i18.png')},
  {img:require('./img/i19.png')},
  {img:require('./img/i15.png')},
  {img:require('./img/i16.png')},
  {img:require('./img/i17.png')},
  {img:require('./img/i18.png')},
  {img:require('./img/i19.png')}
]
var our_course=[
  {pra:"Multimedia Training Institute In Varachha"},
  {pra:"spoken english class in katargam"},
  {pra:"Web development training in katargam"},
  {pra:"Best animation training course"},
  {pra:"C++ Programming Language Training Institute In Varachha"},
  {pra:"Python Training Institute In Varachha"},
  {pra:"Adobe illustrator design"},
  {pra:"Adobe xd design training institute in varachha"},
  {pra:"Multimedia Training Institute In Varachha"},
  {pra:"spoken english class in katargam"},
  {pra:"Web development training in katargam"},
  {pra:"Best animation training course"},
]

function App(){
  return(
    <header>
      {/* top header */}
      <div className="bgblue">
        <div className="container">
          <div className="top_header flex">
            <div className="left_add flex"> 
              <div className="left_text flex">
                <p className="icon flex"><TfiEmail></TfiEmail></p>
                <span>info@cdmi.in</span>
              </div>
              <div className="left_text flex">
                <p className="icon flex"><FaCertificate></FaCertificate></p>
                <span>Verify Certificate</span>
              </div>
            </div>

            <div className="center_text">
                <span>HAVE ANY QUESTION ? +91 90333 16003</span>                  
            </div>
            
           <div class="icon">
            <a>
                {
                    icon_bar.map((ele)=>{
                          return(
                               <li>{ele.ico}</li>
                          )
                     })
                }
            </a>
          </div>
          </div>
        </div>
      </div>

    {/* navbar */}
      <nav>
        <div className="container">
          <div className="logo_header flex">
            <div className="logo">
              <img src={require ('./img/i1.SVG')}></img>
            </div>
            <div className="main_menu">
            <ul className="single_menu"> 
                {
                    arr_obj.map((ele)=>{
                          return(
                               <li>{ele.name}</li>
                          )
                     })
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>

    {/* slider */}
    <OwlCarousel className="owl-theme" items={1} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
        {
            slider.map((ele) => {
            return (
              <div class="item">
                <img src={ele}></img>
              </div>
            )
          })
        }
    </OwlCarousel>

    {/* service */}
     
    <div className="container">
        <div className="main_ser">
            <div className="single_ser">
                <p class="first_title">
                {/* <hr className="line"></hr> */}
                CREATIVE COURSE
                </p>
                <h3 class="sec_title">
                OFFERED COURSES
                </h3>
            </div>
            <div className="course_img">
                    {
                      courses.map((ele, ind) => {
                        return (
                          <div key={ind}>
                            <img src={ele.img}></img>
                            <a className="card_title">{ele.name}</a>
                            <hr className="line"></hr>
                            <div className="flex star_icon">
                              <p className="star_icon">
                                <i className="star"><FaStar></FaStar></i>
                                <i className="star"><FaStar></FaStar></i>
                                <i className="star"><FaStar></FaStar></i>
                                <i className="star"><FaStar></FaStar></i>
                                <i className="star"><FaStar></FaStar></i>
                              </p>
                              <button className="blue_btn"><a>Know more..!</a></button>
                            </div>
                          </div>
                        )
                      })
                    }
            </div>
            <div class="view">
                 <button className="viewall">View All Courses<FaArrowRightLong></FaArrowRightLong></button>
            </div>
        </div>
    </div>
     

    {/* about info */}
    <section>
        <div className="abo_us flex">
          <div className="info">
            <p className="info_1">ABOUT US</p>
            <p className="info_2">IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            <p className="info_3">Creative Design & Multimedia Institute(CDMI) is a reputed training
              institute in Gujarat for Data Science, Machine Learning, Blockchain Development,
              AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App 
              Development, Video Editing & All types of IT Courses with 9 years of full-fledged, 
              result-oriented training experience. We stepped in the market in 2014 with the goal to
              help students, working professionals and other interested candidates get that dream job 
              or open that desired freelance business in some of the most popular Computer / IT fields.
              Our aim is to ease the hiring process for businesses and organizations by providing work-ready 
              professionals who can contribute greatly to their success. Since then, we have worked hard to
              achieve this goal and dedicated our time and resources to train students extensively.</p>
              <div className="button2">
                <button className="btn btn2">Enroll Now..!</button>
              </div>
          </div>
          <div className="right_img flex">
              <img src={require ('./img/i9.jpg')}></img>      
          </div>
        </div>
    </section>

    {/* 4 icon */}
    <div class='review'>
        <div class='counter'>
            <div class='container'>
              <div class='good-review '>
                <div className='count'>
                    {
                      counter.map((ele, ind) => {
                        return (
                            <div key={ind}>
                              <p>{ele.icon}</p>
                              <h1>{ele.count}</h1>
                              <h4>{ele.name}</h4>
                            </div>
                        )
                      })
                    }
                </div>
              </div>
            </div>
        </div> 
    </div>

    {/* testimonial */}
    <section>
      <div className="container">
        <div className="stu_info flex">
          <div className="tes_info">
            <p className="tes_1">HAPPY STUDENTS</p>
            <p className="tes_2">ALUMNI SPEAK</p>
            <div className="flex">
              <p className="tes_3"><FaQuoteRight></FaQuoteRight></p>
              <button className="prev"><IoIosArrowBack></IoIosArrowBack></button>
              <button className="next"><IoIosArrowForward></IoIosArrowForward></button>
            </div>
            <p className="tes_4">Good place to get trained on all the programming languages! Highly 
              qualified trainers with enthusiastic founder! Must visit for all the students
              who are interested to get jobs!</p>
            <div className="tes_img">
              <img src={require ('./img/i11.jpg')}></img>
              <p className="name">Nilay Rabadiya</p>
              <p className="ceo">CEO @ Techtical Solution</p>
            </div>
          </div>
          <div className="side_img flex">
            <img src={require ('./img/i13.jpg')} style={{objectFit:"cover", width:"90%"}}></img>
          </div>
        </div>
      </div>
    </section>

 {/* Why Choose Creative */}
 <div className="creative_info">
      <div class="container">
      <div className="single_ser">
                <p class="first_title">
                {/* <hr className="line"></hr> */}
                READ OUR DIFFERENCE
                </p>
                <h3 class="sec_title">
                WHY CHOOSE CREATIVE
                </h3>
            </div>
          <div class='only_creative'>
              {
                read_our.map((ele, ind) => {
                  return (
                    <div key={ind}>
                      <h1>{ele.icon}</h1>
                      <h3>{ele.name}</h3>
                      <p>{ele.pragraph}</p>
                    </div>
                  )
                })
              }
          </div>
      </div> 
    </div>
    
    {/* student info */}
    <div class="student_info">
      <div class="container">
        <div class="student-head">
        <div className="single_ser">
                <p class="first_title">
                STUDENT PLACEMENT
                </p>
                {/* <h3 class="our_title">
                OUR RECRUITMENT PARTNERS
                </h3> */}
            </div>
              <div>
                  <OwlCarousel className="owl-theme" items={5} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
                      {
                          stu_place.map((ele) => {
                          return (
                              <img src={ele.img}></img>
                          )
                        })
                      }
                  </OwlCarousel>
              </div>
        </div>

        {/*our button */}
        <div className="demand">
          <p className="our_info">Our Demanded Course -</p>
          <div className="parent_btn">
             <div className="btn3">
                {
                    our_course.map((ele, ind) => {
                      return (
                        <div key={ind}>
                          <p class="down_button">{ele.pra}</p>
                        </div>
                        
                      )
                  })
                }
              </div>
              
            <p className="show">Show More</p>
          </div>
        </div>
      </div>
    </div>

    {/*Footer  */}
    <footer>
    <section>
        <div className="main_table flex">
          <div className="single_table1 flex">
            <div className="part_1">
              <img src={require ('./img/f_logo.SVG')}></img>
              <p className="logo_text">Creative Design and Multimedia Institute is leading computer training 
                institute in surat. We offers government approved computer training courses in Surat.</p>
              <p className="logo_text1">FOLLOW US ON</p>
              <h2 className="down_icon">  
              <i>
                {
                    icon_bar.map((ele)=>{
                          return(
                               <li>{ele.ico}</li>
                          )
                     })
                }
              </i>
          </h2>
          </div>
        </div>

        <div className="single_table2 flex">
            <div className="part_2">
              <p className="main_f">FEATURE LINKS</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> About Us</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Blogs</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Join Us</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Company Login</p>
              <p className="simple_text"><FaHandPointRight></FaHandPointRight> Certificate Verification</p>
          </div>
        </div>

        <div className="single_table3 flex">
            <div className="part_3">
              <p className="add_info">CONTACT US</p>
              <p className="office">HEAD OFFICE - YOGICHOWK</p>
              <p className="address">401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p className="simple_mo">Mo :<p className="number">+91 90333 16003</p></p>
              <p className="other">OTHER BRANCHES</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Katargam</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Mota Varachha</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Adajan</p>
              <p className="simple_text3"><MdLocationCity></MdLocationCity> Navsari</p>
          </div>
        </div>
      </div>
    </section>
</footer>
    </header>   
  )
}
export default App;