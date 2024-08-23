const SitemapGenerator = require('sitemap-generator');

// Replace with your website URL
const generator = SitemapGenerator('https://octotech-a8977.web.app/', {
  stripQuerystring: false
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// Start the crawler
generator.start();
