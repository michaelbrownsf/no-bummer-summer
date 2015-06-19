/* global Backbone React */

var containerEl = document.getElementById('container');

var App = Backbone.Router.extend({
    routes: {
        '': 'login',
        'login': 'login',
        'signup': 'signup',
        'checklist': 'checklist'
    },
    login: function() {
        React.render(
            <LoginPage />,
            containerEl
        );
        
    },
    signup: function() {
        React.render(
            <SignupPage />,
            containerEl
        );
    },
    checklist: function() {
        React.render(
            <ChecklistPage />,
            containerEl
        );
    }
});

var myApp = new App();
Backbone.history.start();