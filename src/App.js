import React from "react";
import { HomePage } from "./pages/HomePage";
import { BusPage } from "./pages/BusPage";
import { InfoPage } from "./pages/InfoPage";
import { PaymentPage } from "./pages/PaymentPage";
import { SignInPage } from "./pages/SignInPage";
import {SignupPage} from './pages/SignupPage';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/BusPage" element={<BusPage />} />
    <Route path="/BusPage/InfoPage" element={<InfoPage />} />
    <Route path="/BusPage/InfoPage/PaymentPage" element={<PaymentPage />} />
    <Route path="/LoginPage" element={<SignInPage />} />
    <Route path="/RegisterPage" element={<SignupPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;