/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';
import icon4 from 'assets/images/icons/4.png';
import icon5 from 'assets/images/icons/5.png';
import icon6 from 'assets/images/icons/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: 'https://3techagency.com/seo',
    title: 'Rank Easily on Google',
    description: `Improve customer acquisition, local visibility, and brand credibility on the search engines`,
  },
  {
    id: 2,
    icon: icon2,
    path: 'https://3techagency.com/searchenginemarketing',
    title: 'Smart Advertising',
    description: `The affordability of digital advertising means that local businesses can compete with larger chains and franchises.`,
  },
  {
    id: 3,
    icon: icon3,
    path: 'https://3techagency.com/contentmarketing',
    title: 'Marketing Automation',
    description: `Automate your email marketing content,bulk sms & much more. Engage local businesses with timely, personalized information.`,
  },
  {
    id: 4,
    icon: icon4,
    path: 'https://3techagency.com/webdesign',
    title: 'Build The Incredible',
    description: `Create amazing websites & online stores in minutes! With access to a a wide range of tools & crafting resources.`,
  },
  {
    id: 5,
    icon: icon5,
    path: 'https://3techagency.com/socialmediamarketing',
    title: 'Stay Social',
    description: `Scheduling & Marketing app save's you time posting to multiple networks from one, simple to use social media marketing platform `,
  },
  {
    id: 6,
    icon: icon6,
    path: 'https://3techagency.com/ecommerce',
    title: 'Sell Frictionlessly',
    description: `Getting started with eCommerce can be a daunting task, here's why we here.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" variant="section.ultimateFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Ultimate features to get you started"
          description="Focus only on the meaning, we take care of everything."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [60, 60, 60, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, 260, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
