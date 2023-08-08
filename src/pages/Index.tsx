import Header from 'layouts/Header';
import Layout from 'layouts/Layout';
import Footer from 'layouts/Footer';

function Index() {
  return (
    <>
      <Header
        links={[
          { link: '#about', label: 'About' },
          { link: '#experience', label: 'Experience' },
          { link: '#portfolio', label: 'Portfolio' },
          { link: '#contacts', label: 'Contacts' },
        ]}
      />
      <Layout />
      <Footer />
    </>
  );
}

export default Index;
