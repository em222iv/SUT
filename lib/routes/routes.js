FlowRouter.route('/', {
    subscriptions: function (params, queryParams) {
        this.register('rooms', Meteor.subscribe('rooms'));
    },
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
    },
    name: 'home'
});
