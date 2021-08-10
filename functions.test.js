const { expect, test, describe } = require('@jest/globals');
const { add, subtract, multiply, divide, sayHello } = require('./functions');

test('Hello World Test', function() {
    expect(1).toBe(1)
});

test('arrays are special', function() {
    // expect([1, 2]).toBe([1, 2])
    expect([1, 2]).toEqual([1, 2])
});

describe('Math Operations', function() {
    test('add func adds two nums', function() {
        expect(add(2, 5)).toBe(7)
    });
    
    test('sub func subtracts two num', function() {
        expect(subtract(4, 1)).not.toBeNaN()
    });

    test('multiple func multiply two num', function() {
        expect(multiply(4, 2)).toBe(8)
    });

    test('divide func divides two num', function() {
        expect(divide(12, 2)).toBe(6)
    });
})

describe('sayHello Tests', function() {
    test('returns stringof Hello', function() {
        expect(sayHello()).toBe('Hello')
    })
    test('should return truthy value', function() {
        // expect(sayHello()).toBeTruthy()
        expect(sayHello()).not.toBeFalsy()
    })
})

const myArr = ['joe', 'mary', 'ralph', 'sue'];

test('myArr should contain mary', function() {
    // expect(myArr).toContain('mary')
    // expect(myArr).toBeDefined()
    expect(myArr).toHaveLength(4)
})

test('mult func multiplies two nums', function(){
    expect(multiply(5, 4)).toBeGreaterThan(10)
});

test("Variables are not null.", () => {expect(myArr).not.toBeNull()})