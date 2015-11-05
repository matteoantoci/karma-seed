var SwitchProto = function(){
    this.state = false;
    this.meta = {
        name: 'Light switch'
    };
};

SwitchProto.prototype.isOn = function isOn() {
    return this.state;
};

SwitchProto.prototype.toggle = function toggle() {
    this.state = !this.state;
    return this;
};
