module.exports = {
Phone:function(name,model,os) {	
	this.name = name || "General";			
	this.model = model || "General model"; 	
	this.os = os || "iOS/Android";  

	if (this.name  === 'Gionee' || this.name === "Tecno") { 	
	  	this.CPU = "MTK Processor";		
	  	this.isAndroid = true;			
	  	this.doubleSim = true;			
	  	this.isIphone = false;			
	  	this.isCharging = false;		
	 	this.charge = function() {		
			this.isCharging = true;		
		}
		this.stopCharge = function() {	
			this.isCharging = false;	
		}
		this.isPowerOn = false;			
		this.powerOn = function() {		
			this.isPowerOn = true;		
		}
		this.powerOff = function() {	
			this.isPowerOn = false;
		}
	}
	
	else {			
		if (this.os === "iOS") {
			this.CPU = "Apple Chipset";		
		  	this.isAndroid = false;			
		  	this.isIphone = true;			
		  	this.doubleSim = false;			
		  	this.isCharging = false;		
		 	this.charge = function() {		
				this.isCharging = true;		
			}
			this.stopCharge = function() {	
				this.isCharging = false;	
			}
			this.isPowerOn = false;			
			this.powerOn = function() {		
				this.isPowerOn = true;		
			this.powerOff = function() {	
				this.isPowerOn = false;		
			}
		}
		else if (this.os === "Android") {
			this.CPU = "SnapDragon Processor";		
		  	this.isAndroid = true;			
		  	this.doubleSim = false;			
		  	this.isIphone = false;			
		  	this.isCharging = false;		
		 	this.charge = function() {		
				this.isCharging = true;		
			this.stopCharge = function() {	
				this.isCharging = false;	
			}
			this.isPowerOn = false;			
			this.powerOn = function() {		
				this.isPowerOn = true;		
			}
			this.powerOff = function() {	
				this.isPowerOn = false;		
			}
		}
		else {		
			this.CPU = "Microsoft Processor/Others";		
			this.isAndroid = false;			
		  	this.isIphone = false;			
		  	this.doubleSim = false;			
		  	this.isCharging = false;		
		 	this.charge = function() {		
				this.isCharging = true;		
			}
			this.stopCharge = function() {	
				this.isCharging = false;	
			}
			this.isPowerOn = false;			
			this.powerOn = function() {		
				this.isPowerOn = true;		
			}
			this.powerOff = function() {	
				this.isPowerOn = false;		
			}
		}
	}
}

}