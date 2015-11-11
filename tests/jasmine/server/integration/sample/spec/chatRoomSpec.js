describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1"
        this.room = new Room(this.name);
        spyOn(Rooms, "insert");
        this.room.save();
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("should insert new Room to db", function() {
        expect(Rooms.insert).toHaveBeenCalled();
    });

});