import { FC } from 'react';

import { links } from './links';
import { ActionButton } from '../ActionButton';

import logoImg from '../../assets/images/logo.png';
import calendarIcon from '../../assets/icons/white-calendar.png';

import * as S from './styles';

export const Menu: FC = () => {
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

        <S.Nav>
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
      </S.Wrapper>
    </S.Container>
  );
};
