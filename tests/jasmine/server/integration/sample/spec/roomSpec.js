describe("Rooms", function() {

    beforeEach(function() {
        this.name = "chat Room 1";
        this.room = new Room(this.name);
        spyOn(Rooms, "insert");
        resetDatabase();
        loadDefaultFixtures();
    });

    it("should exist a Rooms collection", function() {
        expect(Rooms);
    });

    it("should take name via constructor", function() {
        expect(this.room.name).toEqual(this.name);
    });

    it("should should have id", function() {
        expect(this.room.id).not.toEqual(undefined);
    });

    it("initializes the database with rooms", function() {
        expect(Rooms.insert).toHaveBeenCalledWith({name: "testRoom1"});
        expect(Rooms.insert).toHaveBeenCalledWith({name: "testRoom2"});
    });

    it("should call server update-method", function() {
        spyOn(Rooms,'update');
        this.room.update(this.room.id);
        expect(Rooms.update).toHaveBeenCalledWith({_id: this.room.id}, {$set: {name: this.room.name}});
    });

    it("should call client room delete-method", function() {
        this.room.delete();
    });

    it("should call server remove-method with id and remove it", function() {
        spyOn(Rooms,'remove');
        this.room.delete(this.room.id);
        expect(Rooms.remove).toHaveBeenCalledWith({_id: this.room.id});
    });
});
