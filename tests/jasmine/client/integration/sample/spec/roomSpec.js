describe("Client: Rooms", function() {

    beforeEach(function (done) {
        Tracker.afterFlush(function(){
            done();
        });
    });

    it("should be rooms avaivlbe on client", function() {
        expect(Rooms.find().count()).toBeGreaterThan(0);
    });

});

describe("Template", function() {

    beforeEach(function() {
        Tracker.afterFlush(function(){
            done();
        });
    });

    it("should render rooms on home-template", function() {
        expect($("#rooms").children().length).toBeGreaterThan(0)
    });

});