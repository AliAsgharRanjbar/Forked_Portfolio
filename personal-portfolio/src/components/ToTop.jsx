import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Center, Text, Transition, rem } from '@mantine/core';

export function ToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="scale" mounted={scroll.y > 0} duration={750} timingFunction="ease">
          {(transitionStyles) => (
            <Button
              radius="50%"
              style={{ ...transitionStyles, height: "4em", width: "4em" }}
              onClick={() => scrollTo({ y: 0 })}
            >
            <Center maw={400} h={100} mx="auto">
            <IconArrowUp size="1.1rem" />
            </Center>
            </Button>
          )}
        </Transition>
      </Affix>
  );
}