module.exports = {
  title: 'SEE-GRID Certification Authority',
  tagline: 'SEE-GRID CA provides Catch-All PKI services to organizations collaborating with GRNET and the European Grid Initiative.',
  url: 'https://see-grid-ca.hellasgrid.gr',
  baseUrl: '/',
//  baseUrl: 'see-grid-ca.hellasgrid.gr',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.png',
  organizationName: 'GRNET', // Usually your GitHub org/user name.
  projectName: 'see-grid-ca.hellasgrid.gr', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'GRNET',
        src: 'img/grnet-logo.png',
      },
      items: [
        {
          to: 'documents/about',
          label: 'About',
          position: 'left',
        },
        {
          to: 'documents/',
          activeBasePath: 'documents',
          label: 'Documentation',
          position: 'left',
        },

//        {
//          href: 'https://github.com/hellasgrid/see-grid-ca.hellasgrid.gr',
//          label: 'GitHub',
//          position: 'right',
//        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Trust Anchors',
              href: 'https://see-grid-ca.hellasgrid.gr/documents/about#trust-anchors',
              position: 'center',
              target: '_self',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Certificate Policy and Certification Practice Statement (CP/CPS)',
              href: 'https://see-grid-ca.hellasgrid.gr/documents/about#certificate-policy-and-certification-practice-statement-cpcps',
              position: 'center',
              target: '_self',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Registration Authorities',
              href: 'https://see-grid-ca.hellasgrid.gr/documents/about#registration-authorities',
              position: 'center',
              target: '_self',
            },
          ],
        },
      ],
      copyright: `<img alt="grnet" src="/img/grnet-logo.png" height="50px"> </a> <br /> Copyright © ${new Date().getFullYear()} <a href="http://www.grnet.gr/"> GRNET </a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/documents/',
          path: 'documents',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
//          editUrl:
//            'https://github.com/hellasgrid/see-grid-ca.hellasgrid.gr',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
