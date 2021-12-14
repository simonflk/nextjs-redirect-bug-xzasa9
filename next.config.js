module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/content',
        destination: '/content/alpha',
        permanent: false,
      },
    ];
  },
};
