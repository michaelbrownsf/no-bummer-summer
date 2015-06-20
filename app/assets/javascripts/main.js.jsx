/* global Backbone React */

var containerEl = document.getElementById('container');
var navEl = document.getElementById('nav');
var footerEl = document.getElementById('footer');

React.render(
    <Footer />,
    footerEl
);

React.render(
    <NavBar />,
    navEl
);

var App = Backbone.Router.extend({
    routes: {
        '': 'login',
        'home': 'login',
        'login': 'login',
        'signup': 'signup',
        'checklist': 'checklist',
        'about': 'about'
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
    },
    about: function() {
        React.render(
            <AboutPage />,
            containerEl
        );
        
    }
});

var myApp = new App();
Backbone.history.start();