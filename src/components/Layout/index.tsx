import React, { ReactNode, useState } from 'react';
import Link from 'next/link';

import {
  FaBars,
  FaShoppingCart,
  FaSearch,
  FaUserAlt,
  FaChevronRight,
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
};

type SubMenusProps = {
  label: string;
  href: string;
};

const Layout = ({ children }: LayoutProps) => {
  const [toggle, setToggle] = useState(false);
  const [toggleSubmenu, setToggleSubMenu] = useState(false);
  const [submenus, setSubMenus] = useState<SubMenusProps[]>([]);

  const menuItens = [
    {
      label: `Playstation`,

      submenus: [
        {
          label: `Playstation 1`,
          href: ``,
        },
        {
          label: `Playstation 2`,
          href: ``,
        },
        {
          label: `Playstation 3`,
          href: ``,
        },
      ],
    },
    {
      label: `Xbox`,
      submenus: [
        {
          label: `Xbox`,
          href: ``,
        },
        {
          label: `Xbox 360`,
          href: ``,
        },
        {
          label: `Xbox One`,
          href: ``,
        },
      ],
    },
    {
      label: `Nintendo`,
      submenus: [
        {
          label: `Game Boy`,
          href: ``,
        },
        {
          label: `Game Boy Advance`,
          href: ``,
        },
        {
          label: `NES`,
          href: ``,
        },
      ],
    },
    {
      label: `Clássicos`,
      submenus: [
        {
          label: `Atari`,
          href: ``,
        },
        {
          label: `Dreamcast`,
          href: ``,
        },
        {
          label: `Dynavision`,
          href: ``,
        },
      ],
    },
  ];

  const toggleMenu = () => {
    setToggle((state) => !state);
    setToggleSubMenu(false);
  };

  const closeMenu = () => {
    setToggle(false);
    setToggleSubMenu(false);
  };

  return (
    <Container toggle={toggle} toggleSubmenu={toggleSubmenu}>
      <header>
        <div className="row">
          <button onClick={toggleMenu} className="menu">
            <FaBars />
          </button>

          <Link href={`/`}>
            <div className="brand">
              <p>Salão de</p>
              <p style={{ fontSize: `4.4rem`, fontWeight: `bold` }}>Jogos</p>
            </div>
          </Link>

          <div onClick={closeMenu} className="overlay"></div>
          <nav>
            <ul>
              <li className="login-button">
                <Link href={`create`}>
                  <FaUserAlt />
                  <div className="separator">
                    <p>Faça seu login</p>
                    <p>ou cadastre-se</p>
                  </div>
                </Link>
              </li>
              {menuItens.map((item) => (
                <li key={item.label}>
                  <span
                    onClick={() => {
                      setSubMenus(item.submenus);
                      setToggleSubMenu(true);
                    }}
                    className="link"
                  >
                    {item.label}
                    <FaChevronRight />
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <button className="menu">
            <FaShoppingCart />
          </button>
          <div className="sub-menu">
            <button onClick={() => setToggleSubMenu(false)}>
              <FaArrowLeft />
              Voltar
            </button>

            <ul>
              {submenus.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="input">
            <input type="text" placeholder="Faça sua pesquisa aqui" />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="wrapper">
          <p>&copy; 2022 Salão de Jogos por Valcinei Junior.</p>
          <div className="social">
            <ul>
              <li>
                <Link href={`s`}>
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link href={`s`}>
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Layout;
