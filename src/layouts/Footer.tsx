import {
  Container,
  Group,
  ActionIcon,
  Text,
  Footer as MantineFooter,
  MediaQuery,
} from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

function Footer() {
  return (
    <MantineFooter height='auto' p='md'>
      <MediaQuery smallerThan='xs' styles={{ flexDirection: 'column' }}>
        <Container display='flex' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Text>With ❤️ from Doodie, 2023</Text>

          <MediaQuery smallerThan='xs' styles={(theme) => ({ marginTop: theme.spacing.md })}>
            <Group spacing={0} position='right' noWrap>
              <ActionIcon
                size='lg'
                component='a'
                href='https://www.linkedin.com/in/kostya-yurkevich'
                target='_blank'
              >
                <IconBrandLinkedin size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size='lg'
                component='a'
                href='https://github.com/Doooodie'
                target='_blank'
              >
                <IconBrandGithub size='1.05rem' stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                size='lg'
                component='a'
                href='mailto:unfair.slenderman@gmail.com'
                target='_blank'
              >
                <IconMail size='1.05rem' stroke={1.5} />
              </ActionIcon>
            </Group>
          </MediaQuery>
        </Container>
      </MediaQuery>
    </MantineFooter>
  );
}

export default Footer;
