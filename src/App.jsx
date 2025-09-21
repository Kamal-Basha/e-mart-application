import React from "react";
import './App.css'
import LandingPage from "./stores/pages/landingPage";
import { Route, Router, Routes } from "react-router-dom";

import AcPage from "./stores/pages/AcPage";
import BooksPage from "./stores/pages/BooksPage";
import ComputerPage from "./stores/pages/Computerpage";
import FridgePage from "./stores/pages/FridgePage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/KitchenPage";
import MenPage from "./stores/pages/MenPage";
import MobilesPage from "./stores/pages/MobilesPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import WatchPage from "./stores/pages/WatchPage";
import WomenPage from "./stores/pages/WomenPage";
import MobilesSingle from "./singles/MobilesSingle";



const App =() => {
  return (
      <div>
        <Routes>
          <Route path="/" element ={<LandingPage />}/>
          <Route path="/mobiles" element={<MobilesPage />} />
          <Route path="/AcPage" element={<AcPage />} />
          <Route path="/Bookspage" element={<BooksPage />} />
          <Route path="/FridgePage" element={<FridgePage />} />
          <Route path="/ComputerPage" element={<ComputerPage />} />
          <Route path="/FurniturePage" element={<FurniturePage />} />
          <Route path="/KitchenPage" element={<KitchenPage />} />
          <Route path="/MenPage" element={<MenPage />} />
          <Route path="/SpeakerPage" element={<SpeakerPage />} />
          <Route path="/WatchPage" element={<WatchPage />} />
          <Route path="/WomenPage" element={<WomenPage />} />
               <Route path="/mobiles/:id" element={<MobilesSingle />} />
        </Routes>
      </div>
      
  )
}

export default App