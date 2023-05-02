import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { useState } from "react";

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{margin: '10px auto', width: '90vw'}}>
      <HomePage />
    </div>
  );
}

export default App;
