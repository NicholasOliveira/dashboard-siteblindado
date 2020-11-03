const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'view_quilt',
    },
    {
      name: 'Certificados SSL',
      url: '/ssl',
      icon: 'lock_icon',
    },
    {
      name: 'Blindagem de site',
      url: '/blindagem',
      icon: 'phonelinklock_icon',
    },
    {
      name: 'Loja',
      url: '/loja',
      icon: 'store_icon',
    },
    {
      name: 'WAF',
      icon: 'shop_icon',
      children: [
        {
          name: 'Child31',
          url: '/child31',
        },
        {
          name: 'Child32',
          url: '/child32',
        },
        {
          name: 'Child33',
          url: '/child33',
        },
      ],
    },
  ],
  system: [
    {
      name: 'Sistema',
      url: '/sistema',
      icon: 'build_icon',
    },
    {
      name: 'Organizações',
      icon: 'business_icon',
      children: [
        {
          name: 'Child41',
          url: '/child41',
        },
        {
          name: 'Child42',
          url: '/child42',
        },
      ],
    },
  ],
};

export default menuIndex;
