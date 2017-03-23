module.exports = {
Phone : function (name,model,os) {				// phone class is defined
	this.name = name || "General";				//assigned the parameter name to the variable this.name, in the case where a name is not defined  "General" is  assigned to this.name variable
	this.model = model || "Gen model"; 			//assigned the parameter model to the variable this.model or assign "Gen Model" to it if no argument is passed.
	this.os = os || "Microsoft/Symbian/Java";  				//assigned the argument passed in place of the parameter os to this.os and assigned "Microsoft/java/Symbian" if no argument is passed.

	if (this.name  === 'Gionee' || this.name === 'Tecno') {     // Tecno and Gionee phones are treated differently, because they have some properties that are peculiar	
	  	this.CPU = "Mediatek Processor";						//Tecno or Gionee CPU are usually MTK (MediaTek processors)
	  	this.isAndroid = true;									// a class variable used to store a boolean to describe if a phone is an android phone or not.		
	  	this.doubleSim = true;									//a class variable to store a boolean to know if the phone uses double sim
	  	this.isIphone = false;									// a class variable used to store a boolean to describe if a phone is an iphone or not.		
	  	this.isCharging = false;								// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
	 	this.charge = function() {								// this is a function call to charge the phone
			this.isCharging = true;		
		};
		this.stopCharge = function() {							//this is a function call to stop charging the phone	
			this.isCharging = false;							//  the .isCharging variable changes to indicate that the phone has stopped charging
		};
		this.isPowerOn = false;									//a variable used to store a boolean that indicates if the phone is powered on.	
		this.powerOn = function() {								//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
			this.isPowerOn = true;								//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
		};
		this.powerOff = function() {							//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
			this.isPowerOn = false;
		};
	}
	
	else if(this.os === 'iOS'){									//if the name of the phone isn't Tecno or Gionee, it should implement the following lines of code						
		    
			this.CPU = "Apple Chipset";							// assign the string "Apple Chipset" to the variable this.CPU					
		  	this.isAndroid = false;								// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.isIphone = true;								// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.doubleSim = false;								//a class variable to store a boolean to know if the phone uses double sim
		  	this.isCharging = false;							// a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
		 	this.charge = function() {							// this is a function call to charge the phone
				this.isCharging = true;							// we change the .isCharging variable to indicate that the phone is charging
			};
			this.stopCharge = function() {						//this is a function call to stop charging the phone
				this.isCharging = false;	
			};
			this.isPowerOn = false;								//a variable used to store a boolean that indicates if the phone is powered on.			
				this.isPowerOn = true;							//this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.				
			this.powerOff = function() {						//boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
				this.isPowerOn = false;							//this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
			};
	}
		
	
		else if (this.os === 'Android') {						// assign the string "SnapDragon Processor" to the variable this.CPU
			this.CPU = "Dualcore/Quadcore Processor";		
		  	this.isAndroid = true;								// a class variable used to store a boolean to describe if a phone is an android phone or not.
		  	this.doubleSim = false;			
		  	this.isIphone = false;			
		  	this.isCharging = false;		
		 	this.charge = function() {		
				this.isCharging = true;	
		 	};
			this.stopCharge = function() {	
				this.isCharging = false;	
			};
			this.isPowerOn = false;			
			this.powerOn = function() {		
				this.isPowerOn = true;		
			};
			this.powerOff = function() {	
				this.isPowerOn = false;		
			 };
		  
		}
		else {											//if the os of the phone is neither android nor ios , or the os is undefined, it should implement the following lines of code
			this.CPU = "Microsoft Processor/Java/Symbian CPU";	// assign the string "Micrsoft Processor/Java/Symbian CPU" to the variable this.CPU		
			this.isAndroid = false;								// a class variable used to store a boolean to describe if a phone is an android phone or not.	
		  	this.isIphone = false;								// a class variable used to store a boolean to describe if a phone is an iphone or not.
		  	this.doubleSim = false;			
		  	this.isCharging = false;		
		 	this.charge = function() {		
				this.isCharging = true;		
			};
			this.stopCharge = function() {	
				this.isCharging = false;	
			};
			this.isPowerOn = false;			
			this.powerOn = function() {		
				 this.isPowerOn = true;
			};
		
			this.powerOff = function() {	
				this.isPowerOn = false;		
			};
		}

	}

}		
