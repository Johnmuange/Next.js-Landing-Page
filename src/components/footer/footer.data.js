import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import linkedin from 'assets/images/icons/linkedin.png';
import instagram from 'assets/images/icons/instagram.png';

export const menuItems = [
  {
    id: 2,
    title: 'Links',
    items: [
      {
        path: 'https://3techagency.com/contactus',
        label: 'Customer Support',
      },
      {
        path: 'https://3techagency.smblogin.com/public/store/XKVJ/default/',
        label: 'Shop',
      },
    ],
  },
  {
    id: 3,
    title: 'Company',
    items: [
      {
        path: 'https://3techagency.smblogin.com/',
        label: 'Register ',
      },
      {
        path: 'mailto:sales@3techagency.com',
        label: 'Inquiries',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: 'https://web.facebook.com/3techagency/?_rdc=1&_rdr',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: 'https://twitter.com/3techagency',
        icon: twitter,
        label: 'Twitter',
      },
      {
        path: 'https://ke.linkedin.com/company/3techagency',
        icon: linkedin,
        label: 'LinkedIn',
      },
      {
        path: 'https://www.instagram.com/3techagency/',
        icon: instagram,
        label: 'Instagram',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
