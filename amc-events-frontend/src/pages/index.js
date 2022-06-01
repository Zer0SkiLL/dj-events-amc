import Layout from '@layout/Layout';
import FooterShort from '@layout/Footer/FooterShort';
import PageHeader from '@components/common/PageHeader';

export default function Home() {
  return (
    <Layout>    
      <PageHeader title='Welcome - Check out the latests Events' />
      <FooterShort footerGradient />
    </Layout>
  );
}
