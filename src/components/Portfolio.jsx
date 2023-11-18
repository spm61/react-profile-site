
import ProjectItem from './ProjectItem';
import codeRefactorImg from '../assets/images/code-refactor.png';
import passwordGeneratorImg from '../assets/images/random-password-generator.png';
import jsQuizImg from '../assets/images/js-quiz-app.png';
import workDaySchedulerImg from '../assets/images/workday-scheduler.png';
import weatherDashboardImg from '../assets/images/weather-dashboard.png';
import logoGeneratorImg from '../assets/images/logo-generator.png';
import noteTakerImg from '../assets/images/note-taker.png';
import hangmanImg from '../assets/images/hangman-game.png';

const Portfolio = () => {
  return (
    <div id='about' className=''>
      <div className='w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500'>
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
                url='https://github.com/spm61/horiseon-refactor-challenge'
              />
            </div>
            <div>
              <ProjectItem
                img={passwordGeneratorImg}
                title='Password Generator'
                url='https://github.com/spm61/random-password-generator'
              />
            </div>
            <div>
              <ProjectItem
                img={jsQuizImg}
                title='Code Quiz'
                url='https://github.com/spm61/js-quiz-app'
              />
            </div>
            <div>
              <ProjectItem
                img={workDaySchedulerImg}
                title='Work Day Scheduler'
                url='https://github.com/spm61/work-day-scheduler'
              />
            </div>
            <div>
              <ProjectItem
                img={weatherDashboardImg}
                title='Weather Dashboard'
                url='https://github.com/spm61/weather-dashboard'
              />
            </div>
            <div>
              <ProjectItem
                img={logoGeneratorImg}
                title='Logo Generator'
                url='https://github.com/spm61/svg-logo-maker'
              />
            </div>
            <div>
              <ProjectItem
                img={noteTakerImg}
                title='Note Taker'
                url='https://github.com/spm61/note-taker'
              />
            </div>
            <div>
              <ProjectItem
                img={hangmanImg}
                title='Hangman Game (group project)'
                url='https://github.com/spm61/hangman-js-game'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;