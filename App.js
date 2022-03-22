const merge =require('./MergeHero')
// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');


// convert users.csv file to JSON array
CSVToJSON().fromFile('sales.csv')
	.then(users => {
		// users is a JSON array
		// log the JSON array
		// console.log(users);
		// No sorting algorithm
		// created array to hold data
		firstQ = []
		secondQ = []
		thirdQ = []
		users.map((val, index) => {
			firstQ.push(parseInt(val["Units Sold"]))
			if (val['Sales Channel'] == 'Online') {
				secondQ.push(parseInt(val["Units Sold"]))
			}
			if (val['Sales Channel'] == 'Offline') {
				thirdQ.push(parseInt(val["Units Sold"]))
			}

			// console.log(val["Units Sold"]);
		})
		
		


		secondQ = merge(secondQ)
		thirdQ = merge(thirdQ)
		// console.log(secondQ[0], secondQ[secondQ.length-1]);
		firstQ = merge(firstQ)
		// console.log(firstQ[0], firstQ[firstQ.length-1]); 
		users.map((val) => {
			if (val["Units Sold"] == firstQ[0]) {
				console.log(`Lowest value ${val.Region} `);
			}
			if (val["Units Sold"] == firstQ[firstQ.length - 1]) {
				console.log(val.Region);
			}
			if (val["Units Sold"] == firstQ[0]) {
				console.log(val.Country);
			}
			if (val["Units Sold"] == firstQ[firstQ.length - 1]) {
				console.log(val.Country);
			}
			if (val["Units Sold"] == secondQ[secondQ.length - 1]) {
				console.log(val.Region);
			}
			if (val["Units Sold"] == thirdQ[thirdQ.length - 1]) {
				console.log(val.Region);
			}
		})
	}).catch(err => {
		// log error if any
		console.log(err);
	});
