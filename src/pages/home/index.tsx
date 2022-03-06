import bgImage from "../../assets/images/1.png";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden pt-80" style={{height: '25vh'}}>
        <img className="object-fill" src={bgImage} alt="background"/>
        <div className="p-5 text-2xl bg-purple-300 bg-opacity-50 rounded-xl">
            hello
        </div>
      </div>
      <Footer/>
    </>
  )
}
