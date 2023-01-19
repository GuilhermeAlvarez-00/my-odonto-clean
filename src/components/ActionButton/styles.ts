import styled, { css } from 'styled-components';

interface IContainer {
  themeColor: string;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.1875rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: filter 0.2s;

  @media (max-width: 948px) {
    font-size: 0.9375rem;
  }

  ${({ themeColor }) =>
    themeColor === 'blue'
      ? css`
          color: white;
          background: var(--blue-gradient);
        `
      : themeColor === 'light'
      ? css`
          color: var(--blue-500);
          background-color: var(--blue-300);
          border: 1px solid rgba(2, 14, 31, 0.09);
        `
      : css`
          color: var(--blue-800);
          background-color: var(--blue-200);
        `}

  &:hover {
    filter: brightness(0.9);
  }
`;
