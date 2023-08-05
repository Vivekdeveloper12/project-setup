import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import Loader from "../Loader";
import commonRoutes from "../../Routes/commonRoutes";

function MainContent() {
    let routes = [...commonRoutes]
    
    return (
        <div className="main-content">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            route.element && (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                </Routes>
            </Suspense>
        </div>
    )
}

export default MainContent