import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./Sidebar.jsx/Index";


import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "./Components/Placeholder";
import Table from "./Components/Table/Table";
{/* <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<EditProduct />} />
            <Route path="/read/:id" element={<Read />} />
          </>
        )}
      </Routes> */}

function App() {
  const [reqType, setReqType] = useState("users");

  return (


      <Router>
        
        <div style={{ display: "flex" }}>
          <Sidebar reqType={reqType} setReqType={setReqType} />
          
          <div style={{ flex: 1, padding: "1rem" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/placeholder/users" />} />
              <Route
                path="/placeholder/:reqType"
                element={
                  <Placeholder reqType={reqType} setReqType={setReqType} />
                }
              />
              <Route path="/table" element={<Table/>}/>
            </Routes>
          </div>
        </div>
      </Router>
  
  );
}

export default App;
