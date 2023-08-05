import React from "react";
import { MainHeader, MainContent, MainSidebar } from "../Components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/style.scss";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import DefaultContent from "../Components/Content/DefaultContent"

function MainLayout() {
  let { isAuthenticated } = useContext(AuthContext);
  return (
    
    <div className="main-page">
        <MainHeader />
      <div className="sub-page">
        <MainSidebar />
        {isAuthenticated &&
        <MainContent /> ||
        <DefaultContent />
        }

      </div>
    </div>
  );
}

export default MainLayout;
