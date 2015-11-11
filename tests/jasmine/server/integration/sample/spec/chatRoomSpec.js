describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1"
        this.room = new Room(this.name);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });



});