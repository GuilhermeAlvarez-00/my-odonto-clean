import { FC } from 'react';
import { ActionButton } from '../../components/ActionButton';

export const DesignSystem: FC = () => {
  return (
    <>
      <ActionButton themeColor="blue" icon={<span>.</span>}>
        Button
      </ActionButton>
      <ActionButton themeColor="light" icon={<span>.</span>}>
        Button
      </ActionButton>
      <ActionButton themeColor="white" icon={<span>.</span>}>
        Button
      </ActionButton>
    </>
  );
};
