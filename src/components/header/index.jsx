import { useState, useEffect } from "react";

import styles from './styles.module.css';



const navItems = ["Inicio", "Quem Somos", "Produtos", "Contato"];

const Headerr = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50); // Exemplo: 50px do topo
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`${styles.nav} ${scrolled ? "scrolledColor" : ""}`}>
      <img src="logo-novaEsperanca.png" width={140} alt="" />
      <ul className={styles.navlist}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navitem}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', gap: 20 }}>
        <img src="insta.png" alt="" width={30} />
        <img src="whats.png" alt="" width={30} />
      </div>
    </nav>
  );
}


export default Headerr;