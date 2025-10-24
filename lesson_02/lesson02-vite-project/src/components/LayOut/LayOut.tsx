import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function LayOut(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
