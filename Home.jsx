import React from "react";
import { NavLink } from "react-router-dom";
import img from "./quitting.jpeg";
import img1 from "./attention.jpg";
import img2 from "./time.jpeg";
import img3 from "./silence.jpeg";
import img4 from "./comfortzone.jpeg";
import img5 from "./decision.jpeg";
import img6 from "./img.jfif";

const Home = () =>{
    return (
        <>
          <div className="container-fluid d-flex" id="header">
             <div className="row">
               <div className="col-10 mx-auto">
               <div className="row">

                <div className="col-md-4">
               
                </div>

               <div className="text col-md-8 pt-5">
                  <h1>TRUE LIGHTS OF LIFE</h1>
                  <p className="mt-3">This is a blog that tells you about all the essentials of
                   life which we forget to apply in our life. Each of the blogs
                    will take you where you want to go and will help to stay motivated
                     in your whole life journey…..</p>
                </div>   

                
                </div>  
               </div>            
             </div>
          </div>









          <div className="container-fluid d-flex ">
          <div className="row">
            <div className="col-10 mx-auto ">
            <h1 className="mt-5 text-center">BLOGS</h1>

            <div className="row mt-5 row1">


                 <div className="col-md-3">
                   <img src={img} alt="quitting"/>
                 </div>

                 <div className="col-md-5">
                   <h3>Quitting is not always wrong</h3>
                   <p>We always considering Quitting as a failure or looser.
                    Because we grew up as listening and understanding like this.
                    Sometimes, we considered it as losing confidence, Fear, Discomfort,
                    and Unrealistic Experiences and there are other people also, who
                    take it as a negative.....</p>

                 <NavLink to=""><input type="button" value="Read More"
                  class="btn btn-success"/></NavLink>

                 </div>
               </div>

   
                  
               <div className="row mt-5 row1">

                <div className="col-md-3">
                <img src={img1} alt="Attention"/>
                </div>

                <div className="col-md-5">
                <h3>What Should We Pay The Most Attention ?</h3>
                <p>When it comes to paying attention. Most of the people already ruin
                 their minds by thinking of irrelevant matters, that doesn’t benefit
                them even later, it makes noise. Apart from working and earning
                money, we kept our mind very busy by focusing on useless things......</p>

                <NavLink to=""><input type="button" value="Read More"
                class="btn btn-success"/></NavLink>

                </div>
                </div>



                <div className="row mt-5 row1">

                <div className="col-md-3">
                <img src={img2} alt="time"/>
                </div>

                <div className="col-md-5">
                <h3>There is a Time For Everything</h3>
                <p>We are not what we were before. Our food, fashion, lifestyle, from
                 infancy to adultness, from schools to colleges, & then a job, everything
                has changed. We can’t expect anything to remain unchanged. Even our body,
                 friends, family, plants.....</p>

                <NavLink to="/contact"><input type="button" value="Read More"
                class="btn btn-success"/></NavLink>

                </div>
                </div>


                <div className="row mt-5 row1">

                <div className="col-md-3">
                <img src={img3} alt="silence"/>
                </div>

                <div className="col-md-5">
                <h3>Does Silence Affects The Brain ?</h3>
                <p>The World has become noisier than it already is and there are lots of
                 Rush in social media or in our daily activities. We are surrounded by a
                lot of information that, if we ever try to remember them, we cannot
                remember for long. Have you ever felt that you should go to a place ....</p>

                <NavLink to=""><input type="button" value="Read More"
                class="btn btn-success"/></NavLink>

                </div>
                </div>




                <div className="row mt-5 row1">

                <div className="col-md-3">
                <img src={img4} alt="comfort"/>
                </div>

                <div className="col-md-5">
                <h3>Why it is Difficult to get out of the Comfort Zone ?</h3>
                <p>At an early age, we decide to achieve big dreams. At that time,
                 we are not aware of how much failure or success that we can face.
                 But soon when the time is right, we have to work hard to achieve our.....</p>

                <NavLink to=""><input type="button" value="Read More"
                class="btn btn-success"/></NavLink>

                </div>
                </div>




                <div className="row mt-5 row1">

                <div className="col-md-3">
                <img src={img5} alt="decision"/>
                </div>

                <div className="col-md-5">
                <h3>Does Intuition Help Us To make Better Decisions ?</h3>
                <p>As we are thinking all the time. There are lots of good
                and bad ideas that arise in our minds. Sometimes we feel like,
                we should share these ideas with others or ask others about what to do.....</p>

                <NavLink to=""><input type="button" value="Read More"
                class="btn btn-success"/></NavLink>

                </div>
                </div>
             
               </div>
            </div>
          </div>
        

        </>
    );
};

export default Home;