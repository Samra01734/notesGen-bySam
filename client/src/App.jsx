import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import History from "./pages/History";
import Notes from "./pages/Notes.jsx";


import getCurrentUser from "./services/api";
import Price from "./pages/Price";
import TopicForm from "./components/TopicForm.jsx";

export const serverUrl = "http://localhost:8000";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);

  console.log(userData);

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/auth" replace />}
      />

  {/* Pricing */}
      <Route
        path="/"
        element={userData ? <Price /> : <Navigate to="/auth" replace />}
      />
      {/* Auth */}
      <Route
        path="/auth"
        element={userData ? <Navigate to="/" replace /> : <Auth />}
      />

      {/* History */}
      <Route
        path="/history"
        element={userData ? <History /> : <Navigate to="/auth" replace />}
      />

      {/* Notes */}
      <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/auth" replace />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={<Navigate to={userData ? "/" : "/auth"} replace />}
      />
      <Route path="/price" element={<Price />} />
<Route path="/history" element={<History />} />
<Route path="/notes" element={<Notes />} />
<Route path="/TopicFrom" element={<TopicForm />} />

    </Routes>
  );
}



export default App;