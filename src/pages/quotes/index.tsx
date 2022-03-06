import styles from "./style.module.css";

export default function Quotes() {
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max">
        <div className={`bg-local ${styles.customBG} p-5 overflow-y-auto`}>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Wuthering Heights</div>
              <p className="italic ">"I am not afraid of storms, for I am learning how to sail my ship."</p>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">The Two Towers</div>
              <p className="italic">“There is some good in this world, and it’s worth fighting for.” — J.R.R.
                Tolkien</p>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Frankenstein</div>
              <p className="italic">“Beware; for I am fearless, and therefore powerful.” — Mary Shelley </p>
            </div>
          </div>
          <br/>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">A Tale of Two Cities
              </div>
              <p className="italic">“It was the best of times, it was the worst of times, it was the age of wisdom,
                it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity,
                it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the
                winter
                of despair.” — Charles Dickens</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
