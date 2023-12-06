import Contribute from "./components/contribute";
import ClimateResources from "./components/climateResources";
import Home from "./components/home";

const AppRoutes = [
  {
    index: true,
    path: '/',
    element: <Home />
  },
  {
    path: '/contribute',
    element: <Contribute />
  },
  {
    path: '/climate-resources',
    element: <ClimateResources />
  }
];

export default AppRoutes;
