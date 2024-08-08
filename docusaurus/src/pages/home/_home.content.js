import React from 'react';

export default {
  page: {
    title: 'AquaBera’s documentation',
    description: 'Automate and optimize your crypto liquidity provision with AquaBera.',
  },
  carousel: [
    {
      backgroundImgSrc: require('@site/static/img/assets/home/carousel-background--cloud.png').default,
      variant: 'cloud',
      title: 'AquaBera App',
      description: (
        <>
          {'Learn more on the '}
          <a href="http://www.aquabera.com" target="_blank">product page</a>.
        </>
      ),
      button: {
        label: 'AquaBera App docs',
        decorative: '☁️',
        to: '/cloud/intro',
      },
    },
    {
      title: 'Can’t wait to use AquaBera?',
      description: (
        <>
          {'If demos are more your thing, we have a '}
          <a href="https://youtube.com/placeholder" target="_blank">video demo</a>.
        </>
      ),
      button: {
        label: 'Quick start',
        decorative: '🚀',
        to: '/dev-docs/quick-start',
      },
    },
  ],
  categories: [
    {
      cardLink: '/dev-docs/intro',
      cardTitle: 'Developer Documentation',
      cardDescription: 'All you need to get your project up-and-running, and become an AquaBera expert',
      cardImgSrc: require('@site/static/img/assets/home/preview--dev-docs.jpg').default,
      linksIconSrc: require('@site/static/img/assets/icons/code.svg').default,
      linksIconColor: 'green',
      links: [
        {
          label: 'Installation guides',
          to: '/dev-docs/installation',
        },
        {
          label: 'Database configuration',
          to: '/dev-docs/configurations/database',
        },
        {
          label: 'REST API',
          to: '/dev-docs/api/rest',
        },
        {
          label: 'GraphQL API',
          to: '/dev-docs/api/graphql',
        },
        {
          label: 'Back-end customization',
          to: '/dev-docs/backend-customization',
        },
      ],
    },
    {
      cardLink: '/user-docs/intro',
      cardTitle: 'User Guide',
      cardDescription: 'Get the most out of the admin panel with our user guide',
      cardImgSrc: require('@site/static/img/assets/home/preview--user-guides.jpg').default,
      linksIconSrc: require('@site/static/img/assets/icons/feather.svg').default,
      linksIconColor: 'blue',
      links: [
        {
          label: 'Getting started in the admin panel',
          to: '/user-docs/intro#accessing-the-admin-panel',
        },
        {
          label: 'Creating content-types',
          to: '/user-docs/content-type-builder/creating-new-content-type',
        },
        {
          label: 'Configuring content-types fields',
          to: '/user-docs/content-type-builder/configuring-fields-content-type',
        },
        {
          label: 'Writing content',
          to: '/user-docs/content-manager/writing-content',
        },
        {
          label: 'Setting up the admin panel',
          to: '/user-docs/settings/admin-panel',
        },
      ],
    },
    {
      cardLink: '/community/intro',
      cardTitle: 'Community',
      cardDescription: 'Join the AquaBera community to connect and collaborate with others',
      cardImgSrc: require('@site/static/img/assets/home/preview--dev-docs.jpg').default, // Using existing image
      linksIconSrc: require('@site/static/img/assets/icons/code.svg').default, // Using existing icon
      linksIconColor: 'purple',
      links: [
        {
          label: 'Forum',
          to: 'https://forum.aquabera.com',
        },
        {
          label: 'Discord',
          to: 'https://discord.com/invite/aquabera',
        },
        {
          label: 'GitHub',
          to: 'https://github.com/labs-solo/aberabook',
        },
      ],
    },
  ],

  /** Help us to improve the documentation */
  huitd: {
    label: 'Help us improve the documentation',
    href: 'https://github.com/labs-solo/aberabook',
  },
};
