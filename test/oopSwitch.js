describe("Class oriented inheritance object", function() {

    var oopSwitch1;
    var oopSwitch2;

    beforeEach(function(){
        oopSwitch1 = new SwitchProto();
        oopSwitch2 = new SwitchProto();
    });

    it("is instance safe", function() {
        expect(oopSwitch1 !== oopSwitch2).toBe(true);
        expect(oopSwitch1.toggle().isOn()).toBe(true);
        expect(!oopSwitch2.isOn()).toBe(true);
    });

    it("can set a new instance-specific properties", function() {
        oopSwitch2.newProp = 'New';
        expect(oopSwitch2.newProp).toBe('New');
        expect(oopSwitch1.newProp).toBeUndefined();
    });

    it("shares object and array mutations", function() {
        oopSwitch2.meta.name = 'Breaker switch';
        expect(oopSwitch1.meta.name).toBe('Breaker switch');
    });

    it("can override instance-specific properties", function() {
        oopSwitch2.meta = { name: 'Power switch' };
        expect(oopSwitch2.meta.name).toBe('Power switch');
    });
});
