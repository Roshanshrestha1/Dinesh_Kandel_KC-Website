/** @type {import('next').NextConfig} */
const repo = "Dinesh_Kandel_KC-Website";
const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/img-loader.ts",
  },
};

export default nextConfig;
