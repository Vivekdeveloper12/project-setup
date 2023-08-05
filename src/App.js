import React, { useContext, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthGuard from "./Auth/AuthGuard";
import GetUserType from "./Contexts/GetUserType";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.scss";

import AuthContext from "./Contexts/AuthContext";
import Loader from "./Components/Loader";

// Containers
const MainLayout = lazy(() => import("./Layouts/MainLayout"));
// Pages

function App() {
	let type = GetUserType()
  let { isAuthenticated } = useContext(AuthContext);
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {isAuthenticated && (
            <Route
              path={`/${type}/*`}
              name={type}
              element={
                <AuthGuard>
                  <MainLayout />
                </AuthGuard>
              }
            />  
          )}
          <Route
            path={`/*`}
            name="Default"
            element={
                <MainLayout />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
