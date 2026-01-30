import { Outlet } from 'react-router-dom';
import FormTVShow from '../FormTVShow/FormTVShow';
import './Home.css';

const Home = () => {
  return (
    <div>
      <FormTVShow />
      <Outlet />
    </div>
  );
};

export default Home;
