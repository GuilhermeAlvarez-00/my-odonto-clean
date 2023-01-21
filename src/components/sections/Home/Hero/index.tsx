import { FC } from 'react';

import { ActionButton } from '../../../ActionButton';

import whatsappSvg from '../../../../assets/icons/whatsapp-icon.svg';
import * as S from './styles';

export const Hero: FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Text>
          <span className="hero__subtitle">20 Anos de experiência</span>
          <h1>
            Realizando sonhos de um
            <span className="hero__highlight">Sorriso Perfeito!</span>
          </h1>
        </S.Text>
        <S.ButtonWrapper>
          <ActionButton themeColor="blue" icon={whatsappSvg}>
            Entre em contato
          </ActionButton>
          <ActionButton themeColor="light">Entre em contato</ActionButton>
        </S.ButtonWrapper>
      </S.Wrapper>

      <S.FloatCard>
        <p>Entre em contato</p>
        <p>(61) 95682.5324</p>
      </S.FloatCard>
    </S.Container>
  );
};
