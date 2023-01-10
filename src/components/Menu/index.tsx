import React from 'react';

import { links } from './links';

import logoImg from '../../assets/images/logo.png';

import * as S from './styles';

export const Menu: React.FC = () => {
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
            Odonto Clean
            <p className="logo__subtitle">Clínica odontológica</p>
          </p>
        </S.Logo>

        <S.Nav>
          {links.map((link) => (
            <a href={link.path}>{link.label}</a>
          ))}
        </S.Nav>

        <S.ButtonEvent></S.ButtonEvent>
      </S.Wrapper>
    </S.Container>
  );
};
