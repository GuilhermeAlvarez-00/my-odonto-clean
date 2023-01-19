import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 37.125rem;
  background: var(--blue-300);
  background-image: url('../../../src/assets/images/home-header.png');
  background-repeat: no-repeat;
  background-size: 50% 100%;
  background-position: right;
`;

export const Wrapper = styled.div`
  width: min(100%, 73.125rem);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const Text = styled.div`
  .hero__subtitle {
    color: var(--blue-750);
    font-size: clamp(1.56rem, 2.5vw, 1.75rem);
  }

  h1 {
    font-size: 2.1875rem;
    margin-top: 0.5rem;

    .hero__highlight {
      padding: 0 0.25rem;
      border-radius: 0.3125rem;
      background-color: #aad6f2;
      color: var(--blue-500);
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 2.1875rem;
`;
