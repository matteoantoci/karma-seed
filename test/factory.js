describe("Factory object", function() {
    var obj1;
    var obj2;

    beforeEach(function(){
        obj1 = createObject();
        obj2 = createObject();
    });

    it("is instance safe", function() {
        obj1.foo = 'biz';
        expect(obj1 !== obj2).toBe(true);
        expect(obj1.foo).toBe('biz');
        expect(obj2.foo).toBe('foo');
    });

    it("can set a new instance-specific properties", function() {
        obj2.newProp = 'New';
        expect(obj2.newProp).toBe('New');
        expect(obj1.newProp).toBeUndefined();
    });

    it("shares object and array mutations", function() {
        obj2.meta.name = 'Breaker switch';
        expect(obj1.meta.name).toBe('Breaker switch');
    });

    it("can override instance-specific properties leaving prototype untouched", function() {
        obj2.meta = { name: 'Power switch' };
        expect(obj2.meta.name).toBe('Power switch');
    });

});
