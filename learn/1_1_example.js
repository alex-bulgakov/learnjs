function calculat() {
	"use strict";

	var amount 				= document.getElementById("amount");
	var apr 					= document.getElementById("apr");
	var years					= document.getElementById("years");
	var zipcode				= document.getElementById("zipcode");
	var total 				= document.getElementById("total");
	var payment 			= document.getElementById("payment");
	var totalinterest = document.getElementById("totalinterest");

	var principal = parseFloat(amount.value);
	var interest = parseFloat(apr.value) / 100 / 12;
	var payments = parseFloat(years.value) * 12;

	var x = Math.pow(1 + interest, payments);
	var monthly = (principal * x * interest)/(x - 1);

	if(isFinite(monthly)) {
		payment.innerHTML = monthly.toFixed(2);
		total.innerHTML = (monthly * payments).toFixed(2);
		totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);

		save(amount.value, apr.value, years.value, zipcode.value);

		try {
			getLenders(amount.value, apr.value, years.value, zipcode.value);
		}
		catch(e) {}

		chart(principal, interest, monthly, payments);
	}
}