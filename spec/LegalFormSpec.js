describe("Utils", function() {

  it("getRandomId() starts with legal-form-dialog-", function() {
    var expectedStart = 'legal-form-dialog-';
    expect(Utils.getRandomId().substring(0, expectedStart.length)).toEqual(expectedStart);
  });

});
