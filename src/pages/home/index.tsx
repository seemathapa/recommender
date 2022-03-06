import Footer from "../../Components/Footer";
import styles from "./style.module.css";
import ParallaxBody from "../../Components/Parallax";
import image1 from "../../assets/images/book1.jpg";
import image2 from "../../assets/images/drift.jpg";
import image3 from "../../assets/images/image1.jpg";
import image4 from "../../assets/images/new.jpg";
import SignUp from "../../Components/SignUp";

export default function Home() {
  return (
    <div>
      <div className={`bg-no-repeat bg-center bg-cover ${styles.customBG}`}>

      </div>
      <ParallaxBody/>
      <SignUp/>
      <div className="pb-20 bg-white flex items-center justify-center">

        <div className="grid grid-cols-6 gap-2 px-16">
          <div className="flex flex-col gap-1">
            <a href="/" className="bg-purple-100">
              <img src={image1} className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={"hello"}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-600 font-semibold"> Best 2021 </a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 78.4K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Fantasy </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Trending </a>
            </div>

          </div>
          <div className="flex flex-col gap-1">
            <a href="/" className="bg-purple-100">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
                   className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={"hello"}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-600 font-semibold"> Just Chatting </a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 236K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> IRL </a>
            </div>

          </div>
          <div className="flex flex-col gap-1">
            <a href="/" className="bg-purple-100">
              <img src={image2}
                   className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={"hello"}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-600 font-semibold"> Drift Land</a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 350K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> RPG </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
            </div>

          </div>
          <div className="flex flex-col gap-1">
            <a href="/" className="bg-purple-100">
              <img src={image3}
                   className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={""}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-600 font-semibold"> Fantasy General </a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 89.7K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
            </div>

          </div>
          <div className="flex flex-col gap-1">

            <a href="/" className="bg-purple-100">
              <img src={image4}
                   className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={"hello"}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-500 font-semibold"> Oriental Empires </a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 9K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> New </a>
            </div>

          </div>
          <div className="flex flex-col gap-1">
            <a href="/" className="bg-purple-100">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"
                   className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" alt={"hello"}/>
            </a>
            <a href="/" className="hover:text-purple-100 text-gray-500 font-semibold"> Lost Ark </a>
            <a href="/" className="hover:text-purple-100 text-sm text-gray-500 -mt-1"> 199K viewers </a>
            <div className="flex flex-row flex-wrap gap-2">
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Fantasy </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
              <a href="/"
                 className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Anime </a>
            </div>

          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}
