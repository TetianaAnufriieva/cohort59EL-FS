import type { JSX } from "react";
import style from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p className={style.copy}>© {new Date().getFullYear()} MyProjects. All rights reserved.</p>
        <ul className={style.footerLinks}>
          <li><a href="/feedback">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}