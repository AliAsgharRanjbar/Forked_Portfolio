import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

export function HamburgerMenu() {
    
  const [opened, setOpened] = useState(false)
  return <Hamburger toggled={opened} toggle={setOpened} color="white" duration={0.4} size={25} />;
}