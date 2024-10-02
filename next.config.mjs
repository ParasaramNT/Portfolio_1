/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
      ignoreBuildErrors: true, // Ignores TypeScript errors during the build
    },
  };
  
  export default nextConfig;