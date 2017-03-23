module.exports = {
	dataType : function(data){
		if (data === null || typeof data === 'undefined') {	     //this line checks if the value of data is null or undefined	
			return 'no value';
		}
	
		else if (typeof data === 'string'){						   //this checks if data is a string and returns its length
			str_length = data.length;		
			return str_length;
		}

		else if (typeof data === 'boolean'){						// this checks if data it is boolean
			return data;
		}

		else if (typeof data === 'number'){							//this checks if data is a number
			if (data < 100){
				return 'less than 100';
			}
			if (data > 100){
				return 'more than 100';
			}
			return 'equal to 100';
		}
		else if (typeof data === 'object'){							//this checks if data is an object
			if (data.length !== 0) {
				return data[2];
			}
			if (data.length === 0){
				return undefined;
			}
		}
			
			if (typeof data === 'function'){                     // this checks if data is a function and passes in true as an argument
				data(true);
				return 'called callback';
			}
		
	}
}