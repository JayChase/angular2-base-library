/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};


function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    //return path.slice(-8) == '_test.js' || path.slice(-8) == '.spec.js';
    return path.indexOf('/base/test/') > -1;
}

function isBuiltFile(path) {
    var builtPath = '/app/';
    return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

//change here as we keep spec.js in test folder
var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isJsFile);

// Load our SystemJS configuration.
System.config({
    baseURL: '/base'
});

var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    '@angular2-material/core': { defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/toolbar': { defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/sidenav': { defaultExtension: 'js', main: 'sidenav.js' },
    '@angular2-material/list': { defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/progress-circle': { defaultExtension: 'js', main: 'progress-circle.js' },
    '@angular2-material/card': { defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/button': { defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/icon': { defaultExtension: 'js', main: 'icon.js' },
    '@angular2-material/input': { defaultExtension: 'js', main: 'input.js' },
    'rxjs': { defaultExtension: 'js' }
};

var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
];

// Add package entries for angular packages
ngPackageNames.forEach(function (pkgName) {
    // Bundled (~40 requests):
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

System.config(
    {
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            '@angular2-material': 'node_modules/@angular2-material',
            'sinon': 'node_modules/karma-sinon',
            'app': 'app'
        },
        packages: packages
    });

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
        testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

}).then(function () {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            return System.import(moduleName);
        }));
}).then(__karma__.start, __karma__.error);
