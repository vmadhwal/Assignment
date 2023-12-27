import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Option1Basic = React.lazy(() => import("pages/Option1Basic"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/option1basic" element={<Option1Basic />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
