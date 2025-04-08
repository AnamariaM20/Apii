import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Bookings from "./Bookings";
import FetchData from "./FetchData";
import DinamicTable from "./DinamicTable";
import Pokemon from "./Pokemon";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Pokemon></Pokemon>
      <DinamicTable></DinamicTable>
      {/* <FetchData></FetchData> */}
      

    </BrowserRouter>
  );
}

export default App;
