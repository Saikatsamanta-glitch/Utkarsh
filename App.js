// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs=require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('sales - Copy.csv')
    .then(users => {
        // users is a JSON array
        // log the JSON array
        // console.log(users);
		// No sorting algorithm
		// created array to hold data
		firstQ=[]
		secondQ=[]
		thirdQ=[]
		users.map((val,index)=>{
			firstQ.push(parseInt(val["Units Sold"]) )
			if(val['Sales Channel']=='Online')
			{
				secondQ.push(parseInt(val["Units Sold"]))
			}
			if(val['Sales Channel']=='Offline')
			{
				thirdQ.push(parseInt(val["Units Sold"]))
			}
			
			// console.log(val["Units Sold"]);
		})
		// console.log(secondQ);
		secondQ=secondQ.sort();
		thirdQ=thirdQ.sort();
		// console.log(secondQ[secondQ.length-1]);
		firstQ=firstQ.sort();
		// console.log(firstQ[0], firstQ[firstQ.length-1]);
		users.map((val)=>{
			if(val["Units Sold"]==firstQ[0]){
				console.log(val.Region);
			}
			if(val["Units Sold"]==firstQ[firstQ.length-1]){
				console.log(val.Region);
			}
			if(val["Units Sold"]==firstQ[0]){
				console.log(val.Country);
			}
			if(val["Units Sold"]==firstQ[firstQ.length-1]){
				console.log(val.Country);
			}
			if(val["Units Sold"]==secondQ[secondQ.length-1]){
				console.log(val.Region);
			}
			if(val["Units Sold"]==thirdQ[thirdQ.length-1]){
				console.log(val.Region);
			}
		})
    }).catch(err => {
        // log error if any
        console.log(err);
    });