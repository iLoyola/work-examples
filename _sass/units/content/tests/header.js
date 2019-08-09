casper.test.begin('Visual regression test for the content unit.', function(test) {

  casper.loadPath('units/content')

  .loadFixture('content')

  .then(function () {
    phantomcss.screenshot('.content', 'content unit');
  })

  .run(function () {
    test.done();
  });

});
