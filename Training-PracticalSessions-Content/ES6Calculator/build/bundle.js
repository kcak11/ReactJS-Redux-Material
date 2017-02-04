"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MonthlyPaymentCalculator = function () {
	function MonthlyPaymentCalculator(principal, years, rate) {
		_classCallCheck(this, MonthlyPaymentCalculator);

		this.principal = principal;
		this.years = years;
		this.rate = rate;
	}

	_createClass(MonthlyPaymentCalculator, [{
		key: "calculateMonthlyPayment",
		value: function calculateMonthlyPayment() {
			if (this.rate) {
				this.monthlyRate = this.rate / 100 / 12;
			}
			var monthlyPayment = this.principal * this.monthlyRate / (1 - Math.pow(1 / (1 + this.monthlyRate), this.years * 12));
			return monthlyPayment;
		}
	}]);

	return MonthlyPaymentCalculator;
}();

function doCalculate(e) {
	var mpc = new MonthlyPaymentCalculator(document.getElementById("principal").value, document.getElementById("years").value, document.getElementById("rate").value);
	document.getElementById("result").innerHTML = "$" + mpc.calculateMonthlyPayment();
}
document.getElementById("mcalc").addEventListener("submit", function (e) {
	e.preventDefault();
}, false);
document.getElementById("calcBtn").addEventListener("click", doCalculate, false);
