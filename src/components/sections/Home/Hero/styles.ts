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
  position: relative;

  @media (max-width: 948px) {
    height: calc(33.25rem - 5rem);
    background-size: 100% 12.5rem;
    background-position: top;
    padding-inline: 1rem;
  }

  @media (max-width: 392px) {
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: min(100%, 73.125rem);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  @media (max-width: 948px) {
    padding-block: 14.625rem 2.75rem;
  }
`;

export const Text = styled.div`
  .hero__subtitle {
    color: var(--blue-750);
    font-size: clamp(1.56rem, 2.5vw, 1.75rem);
  }

  h1 {
    font-size: clamp(2.1875rem, 5vw, 2.75rem);
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

  @media (max-width: 392px) {
    flex-direction: column;
  }
`;

export const FloatCard = styled.aside`
  background-color: white;
  position: absolute;
  bottom: 4.8125rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  border-radius: 1.875rem 0.3125rem 0.3125rem 0.3125rem;
  box-shadow: 0px 10px 25px rgba(55, 121, 215, 0.25);

  p {
    font-size: 1rem;

    &:first-child {
      color: var(--blue-750);
    }

    &:last-child {
      color: var(--blue-800);
      font-weight: 600;
    }
  }

  @media (max-width: 948px) {
    display: none;
  }
`;
