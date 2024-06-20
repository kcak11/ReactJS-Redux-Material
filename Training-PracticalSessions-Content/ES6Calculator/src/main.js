class MonthlyPaymentCalculator{
	constructor(principal,years,rate){
		this.principal=principal;
		this.years=years;
		this.rate=rate;
	}
	calculateMonthlyPayment(){
		if(this.rate){
			this.monthlyRate=this.rate/100/12;
		}
		let monthlyPayment=this.principal*this.monthlyRate/(1-(Math.pow(1/(1+this.monthlyRate),this.years*12)));
		return monthlyPayment;
	}
}

function doCalculate(e){
	var mpc=new MonthlyPaymentCalculator(document.getElementById("principal").value,document.getElementById("years").value,document.getElementById("rate").value);	
	document.getElementById("result").innerHTML=`$${mpc.calculateMonthlyPayment()}`;
}
document.getElementById("mcalc").addEventListener("submit",function(e){e.preventDefault();},false);
document.getElementById("calcBtn").addEventListener("click",doCalculate,false);

