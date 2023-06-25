import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Center, Text, Transition, rem } from '@mantine/core';

function ToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="scale" mounted={scroll.y > 757} duration={750} timingFunction="ease">
          {(transitionStyles) => (
            <Button
              // color='dark'
              // color='indigo'
              // variant="outline"
              // variant="light"
              radius="50%"
              // rightIcon={<IconArrowUp size="1rem" />}
              // leftIcon={<IconArrowUp size="1rem" />}
              style={{ ...transitionStyles, height: "4em", width: "4em" }}
              // style={{ height: "3rem", width: "3rem" }}
              onClick={() => scrollTo({ y: 0 })}
              // size="md"
            >
            <Center maw={400} h={100} mx="auto">
            <IconArrowUp size="1.1rem" />
            </Center>
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ToTop;