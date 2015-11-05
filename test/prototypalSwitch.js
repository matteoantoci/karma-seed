describe("Prototypal inheritance object", function() {
    var prototypalSwitch1;
    var prototypalSwitch2;

    beforeEach(function(){
        prototypalSwitch1 = Object.create(prototypalSwitch);
        prototypalSwitch2 = Object.create(prototypalSwitch);
    });

    it("is instance safe", function() {
        expect(prototypalSwitch1 !== prototypalSwitch2).toBe(true);
        expect(prototypalSwitch1.toggle().isOn()).toBe(true);
        expect(!prototypalSwitch2.isOn()).toBe(true);
    });

    it("can set a new instance-specific properties", function() {
        prototypalSwitch2.newProp = 'New';
        expect(prototypalSwitch2.newProp).toBe('New');
        expect(prototypalSwitch1.newProp).toBeUndefined();
    });

    it("shares object and array mutations", function() {
        prototypalSwitch2.meta.name = 'Breaker switch';
        expect(prototypalSwitch1.meta.name).toBe('Breaker switch');
    });

    it("can override instance-specific properties", function() {
        prototypalSwitch2.meta = { name: 'Power switch' };
        expect(prototypalSwitch2.meta.name).toBe('Power switch');
    });
});
