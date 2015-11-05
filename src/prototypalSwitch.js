var prototypalSwitch = {
	isOn: function isOn() {
		return this.state;
	},
	toggle: function toggle() {
		this.state = !this.state;
		return this;
	},
	state: false,
	meta: {
		name: 'Light switch'
	}
};