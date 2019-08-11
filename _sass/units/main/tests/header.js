casper.test.begin('Visual regression test for the main unit.', function(test) {

  casper.loadPath('units/main')

  .loadFixture('main')

  .then(function () {
    phantomcss.screenshot('.main', 'main unit');
  })

  .run(function () {
    test.done();
  });

});
