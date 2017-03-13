(function(){
  'use strict';

 

var Phone = require('./phonemodel.JS').Phone;

  describe("Phone Class: Create a phone, make it work", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var infinix = new Phone('Infinix');
      expect(typeof infinix).toEqual(typeof {});
      expect(infinix instanceof Phone).toBeTruthy();
    });

    it("The phone should be called 'General' if no name is passed as a parameter", function() {
      var general = new Phone();
      expect(general.name).toEqual('General');
      expect(general.model).toBe('Gen model');
    });

    it("The phone name and model should be a property of the phone", function() {
      var tecno  = new Phone('Tecno', 'C7');
      expect(tecno.name).toBe('Tecno');
      expect(tecno.model).toBe('C7');
    });

    it("The phone should not be a double sim phone except its a Infinix or Tecno", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 6s', "iOS");
      expect(iPhone.doubleSim).not.toBe(true);


      var tecno = new Phone('Tecno', 'C7');
      expect(tecno.doubleSim).toBe(true);
      expect(tecno.isCharging).toBe(false);
    
      tecno.charge();
      expect(tecno.isCharging).toBeTruthy();
      expect((function(){return new Phone('Gionee', 'M2');}()).doubleSim).not.toBe(false);
      });

    it("The phone should be powered off by default until powered on", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 6s', "iOS");
      expect(iPhone.isPowerOn).toBe(false);
      expect(iPhone.isAndroid).not.toBeTruthy();
      expect(iPhone.isIphone).toBeTruthy();
      iPhone.powerOn();
      expect(iPhone.isPowerOn).toBeTruthy();
      iPhone.powerOff();
      expect(iPhone.isPowerOn).not.toBeTruthy();
    });

    it("The Phone should charge when plugged in with the function 'charge'", function() {
      var blackberry = new Phone("Blackberry","Z10");
      expect(blackberry.isCharging).not.toBeTruthy();
      blackberry.charge();
      expect(blackberry.isCharging).toBe(true);
    });

  });
})();
