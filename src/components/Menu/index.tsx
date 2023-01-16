import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { links } from './links';
import { ActionButton } from '../ActionButton';

import logoImg from '../../assets/images/logo.png';
import calendarIcon from '../../assets/icons/white-calendar.png';

import * as S from './styles';

export const Menu: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img
            src={logoImg}
            alt="Logo da Odonto Clean, representada por um dente azul escuro e azul claro"
            className="logo"
          />
          <p className="logo__title">
            Odonto Clean <br />
            <span className="logo__subtitle">Clínica odontológica</span>
          </p>
        </S.Logo>

        <S.Nav className={`${isMenuActive ? 'active' : null}`}>
          {links.map((link, index) => (
            <a
              key={link.path}
              className={`${index === 0 ? 'nav__link active' : 'nav__link'}`}
              href={link.path}
            >
              {link.label}
            </a>
          ))}
          <S.NavActionButton>
            <ActionButton icon={calendarIcon}>Agendar</ActionButton>
          </S.NavActionButton>
        </S.Nav>

        <S.MobileMenuButton onClick={handleToggleMobileMenu}>
          <GiHamburgerMenu />
        </S.MobileMenuButton>
      </S.Wrapper>
    </S.Container>
  );
};
