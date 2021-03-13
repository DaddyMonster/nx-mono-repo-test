module.exports = {
  purge: {
    enabled: true,
    content: [
      `${__dirname}/pages/**/*.{js,ts,jsx,tsx}`,
      `${__dirname}/../../libs/**/*.{js,ts,jsx,tsx}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prime: '#B380AA',
      },
      fontFamily: {
        logo: ['S-CoreDream-9Black', 'Roboto'],
        menu: ['GmarketSansBold', 'Roboto'],
        guide: ['GmarketSansMedium', 'Roboto'],
        text: ['GmarketSansLight', 'Roboto'],
        pen: ['KyoboHand', 'Roboto'],
        pretty: ['S-CoreDream-2ExtraLight', 'Roboto'],
        pretty2: ['Open Sans Condensed', 'Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
