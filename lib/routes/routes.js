FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
    },
    name: 'home'
});
