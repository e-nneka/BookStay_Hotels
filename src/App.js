import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";


function getLibrary(provider) {
  return new Web3Provider(provider)
}

const Layout =()=>{
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="app">
    <Outlet />
      {/* <Navbar />
      <Outlet />
      <Footer /> */}
    </div>
    </Web3ReactProvider>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/hotels",
        element: <List />
      },

      {
        path: "/hotels/:id",
        element: <Hotel />
      },

      // {
      //   path: "/product/:id",
      //   element: <Product />
      // },
    ]
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
