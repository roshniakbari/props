import logo from './logo.svg';
import './App.css';

import './App.css';
import {Card} from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { FaCertificate } from "react-icons/fa6";
import { FaFacebookF , FaTwitter , FaLinkedin , FaWhatsapp , FaStar, FaHandPointRight  } from "react-icons/fa";
import { TiSocialGooglePlus , TiSocialInstagram } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";

import myimg1 from './img/i1.SVG';
import myimg2 from './img/i2.jpg';
import myimg3 from './img/i3.jpg';
import myimg4 from './img/i4.jpg';
import myimg5 from './img/i5.jpg';
import myimg6 from './img/i6.jpg';
import myimg7 from './img/i7.jpg';
import myimg8 from './img/i8.jpg';
import myimg9 from './img/i9.jpg';
import myimg10 from './img/f_logo.SVG';

function Home(props){
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
            
            <div className="right_social flex">
              <p className="r_icon"><FaFacebookF></FaFacebookF></p>
              <p className="r_icon"><FaTwitter></FaTwitter></p>
              <p className="r_icon"><TiSocialGooglePlus></TiSocialGooglePlus></p>
              <p className="r_icon"><FaLinkedin></FaLinkedin></p>
              <p className="r_icon"><TiSocialInstagram></TiSocialInstagram></p>
              <p className="r_icon"><AiOutlineYoutube></AiOutlineYoutube></p>
              <p className="r_icon"><FaWhatsapp></FaWhatsapp></p>
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
              <ul>
                {/* <li className="single_menu"><a>HOME</a></li>
                <li className="single_menu">COURSES</li>
                <li className="single_menu">ACTIVITIES</li>
                <li className="single_menu">BLOG</li>
                <li className="single_menu">KONW US</li>
                <li className="single_menu">GET IN TOUCH</li>
                <li className="single_menu">STUDENT ZONE</li> */}
                {/* <li> */}
                {
                    props.ar.map((ele)=>{
                        return(
                            <li>{ele}</li>
                        )
                    })
                } 
                {/* </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>

    {/* slider */}
      <div className="img_1">
        <img src={require ('./img/i2.jpg')}></img>
      </div>

    {/* title-1 */}
      <section>
        <div className="container">
          <div className="main_title">
            <p className="title_1">CREATIVE COURSE</p>
            <p className="dark_text">OFFERED COURSES</p>
          </div>
        </div>
      </section>

    {/* service */}
      <section>
        <div className="container">
          <div className="main_ser flex">
            <div className="single_ser flex">
              {/* <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i3.jpg')}></img>
                  <div className="back_white">
                    <a>Development Courses</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i4.jpg')}></img>
                  <div className="back_white">
                    <a>Design Courses</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i5.jpg')}></img>
                  <div className="back_white">
                    <a>Programming IT</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* {
                arr_obj.map((ele,ind)=>{
                    return(
                        <Card key={ind} style={{ width: '18rem' }}>
                          <Card.Img variant='top' src={require ('./img/i3.jpg')} style={{width:"110%",borderRadius:"10px"}}/>
                        <Card.Body src={logo}>
                          <h1>Development Courses</h1>
                          <Card.Subtitle>{ele.name}</Card.Subtitle>
                          <Card.Text>
                            {ele.duration}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )
                })
            } */}

            </div>
          </div>
          <div className="main_ser flex">
            <div className="single_ser flex">
              {/* <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i6.jpg')}></img>
                  <div className="back_white">
                    <a>Trendy Courses</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i7.jpg')}></img>
                  <div className="back_white">
                    <a>Civil-Mech. Engineering</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="ser_img">
                  <img src={require ('./img/i8.jpg')}></img>
                  <div className="back_white">
                    <a>Business Development</a>
                    <div className="line">
                      <hr></hr>
                    </div>
                    <div className="down_text flex">
                      <p className="star"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar></p>
                      <button className="blue_btn">Know More..!</button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* {
                arr_obj.map((ele,ind)=>{
                    return(
                      <Card key={ind} style={{ width: '18rem' }}>
                      <Card.Img variant='top' src={require ('./img/i3.jpg')} style={{width:"110%",borderRadius:"10px"}}/>
                    <Card.Body src={logo}>
                      <h1>Development Courses</h1>
                      <Card.Subtitle>{ele.name}</Card.Subtitle>
                      <Card.Text>
                        {ele.duration}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    )
                })
              } */}
            </div>
          </div>
        </div>

        <div className="button1">
          <button className="btn btn1">View All Courses<GoArrowRight></GoArrowRight></button>
        </div>
      </section>

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
                <button className="btn btn2">Enrtoll Now..!</button>
              </div>
          </div>
          <div className="right_img flex">
              <img src={require ('./img/i9.jpg')}></img>      
          </div>
        </div>
    </section>

    {/* 4 icon */}
    <section>
      <div className="count1">
        <img src={require ('./img/i10.jpg')}></img>
      </div>

      <div className="container">
        <div className="count_icon flex">
          <div className="flex">
            <div className="count_img">
              <img src={require ('./img/i20.png')}></img>
              <p className="count">18000+</p>
              <p className="count_text">HAPPY STUDENTS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i21.png')}></img>
              <p className="count">10+</p>
              <p className="count_text">CERTIFICATION APPROVAL</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i22.png')}></img>
              <p className="count">100+</p>
              <p className="count_text">CERTIFIED TEACHERS</p>
            </div>
            <div className="count_img">
              <img src={require ('./img/i23.png')}></img>
              <p className="count">12000+</p>
              <p className="count_text">STUDENTS PLACED</p>
            </div>  
          </div>
        </div>
      </div>
    </section>

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

    {/* title-2 */}
      <section>
        <div className="container">
          <div className="main_title">
            <p className="title_1">READ OUR DIFFERENCE</p>
            <p className="dark_text">WHY CHOOSE CREATIVE</p>
          </div>
        </div>
      </section>

  {/* card */}
  <section className="spacer">
    <div className="container">
        <div className="main_filp">
            <div className="single_filp">
                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                          <div className="f_box1"><img src={require ('./img/1.png')}></img></div>
                            <h1 className="front_title">Industry Experts As Trainers</h1>
                            <p className="front_text">Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>   
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="f_box2"><img src={require ('./img/2.png')}></img></div>
                            <h1 className="front_title">Latest Curriculum</h1>
                            <p className="front_text">We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="f_box3"><img src={require ('./img/3.png')}></img></div>
                            <h1 className="front_title">Latest Technology</h1>
                            <p className="front_text">We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="main_filp-2">
            <div className="single_filp">
                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="f_box4"><img src={require ('./img/4.png')}></img></div>
                            <h1 className="front_title">Interview Assistance</h1>
                            <p className="front_text">At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>  
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="f_box5"><img src={require ('./img/5.png')}></img></div>
                            <h1 className="front_title">Free Upgradation</h1>
                            <p className="front_text">We will be provided free upgradation for any newer version of the course you have.</p>
                        </div>
                    </div> 
                </div>

                <div className="card">
                    <div className="inner-box">
                        <div className="front_box">
                        <div className="f_box6"><img src={require ('./img/6.png')}></img></div>
                            <h1 className="front_title">Lifetime Support</h1>
                            <p className="front_text">We will provide you lifetime support on all the courses you learned from us.</p>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div>
    </div>
</section>

{/* title3 */}
    <section>
        <div className="container">
          <div className="main_title">
            <p className="title_1">STUDENT PLACEMENT</p>
            <p className="dark_text">OUR RECRUITMENT PARTNERS</p>
          </div>
        </div>
    </section>

{/* logo slider */}
<section>
  <div className="container">
    <div className=" flex">
      <div className="logo1">
        <img src={require ('./img/i14.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i15.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i16.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i17.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i18.png')}></img>
      </div>
      <div className="logo1">
        <img src={require ('./img/i19.png')}></img>
      </div>
    </div>
  </div>
</section>

{/* button  */}
      <section>
        <div className="container">
          <div className="top_logo">
            <div className="main_button">
              <div className="btn_title">
                <p className="btn_text">Our Demanded Course -</p>
              </div>

              <div className="btn_1">
                <button className="button">3ds max training institute in surat</button>
                <button className="button">Photoshop training institute in surat</button>
                <button className="button">Blender 3d design course institute</button>
                <button className="button">Angular js training institute in surat</button>
                <button className="button">Unity 3d training institute in Mota Varachha</button>
                <button className="button">nodejs training institute in surat</button>
                <button className="button">Angular js training institute in varachha</button>
                <button className="button">It training institute in surat</button>
                <button className="button">Civil engineering training institute</button>
                <button className="button">coreldraw training institute</button>
                <button className="button">Illustrator training institute in surat</button>
                <button className="button">Best Autocad training institute</button>
                <button className="button">Advance Laravel training institute in surat</button>
                <button className="button">Photoshop training institute in varachha</button>
                <button className="button">Google sketchup training institute in katargam</button>
                <button className="button">Best Creo parametrics training institute</button>
                <button className="button">PHP training institute in varachha</button>
                <button className="button">Learn animation course</button>
                <p className="show">Show More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* footer */}

<footer>
    <section>
        <div className="main_table flex">
          <div className="single_table1 flex">
            <div className="part_1">
              <img src={require ('./img/f_logo.SVG')}></img>
              <p className="logo_text">Creative Design and Multimedia Institute is leading computer training 
                institute in surat. We offers government approved computer training courses in Surat.</p>
              <p className="logo_text1">FOLLOW US ON</p>
              <div className="main_logo1 flex">
                <p className="side_logo"><FaFacebookF></FaFacebookF></p>
                <p className="side_logo"><FaTwitter></FaTwitter></p>
                <p className="side_logo"><TiSocialGooglePlus></TiSocialGooglePlus></p>
                <p className="side_logo"><FaLinkedin></FaLinkedin></p>
                <p className="side_logo"><TiSocialInstagram></TiSocialInstagram></p>
                <p className="side_logo"><AiOutlineYoutube></AiOutlineYoutube></p>
                <p className="side_logo"><FaWhatsapp></FaWhatsapp></p>
            </div>
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

{/* last footer */}
<section>
    <div className="last">
      <div className="last_1">
      <div className="container">
      <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
      </div>
    </div>
  </div>
</section>

    </header>   
  )
}
export default Home
