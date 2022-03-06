import Footer from "../../Components/Footer";
import styles from "./style.module.css";
import ParallaxBody from "../../Components/Parallax";

export default function Home() {
  return (
    <div>
      <div className={`bg-no-repeat bg-center bg-cover ${styles.customBG}`}>

      </div>
      <ParallaxBody/>
      <Footer/>
    </div>
  )
}
