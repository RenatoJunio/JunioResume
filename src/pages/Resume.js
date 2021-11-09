import { useTheme } from '../store/ThemeContext';

import IntroCard from '../components/ui/resume/IntroCard';
import ContactsCard from '../components/ui/resume/ContactsCard';
import SkillCard from '../components/ui/resume/SkillCard';
import ListCard from '../components/ui/resume/ListCard';

import { listOfCourses } from '../information/CoursesInfo';
import { listOfJobs, jobTxt } from '../information/WorkInfo';
import { listOfUniversities } from '../information/UniversityInfo';

import 'bulma/css/bulma.min.css';

const Resume = props => {
  const darkTheme = useTheme();
  const classDark = 'section has-background-black-ter';
  const classLight = 'section has-background-danger-light';

  return (
    <section className={darkTheme ? classDark : classLight}>
      <div className="container mt-5">
        <div className="columns is-desktop">
          <div className="column is-two-thirds-desktop">
            <IntroCard />
            <ListCard list={listOfCourses} title={'Online Courses'} />
            <ListCard list={listOfUniversities} title={'Academic Background'} />
            <ListCard
              list={listOfJobs}
              title={'Professional Background'}
              text={jobTxt}
            />
          </div>
          <div className="column is-one-third-desktop">
            <ContactsCard />
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
