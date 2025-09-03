module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/9xTd9KfDsC",
        permanent: true,
      },
    ];
  },
};
