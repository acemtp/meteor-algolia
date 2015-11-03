Package.describe({
  name: 'acemtp:algolia',
  summary: 'Package to handle the blazing fast Algolia search engine (works on client and server)',
  version: '3.9.1',
  git: 'https://github.com/acemtp/meteor-algolia.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles(['algoliasearch-client-js/dist/algoliasearch.js', 'client.js'], 'client');
  api.addFiles('server.js', 'server');

  api.export('AlgoliaSearch', ['client', 'server']);
});

Npm.depends({
  'algoliasearch': '3.9.1'
});
