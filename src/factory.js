function createObject() {
    var bar = 'bar';
    var prototype = {
        foo: 'foo',
        bar: function bar() {
            return bar;
        },
        meta: {
            name: 'Light switch'
        }
    };

    return Object.create(prototype);
}