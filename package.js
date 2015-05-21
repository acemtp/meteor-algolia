Package.describe({
  name: 'acemtp:algolia',
  summary: 'Package to handle the blazing fast Algolia search egnine (client and server)',
  version: '3.3.2',
  git: 'https://github.com/acemtp/meteor-algolia.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('server.js', 'server');
  api.addFiles('algoliasearch-client-js/dist/algoliasearch.js', 'client');
  api.export('Algolia', 'server');
  api.export('AlgoliaSearch', 'client');
});

Npm.depends({
  'algoliasearch': '3.3.2'
});
