import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding-inline: 1rem;
  box-shadow: 0px 10px 25px rgba(55, 121, 215, 0.25);
  position: relative;
`;

export const Wrapper = styled.div`
  width: min(100%, 73.125rem);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.25rem;

  img {
    width: 2.1875rem;
    height: 2.8125rem;
  }

  p.logo__title {
    font-size: 1.0625rem;
    font-weight: 700;

    span.logo__subtitle {
      font-size: 0.8125rem;
      font-weight: 400;
    }
  }
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.875rem;

  .nav__link {
    font-size: 1.25rem;
    color: var(--blue-800);
    transition: color 0.2s;

    &.active {
      color: var(--blue-500);
      font-weight: 700;
    }

    &:hover {
      color: var(--blue-500);
    }
  }

  @media (max-width: 948px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--blue-200);
    z-index: 999;
    padding-top: 2rem;
    opacity: 0;
    transition: 0.2s;

    .nav__link {
      font-size: 1.125rem;
    }

    &.active {
      top: 5rem;
      opacity: 1;
      height: calc(100vh - 5rem);
    }
  }
`;

export const NavActionButton = styled.div`
  padding-left: 1.375rem;
  position: relative;

  button {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      border: 1px solid rgba(2, 14, 31, 0.36);
    }
  }

  @media (max-width: 948px) {
    padding-left: 0;
    button {
      &::after {
        width: 100%;
        height: 0;
        top: -0.75rem;
      }
    }
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  width: 1.875rem;
  height: 1.875rem;
  background: var(--blue-700);
  cursor: pointer;

  @media (max-width: 948px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    font-size: 1rem;
    border-radius: 0.1875rem;
    color: var(--blue-500);
  }
`;
