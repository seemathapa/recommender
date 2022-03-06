import styles from './style.module.css';
import Header from "../../../Components/Header";
import imageSrc from "../../../assets/images/1.png"
export default function BlogDetail() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <div className={`flex items-center justify-center bg-fixed bg-center bg-cover ${styles.detailBackground}`}>
        <div className="max-w-7xl bg-white">
          <img className="w-full h-60" src={imageSrc} alt="Sunset in the mountains"/>
          <div className="p-6">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <article className="prose lg:prose-xl">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}
