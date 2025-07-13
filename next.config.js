const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/snappybits-website' : '',
  assetPrefix: isGithubPages ? '/snappybits-website/' : '',
};

module.exports = nextConfig; 