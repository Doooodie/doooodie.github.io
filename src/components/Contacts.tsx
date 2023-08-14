import { Title, Button, Center, Stack } from '@mantine/core';

function Contacts() {
  return (
    <Center>
      <Stack>
        <Title>Got any questions?</Title>
        <Button component='a' href='mailto:unfair.slenderman@gmail.com' target='_blank' size='lg'>
          Feel free to contact!
        </Button>
      </Stack>
    </Center>
  );
}

export default Contacts;
