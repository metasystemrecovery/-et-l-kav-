import Google from '../assets/Google Play.svg';
import Apple from '../assets/App Store.svg';

const AppDownload = () => {
    return (
        <div className='flex items-center gap-4 mt-6 md:hidden'>

            <a href="/" className='h-10'><img className='h-full w-full object-contain ' src={Apple} alt="Ios Download" /></a>
            <a href="/" className='h-10'><img className='h-full w-full object-contain ' src={Google} alt="Andriod Download" /></a>
        </div>
    )
}

export default AppDownload