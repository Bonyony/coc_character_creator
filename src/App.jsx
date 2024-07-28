import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar, Footer, Loading } from "./components";
import Home from "./pages/Home";
import CharacterCreator from "./pages/CharacterCreator";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CharacterCreator />}>
            {/* There will probably be more routes here as I grow the project */}
          </Route>

          {/* Will look into the proper way to format these */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" />

          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
