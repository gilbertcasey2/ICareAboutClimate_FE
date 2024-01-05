import Contribute from "./components/contribute";
import ClimateResources from "./components/climateResources";
import Home from "./components/home";
import CompletedForm from "./components/completedForm";
import { CENSUS_BLOCK_COUNT } from "./settings";

var AppRoutes = [
  {
    index: true,
    path: '/',
    element: <Home />
  },
  {
    path: '/contribute',
    element: <Contribute formIndex={-1}/>
  },
  {
    path: '/climate-resources',
    element: <ClimateResources />
  },
  {
    path: '/complete',
    element: <CompletedForm />
  }
];

for (var i = 0; i < CENSUS_BLOCK_COUNT; i++) {
  AppRoutes.push(
    {
      index: true,
      path: '/contribute/'+i,
      element: <Contribute formIndex={i} />
    }
  );
}

export default AppRoutes;
