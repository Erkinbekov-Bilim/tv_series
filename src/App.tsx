import Home from './containers/tv_series/Home/Home';
import TV_Show from './containers/tv_series/TV_Show/TV_Show';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="shows/:idShow" element={<TV_Show />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
