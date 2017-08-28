ready(function() {

  var search = instantsearch({
  // Replace with your own values
  appId: 'M6LSMSSZT8',
  apiKey: 'b78b544183733e3e65df55cbb8fe359c', // search only API key, no ADMIN key
  indexName: 'Item',
  urlSync: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input'
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
      }
    })
  );
  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination'
    })
  );
search.start();
});
