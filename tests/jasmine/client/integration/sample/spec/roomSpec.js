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
        this.name = "testing room"
        this.room = new Room(this.name);
        Tracker.afterFlush(function(){
            FlowRouter.go('/');
            done();
        });
    });
    describe("HTML elements", function() {
        it("should render rooms on home-template", function() {
            var numberOfRooms = Rooms.find().count();
            expect($("#rooms").children().length).toBe(numberOfRooms);
        });
        it("should have #addRoomInput input field and #addRoomButton", function() {
            var home = $(".home");
            expect(home.find('#addRoomInput')).toExist();
            expect(home.find('#addRoomButton')).toExist();
        });

        it("should have .removeRoom element", function() {
            var home = $(".home");
            expect(home.find('.removeRoom')).toExist();
        });

        it("should be a input tag for each room", function() {
            expect($("#rooms").children().first().children().first().attr('type')).toBe('text');
        });

        it("should be a placeholder with each rooms name", function() {
            expect($("#rooms").children().first().children().first().attr('placeholder')).toBe("testing room");
        });

    });

    describe("JS Events", function() {



        it('should use click event on home template, no expectation, just checks that it exists', function () {
            var text = $('#addRoomInput');
            text.val(this.name);
            expect(Template.home.fireEvent('click #addRoomButton'));
        });

        it('should call update-event on blur with empty string', function () {
            expect(Template.home.fireEvent('blur .updateRoomName'));
        });

        it('should call remove-event', function () {
            this.room = new Room("new Room");
            expect(Template.home.fireEvent('click .removeRoom',{event: {target: this.room.id}}));
        });
    });
});

