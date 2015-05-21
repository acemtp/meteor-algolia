# meteor-algolia

Package to handle the blazing fast Algolia search engine (client and server).

## Example

### Server side

    var client = new Algolia(<algolia_application_id>, <algolia_private_id>);
    var index = client.initIndex(<algolia_index_name>);
    // array contains the data you want to search
    var array = [ { objectID: 1, text: "Hello" }, { objectID: 2, text: "World" }  ];
    index.saveObjects(array, function(error, content) {
      if (error) console.error('ERROR:', content.message);
      else console.log('DONE');
    });

### Client side

    algolia = new AlgoliaSearch(<algolia_application_id>, <algolia_public_id>);
    index = algolia.initIndex(<algolia_index_name>);
    index.search("hello", function(success, content) {
      if (!success) {
        console.log('Error: ' + content.message);
        return;
      }
      console.log('content', content);
    });
