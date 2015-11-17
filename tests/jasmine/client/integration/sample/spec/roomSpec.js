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
        this.name = "testing room4"
        this.room = new Room(this.name);
        Tracker.afterFlush(function(){
            FlowRouter.go('/');
            done();
        });
    });

    it("should render rooms on home-template", function() {
        var numberOfRooms = Rooms.find().count();
        expect($("#rooms").children().length).toBe(numberOfRooms);
    });

    it("should have #addRoomInput input field and #addRoomButton", function() {
        expect($(".home").find('#addRoomInput')).toExist();
        expect($(".home").find('#addRoomButton')).toExist();
    });

    it('should use click event on home template, no expectation, just checks that it exists', function() {
        var text = $('#addRoomInput');
        text.val(this.name);
        expect(Template.home.fireEvent('click #addRoomButton'));
    });

    it("should be a input tag for each room", function() {
        expect($("#rooms").children().first().children().first().attr('type')).toBe('text');
    });

});