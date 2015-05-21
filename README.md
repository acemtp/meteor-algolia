# meteor-algolia

Meteor package to handle the blazing fast [Algolia](http://algolia.com) search engine (working on client and server).

## Example

### Server side

    var client = AlgoliaSearch(<algolia_application_id>, <algolia_private_id>);

    var index = client.initIndex(<algolia_index_name>);

    // array contains the data you want to save in the index
    var array = [ { objectID: 1, text: 'Hello' }, { objectID: 2, text: 'World' }  ];
    index.saveObjects(array, function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });

### Client side

    var client = AlgoliaSearch(<algolia_application_id>, <algolia_public_id>);

    var index = client.initIndex(<algolia_index_name>);

    // search 'hello' in the index
    index.search('hello', function (error, content) {
      if (error) console.error('Error:', error);
      else console.log('Content:', content);
    });

### Changelog

- The global object is now called **AlgoliaSearch** both on client and server
- Moved to algolia v3+ [check the migration guide](https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x)
