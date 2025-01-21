import logoImage from '../Images/Layer_1.png'
import pic1 from '../Images/Vector (2).png'
import pic2 from '../Images/Vector (1).png'
import card1 from '../Images/card1.png'
import card2 from '../Images/card2.png'
import card3 from '../Images/card3.png'
import card4 from '../Images/card4.png'
import b3 from '../Images/b3.png'
import b3a from '../Images/b3a.png'
import b3b from '../Images/b3b.png'
import hot1 from '../Images/hot1.png'
import hot2 from '../Images/hot2.png'
import hot3 from '../Images/hot3.png'
import hot4 from '../Images/hot4.png'
import hot5 from '../Images/hot5.png'
import hot6 from '../Images/hot6.png'
import woman1 from '../Images/ll1 (1).png'
import bg1 from '../Images/bg1.png'
import hum1 from '../Images/human1.jpg'
import hum2 from '../Images/human2.jpg'
import hum3 from '../Images/human3.jpg'
import hum4 from '../Images/human4.jpg'
import hum5 from '../Images/human5.png'
import hum6 from '../Images/human6.jpg'
import hum7 from '../Images/human7.jpg'
import hum8 from '../Images/human8.jpg'
import hum9 from '../Images/human9.jpg'
import hum10 from '../Images/human10.jpg'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.png'
import logo4 from '../Images/logo4.png'
import logo5 from '../Images/logo5.png'
import logo6 from '../Images/logo6.png'
import logo7 from '../Images/logo7.png'
import m1 from '../Images/m1.png'
import m2 from '../Images/m2.png'
import m3 from '../Images/m3.png'
import Message from '../Message/Message'
import footerImg from '../Images/fotter.png'
import footerlogo1 from '../Images/footer (1).png'
import footerlogo2 from '../Images/footer (2).png'
import footerlogo3 from '../Images/footer (3).png'
import footerlogo4 from '../Images/footer (4).png'



const Home = () => {
    return (
        <div>

{/* banner 1 starts here  */}
            <div className="bg-background-color   pt-6 h-hh2 md:h-hh3  lg:h-hh">
                
                <div className='px-5 md:px-20 md:flex lg:flex items-center justify-between'>
                <div className='pl-7 md:pl-0 lg:pl-0 p-1'>
                <img src= {logoImage} alt="" />
                </div>

            <div className='flex text-white gap-2 pt-3 md:pt-0 md:gap-6 lg:gap-7 font-bold banner1'>
                <div>HOME</div>
                <div>PAGE</div>
                <div>PORTFOLIO</div>
                <div>SERVICE</div>
                <div>BLOGS</div>
            </div>
                </div>

                <div className=' grid md:flex justify-between   '>

                    
                    <div className='px-5 md:pl-20'>

                    <div className='text-white text-4xl leading-none md:leading-none xl:leading-line-h md:text-5xl lg:text-6xl xl:text-8xl font-bold banner1 pt-5 md:pt-10 lg:pt-12'>
                    ELEVATING <br /> BRANDS WITH <br /> <span className='text-red-color'>CREATIVE WEB </span> <br />DESIGN
                    </div>

                    <div className=' lg:flex items-center lg:gap-24 xl:gap-32'>

                    <div className='text-white pt-3 md:pt-10 banner1 text-xs md:text-lg   xl:text-xl'>
                    Cosmara creates unique, impactful web <br /> designs that enhance your brand’s identity <br /> and engage your audience. We bring your <br /> vision to life with creativity and precision.
                    </div>

                    <div className='pt-3 md:pt-5 lg:pt-24'>
                        <button className='bg-red-color text-white lg:text-xs md: w-36 lg:w-28   banner1 px-3 md:px-2 py-2 rounded-full'>LET'S DISCUSS</button>
                    </div>

                    </div>

                    </div>

                    <div className=''>
                       <div className='relative'>
                       <img className='w-80 lg:w-3/4 md:pr-8 lg:pr-0' src= {pic1} alt="" />
                       </div>

                        <div className='absolute top-3/4 md:top-28 lg:top-40 md:right-9 lg:right-20'>
                        <img className='w-80 md:w-80 xl:w-4/5 ' src= {pic2} alt="" />

                    </div>


                    </div>






                </div>

            <div>

            </div>
            </div>

{/* banner 1 ends here */}


{/* banner 2 starts here  */}

            <div>

                <div className=' text-3xl leading-none md:leading-none md:text-5xl lg:text-6xl xl:text-7xl font-bold banner1 pt-7 md:pt-10 lg:pt-24 px-5 md:pl-20'>
                    <h1>YOUR <span className='text-red-color'>ONE-STOP <br /> SOLUTION</span> FOR WEB <br />EXCELLENCE</h1>
                </div>

                <div className='pt-3 pl-5 px-10 md:pl-20 xl:pl-20 md:pt-10 banner1 text-xs md:text-xl  xl:text-xl max-w-80 md:max-w-www xl:max-w-www2 '>
                    <h1>Cosmara delivers everything from web development to SEO, branding, and digital product design — your all-in-one solution for a standout online presence.</h1>
                </div>

                <div className=' grid md:flex items-center justify-center gap-5 lg:gap-24 md:gap-4 px-10 md:px-20 pt-12'>

                    <div>
                        <img src= {card1} alt="" />
                    </div>
                    <div>
                        <img src= {card2} alt="" />
                    </div>
                    <div>
                        <img src= {card3} alt="" />
                    </div>
                    <div>
                        <img src= {card4} alt="" />
                    </div>

                </div>




            </div>

{/* banner 2 end here */}

{/* banners 3 starts here  */}

        <div className=' md:flex items-center justify-between'>

            <div className='w-52 md:w-96 mt-20 md:mt-36 relative'>
                <img src= {b3} alt="" />

                
            <div className='absolute -inset-5  md:-inset-8 left-32 md:left-64 '>
                <img src= {b3a} alt="" />
            </div>
            <div className='absolute -inset-5 md:-inset-10 left-32 md:left-64 '>
                <img src= {b3b} alt="" />
            </div>

            </div>

            <div className=' '>
                <div className='text-3xl leading-none md:leading-none md:text-5xl lg:text-6xl xl:text-7xl font-bold banner1 pt-7 md:pt-10 lg:pt-24 px-10 lg:pr-72 '>
                    <h1>TURNING <br /> <span className='text-red-color'>IDEAS</span> INTO <br /> <span className='text-red-color'>DIGITAL</span> <br /> EXPERIENCES</h1>
                </div>

                <div  className=' md:max-w-80 lg:max-w-www3 banner1 pt-8 px-10 text-xs md:text-xs lg:text-sm'>
                    <p>At Cosmara, we are passionate about crafting custom web design solutions that help brands stand out in the digital landscape. Our approach combines creativity, innovation, and technical expertise to deliver websites that not only look great but also perform <br /> seamlessly.</p>

                    <p>
                    <br />
                    With a focus on user experience and brand storytelling, we collaborate closely with our clients to understand their vision and translate it into a digital experience that drives results. Whether you're building your brand from the ground up or looking to refresh your online presence, Cosmara is your partner in bringing design ideas to life.
                    </p>
                </div>

                

            </div>





        </div>

{/* banner 3 ends here */}

{/* banner 4 starts here */}

            <div>

                <div className='text-3xl leading-none md:leading-none md:text-5xl lg:text-6xl xl:text-7xl font-bold banner1 pt-7 md:pt-10 lg:pt-24 px-5 md:pl-20'>
                    <p> <span className='text-red-color'>INNOVATIONS</span> <br />  WERE PROUD OF</p>
                </div>



            </div>

            <br />
            <div className=' pl-6  grid grid-cols-2  gap-1 md:flex pt-3 md:pt-0 md:gap-6 lg:gap-7 font-bold banner1 md:pl-20 text-xs lg:text-sm '>
                
                <div className='text-red-color'>ALL</div>
                <div>WEB DEVELOPMENT</div>
                <div>DESIGN AND BRANDING</div>
                <div>DIGITAL PRODUCT DESIGN</div>
                <div>SEO OPTIMIZATION</div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 px-4 md:px-20 gap-6'>



            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot1} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>WEB DEVELOPMENT</p>
                    <p className='text-sm md:text-lg'>WEBSITE FOR SANMAR</p>
                    </div>

                </div>
            </div>

            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot2} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>DIGITAL PRODUCT DESIGN</p>
                    <p className='text-sm md:text-lg'>APPLICATION FOR REEL STAR</p>
                    </div>

                </div>
            </div>

            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot3} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>DESIGN AND BRANDING</p>
                    <p className='text-sm md:text-lg'>IZ CAFE SOCIAL MEDIA POST</p>
                    </div>

                </div>
            </div>

            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot4} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>SEO OPTIMIZATION</p>
                    <p className='text-sm md:text-lg'>MOBIL BANGLADESH</p>
                    </div>

                </div>
            </div>

            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot5} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>DESIGN AND BRANDING</p>
                    <p className='text-sm md:text-lg'>SUNDARAM TILES</p>
                    </div>

                </div>
            </div>

            <div className='pt-5 md:pt-7'>
                <div  >
                    <img src= {hot6} alt="" />
                    <div className='banner1 font-bold pt-4'>
                    <p className='text-red-color text-xs lg:text-sm '>WEB DEVELOPMENT</p>
                    <p className='text-sm md:text-lg'>WEBSITE FOR TRADE</p>
                    </div>

                </div>
            </div>













            </div>

{/* banner 4 ends here */}

{/* banner 5 starts here */}

            <div className='bg-background-color2 lg:h-h1 mt-20 '>

                <div className='text-3xl leading-none md:leading-none  md:text-5xl lg:text-6xl xl:text-7xl font-bold banner1 pt-7 md:pt-10 lg:pt-24 px-5 pl-16 md:pl-64  xl:pl-96 lg:ml-24'>
                    <p>VOICES OF <span className='text-red-color'>TRUST</span></p>
                </div>

                <div className='md:flex items-center justify-center pt-14 md:pl-44'>
                <div className='md:w-ww2'>
                    <img src= {woman1} alt="" />
                </div>

                <div className='md:max-w-80 lg:max-w-www4 banner1 pt-8 px-10 text-xs md:text-xs lg:text-sm'>
                    <p>Working with Cosmara was a game-changer for our brand. Their web development and design expertise brought our vision to life, creating a website that not only looks amazing but also performs flawlessly. The team’s attention to detail and dedication to delivering results were evident every step of the way. We couldn't be happier with the outcome!</p>
                </div>
                </div>


            </div>

{/* banner 5 ends here */}

{/* banner 6 starts here  */}

            <div className='bg-cover h-40 md:h-hh4 mt-8' style={{backgroundImage: `url(${bg1})`}}>
                <p className='text-white text-3xl leading-none md:leading-none xl:leading-line-h md:text-5xl lg:text-6xl xl:text-8xl font-bold banner1 pt-36 md:pt-96 pl-20'> THE HEART <br /> OF <span className='text-red-color'>COSMARA</span></p>
            </div>

            <div className='bg-background-color h-hh5'>

<div>
                    <div className='md:pl-80 xl:pl-pp1 pt-20 md:pt-32'>
                <p className='text-white md:max-w-96 lg:max-w-www5 banner1 pt-8 px-10 text-xs md:text-xs lg:text-sm'>Our talented team of designers and developers collaborates to transform ideas into exceptional digital experiences.</p>

                <br />
                <p className='text-white md:max-w-96 lg:max-w-www5 banner1 pt-8 px-10 text-xs md:text-xs lg:text-sm'>
                With a passion for innovation and a commitment to quality, we work together to elevate your brand and deliver impactful results.</p>
                </div>
</div>


            <div className='grid grid-cols-2 md:flex pl-12 md:pl-20 gap-4 md:gap-16 lg:gap-36 xl:gap-48'>
            <div className='pt-8 md:pt-16 '>
                    <p className='text-white text-2xl leading-none md:leading-none lg:leading-line-h md:text-4xl lg:text-5xl xl:text-6xl font-bold banner1  '>1,750+</p>
                    <p className='text-white  banner1  text-xs md:text-xs lg:text-sm'>PROJECTS SUCCESSFULLY <br />DELIVERED</p>
                </div>

                <div className='pt-8 md:pt-16'>
                    <p className='text-white text-2xl leading-none md:leading-none lg:leading-line-h md:text-4xl lg:text-5xl xl:text-6xl font-bold banner1  '>1,070+</p>
                    <p className='text-white  banner1  text-xs md:text-xs lg:text-sm'>CLIENTS <br />GLOBALITY</p>
                </div>

                <div className='pt-8 md:pt-16 '>
                    <p className='text-white text-2xl leading-none md:leading-none lg:leading-line-h md:text-4xl lg:text-5xl xl:text-6xl font-bold banner1  '>12+</p>
                    <p className='text-white  banner1  text-xs md:text-xs lg:text-sm'>YEARS OF <br />DEDICATED SERVICE</p>
                </div>

                <div className='pt-8 md:pt-16 '>
                    <p className='text-white text-2xl leading-none md:leading-none lg:leading-line-h md:text-4xl lg:text-5xl xl:text-6xl font-bold banner1  '>5k</p>
                    <p className='text-white  banner1  text-xs md:text-xs lg:text-sm'>DIGITAL <br /> ASSETS</p>
                </div>
            </div>

            </div>

{/* {banner 6 ends here} */}

{/* banner 7 starts here */}

            <div>

                <div className='md:flex justify-between items-center'>

                <div>
                    <p className='text-3xl leading-none md:leading-none xl:leading-line-h md:text-5xl lg:text-6xl xl:text-8xl font-bold banner1 pt-7 md:pt-10 lg:pt-24 px-5 md:px-20'>OUR GLOBAL <br /><span className='text-red-color'>EXPERTS</span> </p>
                </div>

                <div>
                    <button className='bg-red-color text-white  banner1 px-4 md:px-8 py-2 rounded-full ml-3 md:ml-0 md:mr-20 mt-4 md:mt-20 lg:mt-44'>SHARE YOUR VISION WITH US</button>
                </div>

                </div>

                <div className='pt-4 md:pt-7 grid grid-cols-2 md:grid-cols-5 md:pl-20 px-4 md:px-14 gap-3'>

                    <div>
                        <img className='md:w-64' src= {hum1} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>James Smith</p>
                        <p className='text-xs lg:text-lg banner1'>CEO & MD</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum2} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Alexander Davis</p>
                        <p className='text-xs lg:text-lg banner1'>Senior Project Manager</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum3} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Olivia Wilson</p>
                        <p className='text-xs lg:text-lg banner1'>Project Manager</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum4} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Daniel Clark</p>
                        <p className='text-xs lg:text-lg banner1'>Development Lead</p>

                    </div>

                    <div>
                        <img className='md:w-64 h-fit' src= {hum5} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'> Emma Jones</p>
                        <p className='text-xs lg:text-lg banner1'>Head of Research & Strategy</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum6} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Benjamin Taylor</p>
                        <p className='text-xs lg:text-lg banner1'>Creative Director</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum7} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Ethan Wilson</p>
                        <p className='text-xs lg:text-lg banner1'>Head of Accounts</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum8} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Sophia Brown</p>
                        <p className='text-xs lg:text-lg banner1'>SEO Specialised </p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum9} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>Lucas Miller</p>
                        <p className='text-xs lg:text-lg banner1'>Marketing Director</p>

                    </div>

                    <div>
                        <img className='md:w-64' src= {hum10} alt="" />
                        <p className='text-sm md:text-lg lg:text-xl banner1 font-bold pt-2'>William Brown</p>
                        <p className='text-xs lg:text-lg banner1'>Design System Architect</p>

                    </div>

                </div>




            </div>

{/* {banner 7 ends here} */}

{/* banner 8 starts here */}

            <div className='bg-background-color2 h-24 md:h-56 mt-9 md:mt-20 md:px-4 lg:px-4 xl:px-20 grayscale flex justify-between items-center'>

                <div className='px-2'>
                    <img src= {logo1} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo2} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo3} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo4} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo5} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo6} alt="" />
                </div>
                <div className='px-2'>
                    <img src= {logo7} alt="" />
                </div>





            </div>

{/* banner 8 ends here */} 

{/* banner 9 starts here */}
            <div >

                <div>
                    <h1 className=' text-2xl leading-none md:leading-none md:text-4xl lg:text-6xl xl:text-7xl font-bold banner1 pl-5 md:pl-20 pt-7 lg:pt-14 xl:pt-28'>EXPLORING THE <br /> <span className='text-red-color'>DIGITAL LANDSCAPE</span></h1>

                </div>

                <div className='md:flex items-center md:gap-3 lg:gap-4 xl:gap-32'>

                    <div className='relative'>
                        <div className=' w-80 md:w-96 lg:w-ww3 px-2 md:pl-9 lg:pl-20 pt-4 md:pt-10 relative'><img className=' ' src= {m1} alt="" />
                        
                        </div>
                        

                        <div className='flex items-center gap-2 absolute left-8 md:left-24 lg:left-28 bottom-24 md:bottom-14 lg:bottom-28 '>
                            <div><button className='bg-red-color text-white lg:text-xs w-16 lg:w-20  banner1 px-3 md:px-1 py-2 rounded-full'>BLOGS</button></div>
                            <div><p className='banner1 text-white  md:text-xs font-bold'>03 MARCH 2024</p></div>
                            
                        </div>
                        <div className='absolute left-8 text-xs md:left-24  lg:left-28 bottom-14 md:bottom-5 lg:bottom-16 text-white banner1 font-bold'><p>The Benefits of Data-Driven Marketing <br /> for Agencies</p></div>
                    </div>

                <div className='px-2'>

                <div className='flex pt-8 gap-4 md:gap-6 lg:gap-6 xl:gap-14'>
                        <div>
                            <img className='  md:w-52 xl:w-56 ' src= {m2} alt="" />
                        </div>
                    
                        <div className=' ' >
                        <div className='flex items-center gap-2'>
                        <div><button className='bg-red-color text-white text-xs lg:text-xs w-14 md:w-14 lg:w-20  banner1 px-3 md:px-1 py-2 rounded-full'>BLOGS</button></div>
                        <div><p className='banner1 text-xs md:text-xs font-bold'>03 MARCH 2024</p></div>
                        </div>
                        
                        <div className='banner1 '>
                            <p className=' text-xs lg:text-sm xl:text-lg font-bold lg:max-w-64 xl:max-w-80 pt-4 md:max-w-32'>Creating a Winning Pitch: Tips for Agencies to Win Clients</p>
                            <p className='text-xs max-w-40 pt-3 md:pt-6 md:max-w-40 lg:max-w-64 xl:max-w-80'>we explore essential strategies for agencies to craft compelling pitches that resonate with potential clients. From understanding client needs to...</p>
                        </div>
                        </div>


                    </div>

                    
                    <div className='flex pt-4 md:pt-10 gap-4 md:gap-6 lg:gap-6 xl:gap-14'>
                        <div>
                            <img className=' md:w-52 xl:w-56' src= {m3} alt="" />
                        </div>
                    
                        <div >
                        <div className='flex items-center gap-2'>
                        <div><button className='bg-red-color text-white text-xs  lg:text-xs w-14 md:w-14 lg:w-20  banner1 px-3 md:px-1 py-2 rounded-full'>BLOGS</button></div>
                        <div><p className='banner1 text-xs md:text-xs font-bold'>01 Sep 2024</p></div>
                        </div>
                        
                        <div className='banner1'>
                            <p className=' text-xs  lg:text-sm xl:text-lg font-bold lg:max-w-64 xl:max-w-80 pt-4 md:max-w-32'>How to Choose the Right Clientele for Your Agency’s Growth</p>
                            <p className='text-xs max-w-40 pt-3 md:pt-6 md:max-w-40 lg:max-w-64 xl:max-w-80 '>Learn how to identify ideal clients that align with your values and expertise, assess their potential for long-term partnerships, and evaluate their compatibility...</p>
                        </div>
                        </div>


                    </div>

                </div>

                </div>

                
                <div>
                    <button className='bg-red-color text-white  banner1 px-4 md:px-8 py-2 rounded-full ml-3 md:ml-8  lg:ml-20 mt-4 md:mt-4 lg:mt-8 '>EXPLORE ALL BLOGS</button>
                </div>
                


            </div>

{/* banner 9 ends here */}

{/* message section starts here */}
            <div>
                <Message></Message>
            </div>
{/* ends */}

{/* footer starts here */}

            <div className='bg-black '>
                <img className='w-full py-10'  src= {footerImg} alt="" />
                <hr />

                <div className='flex items-center justify-between px-3 md:px-20'>
                <div className=' banner1 text-xs md:text-sm py-5'>
                <p className='text-gray-400'>We’re excited to hear from you.</p>
                <p className='font-bold text-xs md:text-4xl text-white '>info@cosmara.com</p>
            </div>

            <div className='flex gap-2 md:gap-5'>

                <div>
                    <img src= {footerlogo1} alt="" />
                </div>
                <div>
                    <img src= {footerlogo2} alt="" />
                </div>
                <div>
                    <img src= {footerlogo3} alt="" />
                </div>
                <div>
                    <img src= {footerlogo4} alt="" />
                </div>



            </div>

              


                </div>

                    <div className='flex items-center mx-4 md:mx-20 md:gap-32 lg:gap-96'>
                    <div className='banner1 text-gray-400'>
                    <p>USA Office</p>
                    <p>789 Maple Street, Cityville, <br />
                    USA 67890</p>
                    <p>+1 (555) 123-4567</p>
                </div>

                <div className='flex items-center text-gray-400 gap-5'>

                    <div><p>Important Links</p>
                    <p>About Us</p>
                    <p>Out Team</p>
                    <p>Service</p>
                    <p>FAQs</p>
                    </div>

                    <div>
                        <p>Misc</p>
                        <p>Error 404</p>
                        <p>Coming Soon</p>
                        <p>Maintenance</p>

                    </div>
                </div>
                    </div>

                    <hr className='mx-20 mt-7'/>

                    <div>
                        <p className='text-gray-400 mx-4 md:mx-20'>
                        © 2024 Universia is Made by Dcastalia. <br />
                        Universia Multipurpose Website Template
                        

                        </p>
                    </div>
                    

            </div>


            
        















          
        </div>
    );
};

export default Home;