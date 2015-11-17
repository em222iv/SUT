if (process.env.IS_MIRROR) {
    Meteor.methods({
        'loadFixtures': function () {
            console.log('Loading default fixtures');
            if (Rooms.find().count() === 0) {

                this.rooms = ["testRoom1", "testRoom2", "testRoom3"];

                this.rooms.forEach(function (room) {
                    room = new Room(room).save();
                });

            }
            console.log('Finished loading default fixtures');
        },

        'clearDB': function(){
            console.log('Clear DB');

            var globalObject=Meteor.isClient?window:global;
            for(var property in globalObject) {
                var object = globalObject[property];
                if (object instanceof Meteor.Collection) {
                    object.remove({});
                }
            }

            var collectionsRemoved = 0;
            var db = Meteor.users.find()._mongo.db;
            db.collections(function (err, collections) {

                var appCollections = _.reject(collections, function (col) {
                    return col.collectionName.indexOf('velocity') === 0 ||
                        col.collectionName === 'system.indexes';
                });

                _.each(appCollections, function (appCollection) {
                    appCollection.remove(function (e) {
                        if (e) {
                            console.error('Failed removing collection', e);
                            fut.return('fail: ' + e);
                        }
                        collectionsRemoved++;
                        console.log('Removed collection');
                        if (appCollections.length === collectionsRemoved) {
                            console.log('Finished resetting database');
                        }
                    });
                });

            });

            console.log('Finished clearing');
        }
    });
}