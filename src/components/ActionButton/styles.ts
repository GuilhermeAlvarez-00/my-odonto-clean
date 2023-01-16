import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  background: var(--blue-gradient);
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.1875rem;
  font-size: 1.125rem;
  color: white;

  @media (max-width: 948px) {
    font-size: 0.9375rem;
  }
`;
