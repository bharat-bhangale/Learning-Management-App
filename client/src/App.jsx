import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/AppRouter";

const App = () => {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element, name }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
