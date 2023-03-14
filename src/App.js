import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  const {user} = useAuthContext();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/create" element={<Create />}/>
            <Route exact path="/user/login" element={!user ? <Login /> : <Navigate to="/" />}/>
            <Route exact path="/user/signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
            <Route exact path="/" element={user ? <Home /> : <Navigate to="/user/login"/>}/>
            <Route exact path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
