import { AppShell, Container, Divider, MantineProvider } from '@mantine/core';
import About from 'components/About';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import Contacts from 'components/Contacts';
import Header from './Header';
import Footer from './Footer';
import 'styles/main.css';

function Layout() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withNormalizeCSS withGlobalStyles>
      <AppShell header={<Header />} footer={<Footer />} fixed={false}>
        <Container py={80} id='about'>
          <section>
            <About />
          </section>
          <Divider mx='auto' my={60} maw={200} id='experience' />
          <section>
            <Experience />
          </section>
          <Divider mx='auto' my={60} maw={200} id='projects' />
          <section>
            <Projects />
          </section>
          <Divider mx='auto' my={60} maw={200} id='contacts' />
          <section>
            <Contacts />
          </section>
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default Layout;
