describe('Factory: Author', function () {

    //Step 1: define module we are testing
    beforeEach(module('myAppContact'));

    //Step 2: define properties we are testing
    var myAuthor;

    //Step 3: Angular Injection
    beforeEach(inject(function (Author) {
        myAuthor = Author; //set global myAuthor into Author instance
        //can use Author instance across entire file
        myAuthor.init({
            name: 'Test User',
            email: 'test@test.com',
            phone: '3331118888'
        })
    }));

    //Step 4: make tests
    it('should be defined', function () {
        expect(myAuthor).toBeDefined(); //Jasmine keyword expect
    });

    it('name should be "Test User"', function () {
        expect(myAuthor.getName()).toBe('Test User'); //Jasmine keyword expect
    });

    it('email should be "test@test.com"', function () {
        expect(myAuthor.getEmail()).toBe('test@test.com'); //Jasmine keyword expect
    });

    it('phone should be "3331118888"', function () {
        expect(myAuthor.getPhone()).toBe('3331118888'); //Jasmine keyword expect
    });

    it('age should be "19"', function () {
        myAuthor.age = 23;
        myAuthor.decreaseAge();
        myAuthor.decreaseAge();
        myAuthor.decreaseAge();
        myAuthor.decreaseAge();
        myAuthor.increaseAge();
        myAuthor.decreaseAge();
        expect(myAuthor.getAge()).toBe(19);
    });

});