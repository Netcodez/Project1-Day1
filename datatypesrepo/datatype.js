module.exports = {
dataType : function(data){
	
	if (data === null || typeof data === 'undefined') {
		return 'no value';
	}
	
	else if (typeof data === 'string'){
		str_length = data.length;
		return str_length;
	}
	else if (typeof data === 'boolean'){
		return data;
	}
	else if (typeof data === 'number'){
		if (data < 100){
			return 'less than 100';
		}
		if (data > 100){
			return 'more than 100';
		}
		return 'equal to 100';
	}
	else if (typeof data === 'object'){
		if (data.length !== 0) {
			return data[2];
		} 
		if (data.length === 0){
			return undefined;
		}
	}
	if (typeof data === 'function'){
		data(true);
	return 'called callback';
	}
	
  }

 }