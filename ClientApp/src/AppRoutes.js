import Contribute from "./components/Contribute";
import ClimateResources from "./components/ClimateResources";
import Home from "./components/Home";

const AppRoutes = [
  {
    index: true,
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
