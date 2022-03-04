import React from 'react';
import './App.css';
import Header from "../Components/Header";
import Home from "../pages/home";

function App() {
  return (
    <div className="flex flex-col min-h-screen App">
      <main className="flex flex-col w-full h-full flex-1 text-center relative">
        <div className="h-auto w-full">
          <Header/>
          <Home/>
        </div>
      </main>
    </div>
  );
}

export default App;
