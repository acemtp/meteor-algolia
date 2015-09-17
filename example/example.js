// Client side Algolia example. It doesn't use/need for the server side code
if (Meteor.isClient) {
  Session.setDefault('content', []);

  Meteor.startup(function () {
    var client = AlgoliaSearch('latency', 'dce4286c2833e8cf4b7b1f2d3fa1dbcb');
    var index = client.initIndex('movies');
    console.log('Searching "ace" movies...');
    index.search('ace', function searchDone(err, content) {
      if(err) { console.error('Algolia returned an error', err); }
      else {
        //console.log('content', content);
        console.log(content.nbHits + ' results. Here are the ' + content.hitsPerPage + ' first:');
        Session.set('content', content);
      }
    });
  });

  Template.movies.helpers({
    content: function () {
      return Session.get('content');
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Client side Algolia example. It doesn't use/need for the client side code
if (Meteor.isServer) {
  Meteor.startup(function () {
    var client = AlgoliaSearch('latency', 'dce4286c2833e8cf4b7b1f2d3fa1dbcb');
    var index = client.initIndex('movies');
    console.log('Searching "ace" movies...');
    index.search('ace', function searchDone(err, content) {
      if(err) { console.error('Algolia returned an error', err); }
      else {
        //console.log('content', content);
        console.log(content.nbHits + ' results. Here are the ' + content.hitsPerPage + ' first:');
        _.each(content.hits, function (m) {
          console.log('- ', m.title, m.year);
        });
      }
    });
  });
}
