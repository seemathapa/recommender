import bgImage from "../../assets/images/1.png";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-80" style={{height: '25vh'}}>
      <img className="object-fill" src={bgImage} alt="background"/>
    </div>
  )
}
