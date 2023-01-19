import { FC } from 'react';
import { Menu } from '../../components/Menu';
import { Hero } from '../../components/sections/Home/Hero';

import { Container } from './styles';

export const Home: FC = () => {
  return (
    <>
      <Menu />
      <main>
        <Hero />
      </main>
    </>
  );
};
