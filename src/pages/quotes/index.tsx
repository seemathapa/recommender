import styles from "./style.module.css";
import bgImage from "../../assets/images/1.png";
import bgImage1 from "../../assets/images/2.png";
import bgImage2 from "../../assets/images/book.png";

export default function Quotes() {
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max">
        <div className={`bg-local ${styles.customBG} p-5 overflow-y-auto`}>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={bgImage}
                     alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Wuthering Heights</div>
                <p>"I am not afraid of storms, for I am learning how to sail my ship."</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={bgImage1}
                     alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The Two Towers</div>
                <p>“There is some good in this world, and it’s worth fighting for.” — J.R.R. Tolkien</p>
              </div>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={bgImage2}
                     alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Frankenstein</div>
                <p>“Beware; for I am fearless, and therefore powerful.” — Mary Shelley </p>
              </div>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={bgImage}
                     alt="Man looking at item at a store"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">A Tale of Two Cities</div>
                <p>“It was the best of times, it was the worst of times, it was the age of wisdom,
                  it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity,
                  it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter
                  of despair.” — Charles Dickens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
