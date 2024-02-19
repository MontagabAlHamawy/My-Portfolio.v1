/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  basePath: '',
  async rewrites() {
    return [
      {
        source: '/about', // URL path
        destination: '/about', // Actual file path
      },
      {
        source: '/projects', // URL path for the projects page
        destination: '/projects', // Actual file path for the projects page
      },
      {
        source: '/skills', // URL path for the skills page
        destination: '/skills', // Actual file path for the skills page
      },
      {
        source: '/contact', // URL path for the contact page
        destination: '/contact', // Actual file path for the contact page
      },
      // Add other rewrites as needed for additional pages
    ];
  },
};

module.exports = nextConfig;
