module.exports = {
  name: 'prism',

  'should add the langauge class to the pre element': function(test) {
    test.open('http://localhost:3000/home')
    .wait(500)
      .assert.exists('pre.language-css', 'pre element and language class one it')
    .done();
  }
}