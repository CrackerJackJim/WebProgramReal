import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Hobbies from './hobbies';
import Personal from './Personal';
import './App.css';

require('dotenv').config();         

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/personal">Personal Info</Link>
          <Link to="/hobbies">Hobbies</Link>
        </nav>
        <Routes>
          <Route path="/personal" element={<Personal />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;