import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Views/Pages/Login/login";
import ViewBugs from "./Views/Pages/viewBugs";
import Layout from "./Views/Pages/Layout/layout";
import Home from "./Views/Pages/Home/home";
import Dashboard from "./Views/Pages/Dashboard/dashboard";
import NoPage from "./Views/Pages/noPage";
import CreateBug from "./Views/components/BugCreate & Edit/bugForm";

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout auth={auth} />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bugs" element={<ViewBugs />} />
          <Route path="create" element={<CreateBug title="Create Bug" />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
