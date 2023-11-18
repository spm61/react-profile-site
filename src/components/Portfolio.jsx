
import ProjectItem from './ProjectItem';
import codeRefactorImg from '../assets/images/code-refactor.png';
import passwordGeneratorImg from '../assets/images/password-generator.png';
import codeQuizImg from '../assets/images/code-quiz.png';
import workDaySchedulerImg from '../assets/images/work-day-scheduler.png';
import weatherDashboardImg from '../assets/images/weather-dashboard.png';
import teamProfileGeneratorImg from '../assets/images/team-profile-generator.png';
import noteTakerImg from '../assets/images/note-taker.png';
import folder from '../assets/images/folder.jpg';

const Portfolio = () => {
  return (
    <div id='about' className=''>
      <img
        className='md:w-full md:h-screen md:object-cover md:object-center md:visible invisible'
        src={folder}
        alt='A folder image'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div
          id='portfolio'
          className='max-w-[800px] m-auto md:pl-20 sm:p-4 p-14 sm:py-10 py-4'
        >
          <h1 className='text-2xl sm:text-6xl mb-20 font-bold text-center text-gray-800'>
            Portfolio
          </h1>
          <div className='grid sm:grid-cols-3 gap-12'>
            <div>
              <ProjectItem
                img={codeRefactorImg}
                title='Code Refactor'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={passwordGeneratorImg}
                title='Password Generator'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={codeQuizImg}
                title='Code Quiz'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={workDaySchedulerImg}
                title='Work Day Scheduler'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={weatherDashboardImg}
                title='Weather Dashboard'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={teamProfileGeneratorImg}
                title='Logo Generator'
                url=''
              />
            </div>
            <div>
              <ProjectItem
                img={noteTakerImg}
                title='Note Taker'
                url=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;