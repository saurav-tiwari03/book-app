import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { DeleteBook } from "./pages/DeleteBook";
import { ShowBook } from "./pages/ShowBook";
import { UpdateBook } from "./pages/UpdateBook";
import { CreateBook } from "./pages/CreateBook";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { useEffect, useState } from "react";
import { app } from "./config/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (authUser) => {
      setLoginStatus(authUser);
    });
    return () => unsubscribe();
  }, []);
  

  return (
    <div className="App " id="website">
      <Routes>
        <Route path="/" element={loginStatus ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books/create" element={<CreateBook /> } />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<UpdateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook /> } />
      </Routes>
    </div>
  );
}

export default App;
