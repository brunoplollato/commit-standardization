import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <>
      <h1>Menu</h1>
      {children}
    </>
  );
}

export default Menu;
