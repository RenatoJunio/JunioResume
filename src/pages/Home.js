import { useTheme } from '../store/ThemeContext';
import 'bulma/css/bulma.min.css';

const Home = () => {
  const darkTheme = useTheme();
  const backgroundDark = 'has-background-black-ter is-danger';
  const backgroundLight = 'has-background-danger-light is-success-dark';

  const titleDark = 'has-text-danger';
  const titleLight = 'has-text-success-dark';
  const subtitleDark = 'has-text-danger-light';
  const subtitleLight = 'has-text-success';

  return (
    <div className={darkTheme ? backgroundDark : backgroundLight}>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered is-unselectable">
            <div className="title is-size-1 has-text-weight-bold">
              <p className={darkTheme ? titleDark : titleLight}>
                Hello! I'm Renato.
              </p>
            </div>
            <div className="subtitle is-size-3 has-text-weight-semibold">
              <p className={darkTheme ? subtitleDark : subtitleLight}>
                A full-stack dev in the making!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
