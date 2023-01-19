import { FC, ReactNode } from 'react';

import * as S from './styles';

interface IActionButton {
  icon?: string | ReactNode;
  children: ReactNode;
  themeColor: 'blue' | 'light' | 'white';
}

export const ActionButton: FC<IActionButton> = ({
  icon,
  children,
  themeColor,
}) => {
  return (
    <S.Container themeColor={themeColor}>
      {icon ? (
        typeof icon === 'string' ? (
          <img src={icon} alt="Icon" />
        ) : (
          icon
        )
      ) : null}
      {children}
    </S.Container>
  );
};
