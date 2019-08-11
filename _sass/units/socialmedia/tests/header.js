casper.test.begin('Visual regression test for the socialmedia unit.', function(test) {

  casper.loadPath('units/socialmedia')

  .loadFixture('socialmedia')

  .then(function () {
    phantomcss.screenshot('.socialmedia', 'socialmedia unit');
  })

  .run(function () {
    test.done();
  });

});
