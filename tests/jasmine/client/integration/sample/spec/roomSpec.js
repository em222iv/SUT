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

describe("Template:Home", function() {

    beforeEach(function(done) {
        Tracker.afterFlush(function(){
            done();
        });
    });

    it("should render rooms on home-template", function() {
        expect($("#rooms").children().first().children().first().text()).toBe(Rooms.findOne().name);
    });

    it("should have #addRoomInput input field and #addRoomButton", function() {
        expect($("#rooms").find('#addRoomInput')).toExist();
        expect($("#rooms").find('#addRoomButton')).toExist();
    });

});