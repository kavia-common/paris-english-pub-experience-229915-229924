import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

// PUBLIC_INTERFACE
export function SiteLayout() {
  return (
    <div className="App">
      <NavBar />
      <main className="main" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
