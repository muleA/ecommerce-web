/* import Slider from 'react-slick';
 */ import { useAuth } from "../shared/auth/use-auth";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import Report from "./report";
import { CustomerReviews } from "../shared/review";
import { RightSideImage } from "../shared/right-side-svg";

export default function Carousel() {
  const { session } = useAuth();
  const router = useNavigate();
  const sliderSettings = {
    className: "left-0 right-0",
    variableWidth: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <>
      {!session && (
        <div
          className={`relative mb-2 hidden w-full overflow-hidden  mx-auto  overflow-hidden bg-gradient-to-l from-sky-300 to-sky-50  md:block`}
        >
         {/*  <div className="absolute left-0">
                       <img src="./assets/images/left-hero.png" alt="img" />
             
          </div>
          <div className="absolute right-0 ">
                    <img src="./assets/img/left-hero.png" alt="img" />
             
          </div> */}
          {/*           <Slider {...sliderSettings}>
           */}{" "}
          <div className="mx-auto mx-36 overflow-hidden" >
            <div className="flex h-96  w-full items-start justify-between">
              <div className="mt-2 ml-10 flex h-full w-6/12 items-center lg:mt-6">
                <div style={{ fontFamily: "Raleway" }}>
                  <p className="my-2 text-center text-2xl font-semibold leading-snug tracking-normal text-sky-700 md:text-left md:text-2xl lg:text-left lg:text-3xl">
                    Welcome to Liyu Restaurants Management System
                  </p>
                  <p
                    className="leading-wider my-6 text-center font-normal tracking-normal text-gray-500 md:text-left 
                    md:text-lg lg:mr-12 lg:mr-4"
                  >
                  

Are you a restaurant owner looking to expand your reach and connect 
with customers online? Look no further! Liyu Restaurants management System is here to help you take your business to new heights.
 Join our platform and start accepting online orders today!
                  </p>
                  <div className="flex space-x-3 mb-4 ">
                    <Button
                      className="bg-primary hover:text-white text-white"
                      onClick={() => router("/account")}
                    >
                      Sign up
                    </Button>
                    <Button className="bg-primary hover:text-white text-white">Get Started</Button>
                  </div>
                </div>
              </div>
              <div className="mx-2 mt-2 overflow-hidden flex h-full w-6/12 items-center justify-end lg:mt-6">
              <RightSideImage/>
              </div>
            </div>
          </div>
          <div></div>
          {/*           </Slider>
           */}{" "}
        </div>
      )}
 
      {!session && (
        <div className="mt-8 mb-8 grid w-full mx-6 grid-cols-2 items-center gap-1 py-2 pr-2 text-sm  lg:flex lg:justify-evenly lg:space-x-2 lg:px-4 ">
          <Report
            className="group ml-2 min-w-full self-center rounded-tl-lg bg-primary px-3 md:ml-0 md:min-w-fit md:bg-white lg:rounded-lg lg:hover:bg-primary lg:hover:shadow-2xl lg:hover:shadow-primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 fill-current  text-white md:text-primary lg:group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <path d="M24 2C11.863281 2 2 11.863281 2 24C2 36.136719 11.863281 46 24 46C26.058594 46 28.070313 45.703125 30 45.15625L30 41.296875C28.503906 42.742188 26.808594 43.667969 25 43.921875L25 36L30 36L30 34L25 34L25 25L30 25L30 23L25 23L25 14L34.371094 14C35.265625 16.582031 35.832031 19.519531 35.957031 22.660156L37 23.640625L37.988281 24.5625L38.453125 25L43.964844 25C43.886719 26.527344 43.644531 28.027344 43.230469 29.480469L44.847656 30.996094C45.601563 28.757813 46 26.40625 46 24C46 11.863281 36.136719 2 24 2 Z M 23 4.082031L23 12L14.441406 12C14.816406 11.175781 15.214844 10.390625 15.65625 9.679688C17.652344 6.457031 20.226563 4.472656 23 4.082031 Z M 25 4.082031C28.503906 4.566406 31.578125 7.566406 33.578125 12L25 12 Z M 31.5 5.453125C34.898438 6.828125 37.820313 9.113281 39.988281 12L35.71875 12C34.625 9.371094 33.183594 7.140625 31.5 5.453125 Z M 16.425781 5.492188C15.523438 6.402344 14.6875 7.445313 13.957031 8.625C13.316406 9.660156 12.746094 10.792969 12.25 12L8.019531 12C10.171875 9.136719 13.0625 6.867188 16.425781 5.492188 Z M 6.691406 14L11.519531 14C10.640625 16.726563 10.121094 19.773438 10.03125 23L4.023438 23C4.1875 19.726563 5.144531 16.671875 6.691406 14 Z M 13.636719 14L23 14L23 23L12.03125 23C12.128906 19.726563 12.699219 16.664063 13.636719 14 Z M 36.453125 14L41.324219 14C42.867188 16.671875 43.8125 19.730469 43.972656 23L37.96875 23C37.875 19.769531 37.34375 16.722656 36.453125 14 Z M 4.023438 25L10.03125 25C10.121094 28.226563 10.640625 31.273438 11.519531 34L6.691406 34C5.144531 31.328125 4.1875 28.273438 4.023438 25 Z M 12.03125 25L23 25L23 34L13.636719 34C12.699219 31.335938 12.128906 28.273438 12.03125 25 Z M 33.953125 25C33.421875 25.027344 33 25.464844 33 26L33 45.25C33 45.65625 33.242188 46.019531 33.617188 46.171875C33.992188 46.328125 34.421875 46.242188 34.707031 45.957031L37.71875 42.941406L40.230469 48.417969C40.460938 48.917969 41.054688 49.136719 41.558594 48.90625L45.417969 47.140625C45.917969 46.910156 46.136719 46.316406 45.90625 45.8125L43.300781 40.125L48 40.125C48.410156 40.125 48.78125 39.875 48.929688 39.492188C49.082031 39.109375 48.984375 38.675781 48.683594 38.394531L34.683594 25.269531C34.484375 25.085938 34.222656 24.988281 33.953125 25 Z M 35 28.308594L45.46875 38.125L41.875 38.125C41.71875 38.125 41.566406 38.160156 41.425781 38.230469L41.320313 38.285156C40.839844 38.527344 40.632813 39.105469 40.859375 39.59375L43.671875 45.734375L41.628906 46.671875L38.9375 40.800781C38.804688 40.503906 38.527344 40.292969 38.207031 40.234375C37.882813 40.175781 37.554688 40.28125 37.324219 40.515625L35 42.835938 Z M 8.019531 36L12.25 36C12.746094 37.207031 13.316406 38.339844 13.957031 39.375C14.6875 40.554688 15.523438 41.597656 16.425781 42.507813C13.0625 41.132813 10.171875 38.863281 8.019531 36 Z M 14.441406 36L23 36L23 43.917969C20.226563 43.527344 17.652344 41.542969 15.65625 38.324219C15.214844 37.609375 14.816406 36.824219 14.441406 36Z"></path>
              </svg>
            }
            number={111255}
            text="Registered Restaurants"
          />
       {/*    <Report
            className="group ml-2 min-w-full self-center rounded-tr-lg bg-primary px-3 md:bg-white lg:ml-0 lg:min-w-fit lg:rounded-lg lg:hover:bg-primary lg:hover:shadow-2xl lg:hover:shadow-primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 fill-current text-white md:text-primary lg:group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <path d="M12 0C10.90625 0 10 0.90625 10 2L10 22C10 23.09375 10.90625 24 12 24L42 24C43.09375 24 44 23.09375 44 22L44 2C44 0.90625 43.09375 0 42 0 Z M 12 2L42 2L42 22L12 22 Z M 22.5 4C21.132813 4 20 5.132813 20 6.5C20 7.867188 21.132813 9 22.5 9L31.5 9C32.867188 9 34 7.867188 34 6.5C34 5.132813 32.867188 4 31.5 4 Z M 22.5 6L31.5 6C31.785156 6 32 6.214844 32 6.5C32 6.785156 31.785156 7 31.5 7L22.5 7C22.214844 7 22 6.785156 22 6.5C22 6.214844 22.214844 6 22.5 6 Z M 13.46875 28C10.632813 28 9.324219 28.6875 7.90625 29.25C5.199219 30.324219 0.5625 32.5625 0.5625 32.5625C0.195313 32.6875 -0.0625 33.015625 -0.105469 33.398438C-0.148438 33.785156 0.0351563 34.160156 0.367188 34.363281C0.695313 34.5625 1.113281 34.554688 1.4375 34.34375C1.4375 34.34375 6.109375 32.101563 8.65625 31.09375C10.214844 30.476563 10.921875 30 13.46875 30C19.085938 30 18.917969 32.527344 21.21875 33.90625C22.046875 34.402344 23.347656 34.785156 24.8125 35.15625C24.9375 35.226563 25.074219 35.269531 25.21875 35.28125C25.230469 35.285156 25.238281 35.277344 25.25 35.28125C26.902344 35.683594 28.65625 36 30 36C30.585938 36 31.089844 36.066406 31.5 36.15625C31.519531 36.15625 31.542969 36.15625 31.5625 36.15625C31.9375 36.246094 32.230469 36.371094 32.4375 36.5C32.875 36.777344 33 37.003906 33 37.5C33 38.082031 32.875 38.269531 32.4375 38.53125C32 38.792969 31.152344 39 30 39L24.1875 39C21.738281 39 18.28125 38.03125 18.28125 38.03125C17.746094 37.875 17.1875 38.183594 17.03125 38.71875C16.875 39.253906 17.183594 39.8125 17.71875 39.96875C17.71875 39.96875 21.246094 41 24.1875 41L30 41C31.351563 41 32.5 40.804688 33.4375 40.25C33.707031 40.089844 33.945313 39.890625 34.15625 39.65625C34.246094 39.625 34.328125 39.585938 34.40625 39.53125L43.40625 33.46875C44.964844 32.542969 46.046875 32.300781 46.6875 32.3125C47.328125 32.324219 47.546875 32.515625 47.75 32.78125C48.046875 33.167969 48.066406 33.386719 47.875 33.84375C47.683594 34.300781 47.152344 34.941406 46.1875 35.625C44.988281 36.476563 31.773438 45.257813 30.21875 46.15625C29.070313 46.820313 28.152344 47.542969 27.09375 47.84375C26.035156 48.144531 24.769531 48.121094 22.71875 47.125C21.351563 46.460938 15.5625 43.4375 13.6875 42.46875C12.652344 41.933594 11.800781 41.636719 10.90625 41.6875C10.011719 41.738281 9.230469 42.148438 8.4375 42.65625L5.75 44.40625C5.285156 44.707031 5.152344 45.332031 5.453125 45.796875C5.753906 46.261719 6.378906 46.394531 6.84375 46.09375L9.53125 44.34375C10.230469 43.898438 10.625 43.707031 11 43.6875C11.375 43.667969 11.886719 43.789063 12.78125 44.25C14.640625 45.210938 20.339844 48.207031 21.84375 48.9375C24.207031 50.085938 26.101563 50.183594 27.625 49.75C29.148438 49.316406 30.238281 48.445313 31.21875 47.875C33.300781 46.667969 45.839844 38.316406 47.34375 37.25C48.492188 36.4375 49.300781 35.585938 49.71875 34.59375C50.136719 33.601563 50.007813 32.429688 49.34375 31.5625C48.820313 30.878906 47.902344 30.335938 46.71875 30.3125C45.886719 30.296875 44.878906 30.601563 43.78125 31.09375C43.738281 30.890625 43.839844 30.664063 43.75 30.46875C43.410156 29.730469 42.632813 29.230469 41.78125 29.0625C40.667969 28.84375 39.40625 29.179688 38.15625 29.75C38.066406 29.476563 37.996094 29.183594 37.8125 28.96875C37.277344 28.328125 36.5 28.117188 35.78125 28.0625C34.347656 27.953125 32.859375 28.417969 31.78125 29.0625C30.285156 29.953125 25.8125 32.773438 25.15625 33.1875C23.820313 32.828125 22.605469 32.402344 22.25 32.1875C21.335938 31.636719 19.773438 28 13.46875 28 Z M 35.625 30.0625C36.023438 30.09375 36.226563 30.214844 36.28125 30.28125C36.324219 30.332031 36.40625 30.421875 36.375 30.71875L31.4375 34.09375C30.984375 34.023438 30.515625 34 30 34C29.472656 34 28.753906 33.90625 27.96875 33.78125C29.707031 32.6875 31.859375 31.347656 32.8125 30.78125C33.484375 30.382813 34.824219 30 35.625 30.0625 Z M 40.75 31C41.015625 30.976563 41.234375 30.964844 41.40625 31C41.820313 31.082031 41.871094 31.167969 41.9375 31.3125C41.984375 31.417969 42.007813 31.6875 41.96875 32.03125L34.90625 36.78125C34.734375 36.058594 34.316406 35.417969 33.71875 34.96875L37.84375 32.125C37.964844 32.0625 38.070313 31.980469 38.15625 31.875C39.050781 31.332031 40.039063 31.066406 40.75 31Z"></path>
              </svg>
            }
            number={1540}
            text="Available Licenses"
          /> */}
          <Report
            className="group ml-2 min-w-full self-center bg-primary px-3  md:bg-white lg:ml-0 lg:min-w-fit lg:rounded-lg lg:hover:bg-primary lg:hover:shadow-2xl lg:hover:shadow-primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 fill-current text-white md:text-primary lg:group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <path d="M4.8457031 6C3.2767031 6 2 7.2975781 2 8.8925781L2 43C2 43.553 2.448 44 3 44L25.365234 44C25.059234 43.357 24.794891 42.692 24.587891 42L4 42L4 20L46 20L46 26.519531C46.719 27.021531 47.389 27.586938 48 28.210938L48 8.8925781C48 7.2975781 46.723297 6 45.154297 6L4.8457031 6 z M 4.8457031 8L45.154297 8C45.621297 8 46 8.3995781 46 8.8925781L46 18L4 18L4 8.8925781C4 8.3995781 4.3787031 8 4.8457031 8 z M 19 10L19 11L19 16L43 16L43 10L19 10 z M 8 11 A 2 2 0 0 0 6 13 A 2 2 0 0 0 8 15 A 2 2 0 0 0 10 13 A 2 2 0 0 0 8 11 z M 14 11 A 2 2 0 0 0 12 13 A 2 2 0 0 0 14 15 A 2 2 0 0 0 16 13 A 2 2 0 0 0 14 11 z M 21 12L41 12L41 14L21 14L21 12 z M 38 26C31.384428 26 26 31.384428 26 38C26 44.615572 31.384428 50 38 50C44.615572 50 50 44.615572 50 38C50 31.384428 44.615572 26 38 26 z M 38 28C38.180732 28 38.437682 28.09556 38.798828 28.515625C39.159974 28.935692 39.554657 29.645912 39.888672 30.564453C40.04607 30.997299 40.188772 31.482968 40.318359 32L35.681641 32C35.811228 31.482968 35.95393 30.997299 36.111328 30.564453C36.445343 29.645912 36.840026 28.935692 37.201172 28.515625C37.562318 28.095558 37.819268 28 38 28 z M 34.824219 28.521484C34.60801 28.937897 34.411136 29.389395 34.232422 29.880859C33.998951 30.522905 33.806227 31.244008 33.634766 32L30.001953 32C31.206807 30.398513 32.880324 29.169997 34.824219 28.521484 z M 41.175781 28.521484C43.119676 29.169997 44.793193 30.398513 45.998047 32L42.365234 32C42.193773 31.244008 42.001049 30.522905 41.767578 29.880859C41.588864 29.389395 41.39199 28.937897 41.175781 28.521484 z M 28.833984 34L33.275391 34C33.145451 34.949274 33.068309 35.956169 33.035156 37L28.054688 37C28.159485 35.941738 28.426361 34.933509 28.833984 34 z M 35.289062 34L40.710938 34C40.849461 34.932424 40.926032 35.948395 40.962891 37L35.037109 37C35.073968 35.948395 35.150539 34.932424 35.289062 34 z M 42.724609 34L47.166016 34C47.573639 34.933509 47.840515 35.941738 47.945312 37L42.964844 37C42.931691 35.956169 42.854549 34.949274 42.724609 34 z M 28.054688 39L33.035156 39C33.068309 40.043831 33.145451 41.050726 33.275391 42L28.833984 42C28.426361 41.066491 28.159485 40.058262 28.054688 39 z M 35.037109 39L40.962891 39C40.926032 40.051605 40.849461 41.067576 40.710938 42L35.289062 42C35.150539 41.067576 35.073968 40.051605 35.037109 39 z M 42.964844 39L47.945312 39C47.840515 40.058262 47.573639 41.066491 47.166016 42L42.724609 42C42.854549 41.050726 42.931691 40.043831 42.964844 39 z M 30.001953 44L33.634766 44C33.806227 44.755992 33.998951 45.477095 34.232422 46.119141C34.411136 46.610605 34.60801 47.062103 34.824219 47.478516C32.880324 46.830003 31.206807 45.601487 30.001953 44 z M 35.681641 44L40.318359 44C40.188772 44.517032 40.04607 45.002701 39.888672 45.435547C39.554657 46.354088 39.159974 47.064308 38.798828 47.484375C38.437682 47.904442 38.180732 48 38 48C37.819268 48 37.562318 47.904442 37.201172 47.484375C36.840026 47.064308 36.445343 46.354088 36.111328 45.435547C35.95393 45.002701 35.811228 44.517032 35.681641 44 z M 42.365234 44L45.998047 44C44.793193 45.601487 43.119676 46.830003 41.175781 47.478516C41.39199 47.062103 41.588864 46.610605 41.767578 46.119141C42.001049 45.477095 42.193773 44.755992 42.365234 44 z"></path>
              </svg>
            }
            number={158255}
            text="Total Customer Reach"
          />
          <Report
            className="group row-span-2 ml-2 min-h-full min-w-full self-center rounded-br-lg bg-primary px-3 md:bg-white lg:ml-0 lg:min-w-fit lg:rounded-lg lg:hover:bg-primary lg:hover:shadow-2xl lg:hover:shadow-primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 fill-current text-white md:text-primary lg:group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <path d="M40 0C34.5 0 30 4.5 30 10C30 15.5 34.5 20 40 20C45.5 20 50 15.5 50 10C50 4.5 45.5 0 40 0 z M 40 2C44.4 2 48 5.6 48 10C48 14.4 44.4 18 40 18C35.6 18 32 14.4 32 10C32 5.6 35.6 2 40 2 z M 44.300781 5.4003906L38.900391 11.699219L35.599609 9.1992188L34.400391 10.800781L39.099609 14.400391L45.800781 6.6992188L44.300781 5.4003906 z M 8 8C5.794 8 4 9.794 4 12L4 34C4 34.732221 4.2118795 35.409099 4.5566406 36L2 36 A 1.0001 1.0001 0 0 0 1 37C1 39.749516 3.2504839 42 6 42L44 42C46.749516 42 49 39.749516 49 37 A 1.0001 1.0001 0 0 0 48 36L45.443359 36C45.788121 35.409099 46 34.732221 46 34L46 20.380859C45.367 20.747859 44.699 21.054734 44 21.302734L44 34C44 35.103 43.103 36 42 36L8 36C6.897 36 6 35.103 6 34L6 12C6 10.897 6.897 10 8 10L28 10C28 9.317 28.069688 8.652 28.179688 8L8 8 z M 3.4121094 38L8 38L42 38L46.587891 38C46.150803 39.112465 45.275852 40 44 40L6 40C4.7241482 40 3.8491966 39.112465 3.4121094 38 z"></path>
              </svg>
            }
            number={585525}
            text="Processed Orders"
          />
          <Report
            className="group z-40 ml-2 min-w-full self-center rounded-bl-lg bg-primary px-3 md:bg-white lg:ml-0 lg:min-w-fit lg:rounded-lg lg:hover:bg-primary lg:hover:shadow-2xl lg:hover:shadow-primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 fill-current text-white md:text-primary md:group-hover:text-white"
                viewBox="0 0 50 50"
              >
                <path d="M17 2C13.699219 2 11 4.699219 11 8C11 9.984375 11.976563 11.75 13.46875 12.84375C12.667969 13.246094 11.9375 13.765625 11.3125 14.40625C10.585938 14.148438 9.8125 14 9 14C5.144531 14 2 17.144531 2 21C2 23.449219 3.269531 25.625 5.1875 26.875C2.132813 28.320313 0 31.414063 0 35L0 39.5C-0.00390625 39.820313 0.148438 40.121094 0.40625 40.3125C0.40625 40.3125 1.113281 40.8125 2.46875 41.21875C3.824219 41.625 5.917969 42 9 42C12.082031 42 14.175781 41.625 15.53125 41.21875C15.707031 41.167969 15.847656 41.117188 16 41.0625L16 45.5C15.996094 45.820313 16.148438 46.121094 16.40625 46.3125C16.40625 46.3125 17.113281 46.8125 18.46875 47.21875C19.824219 47.625 21.917969 48 25 48C28.082031 48 30.175781 47.625 31.53125 47.21875C32.886719 46.8125 33.59375 46.3125 33.59375 46.3125C33.851563 46.121094 34.003906 45.820313 34 45.5L34 41.0625C34.152344 41.117188 34.292969 41.167969 34.46875 41.21875C35.824219 41.625 37.917969 42 41 42C44.082031 42 46.175781 41.625 47.53125 41.21875C48.886719 40.8125 49.59375 40.3125 49.59375 40.3125C49.851563 40.121094 50.003906 39.820313 50 39.5L50 35C50 31.414063 47.867188 28.320313 44.8125 26.875C46.730469 25.625 48 23.449219 48 21C48 17.144531 44.855469 14 41 14C40.128906 14 39.300781 14.175781 38.53125 14.46875C37.902344 13.808594 37.160156 13.257813 36.34375 12.84375C37.835938 11.75 38.8125 9.984375 38.8125 8C38.8125 4.699219 36.113281 2 32.8125 2C29.511719 2 26.8125 4.699219 26.8125 8C26.8125 9.984375 27.789063 11.75 29.28125 12.84375C26.984375 13.976563 25.304688 16.15625 24.90625 18.78125C24.507813 16.152344 22.832031 13.972656 20.53125 12.84375C22.023438 11.75 23 9.984375 23 8C23 4.699219 20.300781 2 17 2 Z M 17 4C19.222656 4 21 5.777344 21 8C21 10.222656 19.222656 12 17 12C14.777344 12 13 10.222656 13 8C13 5.777344 14.777344 4 17 4 Z M 32.8125 4C35.035156 4 36.8125 5.777344 36.8125 8C36.8125 10.222656 35.035156 12 32.8125 12C30.589844 12 28.8125 10.222656 28.8125 8C28.8125 5.777344 30.589844 4 32.8125 4 Z M 17 14C20.371094 14 23 16.628906 23 20L23 20.3125C20.125 21.183594 18 23.847656 18 27C18 29.449219 19.269531 31.625 21.1875 32.875C19.933594 33.46875 18.859375 34.339844 18 35.40625L18 35C18 31.414063 15.867188 28.320313 12.8125 26.875C14.730469 25.625 16 23.449219 16 21C16 18.71875 14.886719 16.6875 13.1875 15.40625C14.226563 14.519531 15.515625 14 17 14 Z M 32.8125 14C34.339844 14 35.667969 14.535156 36.71875 15.46875C35.070313 16.75 34 18.761719 34 21C34 23.449219 35.269531 25.625 37.1875 26.875C34.132813 28.320313 32 31.414063 32 35L32 35.40625C31.140625 34.339844 30.066406 33.46875 28.8125 32.875C30.730469 31.625 32 29.449219 32 27C32 23.777344 29.789063 21.054688 26.8125 20.25L26.8125 20C26.8125 16.628906 29.441406 14 32.8125 14 Z M 9 16C9.777344 16 10.5 16.1875 11.15625 16.5C12.835938 17.304688 14 19.003906 14 21C14 23.773438 11.773438 26 9 26C6.226563 26 4 23.773438 4 21C4 18.226563 6.226563 16 9 16 Z M 41 16C43.773438 16 46 18.226563 46 21C46 23.773438 43.773438 26 41 26C38.226563 26 36 23.773438 36 21C36 19.152344 36.988281 17.554688 38.46875 16.6875C38.476563 16.683594 38.492188 16.691406 38.5 16.6875C38.648438 16.65625 38.785156 16.59375 38.90625 16.5C38.941406 16.484375 38.964844 16.453125 39 16.4375C39.019531 16.429688 39.042969 16.417969 39.0625 16.40625C39.660156 16.152344 40.308594 16 41 16 Z M 25 22C27.773438 22 30 24.226563 30 27C30 29.773438 27.773438 32 25 32C22.226563 32 20 29.773438 20 27C20 24.226563 22.226563 22 25 22 Z M 9 28C12.855469 28 16 31.144531 16 35L16 38.84375C15.851563 38.933594 15.792969 39.035156 14.96875 39.28125C13.824219 39.625 11.917969 40 9 40C6.082031 40 4.175781 39.625 3.03125 39.28125C2.207031 39.035156 2.148438 38.933594 2 38.84375L2 35C2 31.144531 5.144531 28 9 28 Z M 41 28C44.855469 28 48 31.144531 48 35L48 38.84375C47.851563 38.933594 47.792969 39.035156 46.96875 39.28125C45.824219 39.625 43.917969 40 41 40C38.082031 40 36.175781 39.625 35.03125 39.28125C34.207031 39.035156 34.148438 38.933594 34 38.84375L34 35C34 31.144531 37.144531 28 41 28 Z M 25 34C28.855469 34 32 37.144531 32 41L32 44.84375C31.851563 44.933594 31.792969 45.035156 30.96875 45.28125C29.824219 45.625 27.917969 46 25 46C22.082031 46 20.175781 45.625 19.03125 45.28125C18.207031 45.035156 18.148438 44.933594 18 44.84375L18 41C18 37.144531 21.144531 34 25 34Z"></path>
              </svg>
            }
            number={15155}
            text="Registered Customers"
          />

        </div>
      )}
                          <div className="mx-72 mx-auto w-70 overflow-hidden" >
                    <Typography className="font-bold 4xl " >Hear What Our Customer Says</Typography>
                   <CustomerReviews/>

</div>        
                        

    </>
  );
}
