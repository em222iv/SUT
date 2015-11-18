describe("JS Events", function() {
    beforeEach(function(done) {
        this.name = "testing room"
        this.room = new Room(this.name);
        Tracker.afterFlush(function(){
            this.room1 = Rooms.findOne();
            FlowRouter.go('/');
            done();
        });
    });
    it('should use click event on home template, no expectation, just checks that it exists', function () {
        spyOn(Rooms, 'insert');
        var text = $('#addRoomInput');
        text.val("");
        expect(Template.home.fireEvent('click #addRoomButton'));
    });
    it('should return when using addRoom event, user already exists', function () {
        spyOn(Rooms,'insert');
        var text = $('#addRoomInput');
        text.val(this.name);
        Template.home.fireEvent('click #addRoomButton');
        expect(Rooms.insert).not.toHaveBeenCalled();
    });
    it('should call update-event on blur with empty string', function () {
        expect(Template.home.fireEvent('blur .updateRoomName'));
    });

    it('should call remove-event', function () {
        expect(Template.home.fireEvent('click .removeRoom',{event: {target:{id: "KtT3aSvFRfmbsZ933"}}}));
    });



});