import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgImg from '../../assets/img/food.webp'
import { CardMenu } from '../../components/Card';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Homepage = () => {
    const bg = bgImg;
    return (
        <>
         <div>
      {/* Section 1: Regular Content */}

      {/* Main Section */}
      <section id="main" className={`h-[80vh] bg-fixed bg-center bg-cover bg-[url('assets/img/food.webp')]`} >
        <div className="flex flex-col items-center justify-center h-full bg-white bg-opacity-30">
          <h2 className="font-serif text-2xl font-bold text-center text-black lg:text-4xl lg:mr-8">Selamat Datang di Resto Mudo<span className='italic text-red-700'>Genkz</span></h2>
          <h2 className="font-serif text-lg font-bold text-center text-red-700 lg:text-xl lg:mr-8">Kelezatan Autentik dari Sabang sampai Merauke</h2>
        </div>
      </section>

      {/* Regular Content */}
      <section id='menu' className="flex flex-col items-center gap-10 py-12">
        <div><h3 className="text-2xl lg:text-3xl font-pacifio">Temukan Pada Menu Kami</h3></div>
        <div>
          <div className="grid grid-cols-1 gap-6 px-12 md:grid-cols-2 lg:grid-cols-4">
            <div className='flex flex-col items-center gap-4 p-5 border-2 border-red-700 border-solid rounded-lg'>
                <FontAwesomeIcon icon={faCoffee} className="text-5xl text-red-700"/>
                <h1>Breakfast</h1>
                <p className="text-sm text-center">Menu sarapan tradisional indonesia dengan rasa yang khas yang membuatnya semakin menyenangkan.</p>
                <Link to={"/menu"} className="font-medium text-red-700 hover:text-red-500">Explore Menu</Link>
            </div>
            <div className='flex flex-col items-center gap-4 p-5 border-2 border-red-700 border-solid rounded-lg'>
                <FontAwesomeIcon icon={faCoffee} className="text-5xl text-red-700"/>
                <h1>Breakfast</h1>
                <p className="text-sm text-center">Menu sarapan tradisional indonesia dengan rasa yang khas yang membuatnya semakin menyenangkan.</p>
                <Link to={"/menu"} className="font-medium text-red-700 hover:text-red-500">Explore Menu</Link>
            </div>
            <div className='flex flex-col items-center gap-4 p-5 border-2 border-red-700 border-solid rounded-lg'>
                <FontAwesomeIcon icon={faCoffee} className="text-5xl text-red-700"/>
                <h1>Breakfast</h1>
                <p className="text-sm text-center">Menu sarapan tradisional indonesia dengan rasa yang khas yang membuatnya semakin menyenangkan.</p>
                <Link to={"/menu"} className="font-medium text-red-700 hover:text-red-500">Explore Menu</Link>
            </div>
            <div className='flex flex-col items-center gap-4 p-5 border-2 border-red-700 border-solid rounded-lg'>
                <FontAwesomeIcon icon={faCoffee} className="text-5xl text-red-700"/>
                <h1>Breakfast</h1>
                <p className="text-sm text-center">Menu sarapan tradisional indonesia dengan rasa yang khas yang membuatnya semakin menyenangkan.</p>
                <Link to={"/menu"} className="font-medium text-red-700 hover:text-red-500">Explore Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}