import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import useInitialState from '../../hooks/useInitialState';

import Home from '../../containers/Home';
import Checkout from '../../containers/Checkout';
import Information from '../../containers/Information';
import Payment from '../../containers/Payment';
import Success from '../../containers/Success';
import NotFound from '../../containers/NotFound';

import '../../styles/components/App.scss';
import Layout from '../../components/Layout';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'checkout', element: <Checkout /> },
    { path: 'checkout/information', element: <Information /> },
    { path: 'checkout/payment', element: <Payment /> },
    { path: 'checkout/success', element: <Success /> },
    // { path: 'sign-in', element: <Success /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    )
};

export default App;
