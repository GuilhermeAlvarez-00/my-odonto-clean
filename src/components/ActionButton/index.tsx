import { FC, ReactNode } from 'react';

import * as S from './styles';

interface IActionButton {
  icon: string | ReactNode;
  children: ReactNode;
}

export const ActionButton: FC<IActionButton> = ({ icon, children }) => {
  return (
    <S.Container>
      {typeof icon === 'string' ? <img src={icon} alt="Icon" /> : icon}
      {children}
    </S.Container>
  );
};
