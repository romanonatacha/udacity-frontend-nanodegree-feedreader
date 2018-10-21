/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // checks each feed if it has a URL defined
        it('has url', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // checks each feed if it has a name defined
        it('has name', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('the menu', function() {

        // checks if body tag has class 'menu-hidden', and confirm that the menu is hidden
        it('menu hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // test the toggle menu, when click, if it has the class 'menu-hidden'
        it('toggle menu hidde and show', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

    describe('initial entries', function() {

        // test that ensures when the loadFeed function is called, and completes its work
        beforeEach(function (done) {
            loadFeed(0, done);
        });


        // test if loadFeed has at least 1 entry
        it('has at least 1 entry after loadFeed is called', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('new feed selection', function() {
        var firstFeed, secondFeed;

        // test that ensures when a new feed is loaded
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
        });

        // test if when a new feed is loaded the content s different
        it('checks content changes', function() {
            secondFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });

}());
