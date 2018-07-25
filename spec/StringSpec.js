describe("String", function() {

    describe("getRandom(N)", function() {

        it("returns a string of length N", function() {
            expect(String.getRandom(2).length).toEqual(2);
            expect(String.getRandom(9).length).toEqual(9);
            expect(String.getRandom(20).length).toEqual(20);
            expect(String.getRandom(52).length).toEqual(52);
        });

        it("returns a different string each time", function() {
            expect(String.getRandom(10)).not.toEqual(String.getRandom(10));
            expect(String.getRandom(20)).not.toEqual(String.getRandom(20));
        });

        it("returns a string consisting in alphanumeric characters", function() {
            expect(/[^a-zA-Z0-9]/.test(String.getRandom(10))).toEqual(false);
            expect(/[^a-zA-Z0-9]/.test(String.getRandom(20))).toEqual(false);
        });

    });

});
