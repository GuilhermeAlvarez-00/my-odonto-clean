import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding-inline: 1rem;
  box-shadow: 0px 10px 25px rgba(55, 121, 215, 0.25);
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

    &.active {
      color: var(--blue-500);
      font-weight: 700;
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
`;
