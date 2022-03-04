import styles from './style.module.css'
export default function ParallaxBody() {
  return (
    <>
      <div className="max-w-lg m-auto">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
          magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
          sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
          nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
          odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
          laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
          fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
          non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
          Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
          varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
          semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
          ipsum, id consequat nulla nunc in ligula.
        </p>
        <p className="mb-12">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
          dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
          dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
          fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
          fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
          vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
          neque.
        </p>
      </div>
      <div className="max-w-lg m-auto">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
          magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
          sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
          nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
          odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
          laoreet sem, semper molestie libero.
        </p>
        <p className="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
          fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
          non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
          Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
          varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
          semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
          ipsum, id consequat nulla nunc in ligula.
        </p>
      </div>
      <header className={`flex items-center justify-center h-screen bg-fixed bg-center bg-cover ${styles['custom-img']}`}>
        {/*<div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">*/}
        {/*  */}
        {/*</div>*/}
      </header>
    </>
  )
}
