
import lightbulb from '../assets/images/lightbulb.jpg';
import gradient from '../assets/images/gradient.jpg';
import Resume from './Resume';

const About = () => {
  return (
    <div id='about'>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradient} 
        alt='Background Gradient'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 sm:py-10 py-4'>
          <h1 className='text-2xl sm:text-6xl font-bold text-center text-gray-800'>
            About
          </h1>
          <img
            className='object-center mx-auto sm:max-w-3xl max-w-[300px] sm:mt-10 mt-4 rounded-md shadow-xl shadow-gray-900'
            src={lightbulb}
            alt='A bright lighbulb'
          />

          <div className='justify-center items-center'>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-10 mt-8 text-gray-800'>
            Enthusiastic Software Developer and Programmer with strong analytical and problem-solving skills. 
            Highly adaptable and detail oriented with the ability to work independently or on a team to create user-friendly systems and applications.   
            Able to rapidly learn advanced concepts and technology on the fly to bring my best energy each day. 
            </p>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-4 mt-2 text-gray-800'>
              Recently, I took a class to learn more full-stack development skills.  This website showcases the projects I built as a part of it,
              among others.  
            </p>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-4 mt-2 text-gray-800'>
              I hope you enjoy your stay!
            </p>
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default About;