import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Footer from './Footer';

const Home = () => {
  return (
    <div id='home'>
      <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl sm:text-6xl font-bold text-gray-800'>
            Sean Moroney
          </h1>
          <h2 className='flex sm:text-3xl text-lg font-semibold pt-4 text-grey-800'>
            <span className='text-gray-800'>Full Stack Developer</span>
            <span className='text-gray-200'>&nbsp; &#123;</span>
            <span className='text-gray-200'>&nbsp; &#125;</span>
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='' target='_blank' rel="noreferrer">
              <AiFillGithub
                className='fill-gray-800 cursor-pointer'
                size={29}
              />
            </a>
            <a
              href=''
              target='_blank' rel="noreferrer"
            >
              <AiFillLinkedin
                className='fill-gray-800 cursor-pointer'
                size={32}
              />
            </a>
            <a
              href=''
              target='_blank' rel="noreferrer"
            >
              <AiFillInstagram
                className='fill-gray-800 cursor-pointer'
                size={32}
              />
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;