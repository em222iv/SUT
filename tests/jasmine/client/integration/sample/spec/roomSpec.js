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
        this.room1 = Rooms.findOne();
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
            var room = $(".room");
            expect(room.find('.removeRoom')).toExist();
        });

        it("should be a input tag for each room", function() {
            expect($("#rooms").children().first().children().first().attr('type')).toBe('text');
        });

        it("should be a placeholder with each rooms name", function() {
            expect($("#rooms").children().first().children().first().attr('placeholder')).toBe(this.room1.name);
        });

    });

    describe("JS Events", function() {


        it('should call update-event', function () {
            expect(Template.home.fireEvent('blur .updateRoomName',{event: {target:{id: this.room1._id,value: "updatedName"}}}));
        });

        it('should be updated name on first element', function () {
            expect($("#rooms").children().first().children().first().attr('placeholder')).toBe(Rooms.findOne({ _id: this.room1._id}).name);
        });



    });
});

