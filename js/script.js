var car = {
		make: 'VW',
		type: 'Polo',
		color: 'Blue',
		isOn: false,
		numberOfWheels: 4,
		seats: ['seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
				],
		turnOn: function() {
			this.isOn = true;
		},

		turnOff: function() {
			this.isOn = false;
		},

		fly: function() {
			alert('Fly!');
		},

		switchCar: function (isOn) {
			console.log("Turn car " + isOn);
			if (isOn == true){
				this.isOn = true;
			} else {
				this.isOn = false;
			}
		},
	};

	console.log('hello there friends!')