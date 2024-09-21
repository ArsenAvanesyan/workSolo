import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "../../widgets/navbar/auth/RegistrationPage";
import AuthorizationPage from "../../widgets/navbar/auth/AuthorizationPage";


function AppRouters(): JSX.Element {
    return (
        <Routes>
            <Route path="/" />
            <Route path="/registration" element={<RegistrationPage />} />            
            <Route path="/authorization" element={<AuthorizationPage />} />            
        </Routes>
    )
}

export default AppRouters