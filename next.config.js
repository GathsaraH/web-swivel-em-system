/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/employee/list",
        permanent: true,
      },
    ];
  },
  images:{
    domains: ['mui.com','randomuser.me','api.multiavatar.com','api.dicebear.com','i.ibb.co'],
  }
};

module.exports = nextConfig;
