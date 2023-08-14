import { useState } from 'react';
import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  MediaQuery,
  Menu,
  Avatar,
} from '@mantine/core';
import HeaderLink from 'components/HeaderLink';
import logo from 'assets/images/logo.png';
import headerLinks from 'assets/data/headerLinks.json';

function Header() {
  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const items = headerLinks.map((item) => (
    <HeaderLink key={item.label} link={item.link} label={item.label} />
  ));

  return (
    <MantineHeader height={60} fixed>
      <Container
        display='flex'
        h='100%'
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Avatar
          component='a'
          href='https://github.com/Doooodie'
          target='_blank'
          src={logo}
          radius='xl'
          alt='My avatar'
        />

        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Group spacing={5}>{items}</Group>
        </MediaQuery>

        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Menu
            width='100%'
            offset={15}
            opened={opened}
            onChange={setOpened}
            transitionProps={{ transition: 'pop-top-right', duration: 200 }}
          >
            <Menu.Target>
              <Burger title={label} opened={opened} size='sm' />
            </Menu.Target>

            <Menu.Dropdown>{items}</Menu.Dropdown>
          </Menu>
        </MediaQuery>
      </Container>
    </MantineHeader>
  );
}

export default Header;
