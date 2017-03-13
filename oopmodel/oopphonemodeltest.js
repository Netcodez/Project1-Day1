(function(){
  'use strict';
var Phone = require('./oopphonemodel.js').Phone;

  describe("Phone Class: Create a phone, make it work(power it on, switch it off, charge it, if full stop charging)", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var apple = new Phone('Apple');
      expect(typeof apple).toEqual(typeof {});
      expect(apple instanceof Phone).toBeTruthy();
    });

    it("The phone should be called 'General' if no name is passed as a parameter", function() {
      var general = new Phone();
      expect(general.name).toEqual('General');
      expect(general.model).toBe('General model');
    });

    it("The phone name and model should be a property of the phone", function() {
      var itel  = new Phone('Tecno', 'C7');
      expect(itel.name).toBe('Tecno');
      expect(tecno.model).toBe('C7');
    });

    it("The phone should not be a double sim phone except its a Gionee or Tecno", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 6S', "iOS");
      expect(iPhone.doubleSim).not.toBe(true);

      var tecno = new Phone('Tecno', 'C9');
      expect(tecno.doubleSim).toBe(true);
      expect(tecno.isCharging).toBe(false)
      tecno.charge();
      expect(tecno.isCharging).toBeTruthy();
      expect((function(){return new Phone('Gionee', 'S9');}()).doubleSim).not.toBe(false);
    });

    it("The phone should be powered off by default until powered on", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 6S', "iOS");
      expect(iPhone.isPowerOn).toBe(false);
      expect(iPhone.isAndroid).not.toBeTruthy();
      expect(iPhone.isIphone).toBeTruthy();
      iPhone.powerOn();
      expect(iPhone.isPowerOn).toBeTruthy();
      iPhone.powerOff();
      expect(iPhone.isPowerOn).not.toBeTruthy();
    });

    it("The Phone should charge when plugged in with the function 'charge'", function() {
      var samsunggalaxy = new Phone("Samsung","Galaxy S8");
      expect(samsunggalaxy.isCharging).not.toBeTruthy();
      samsunggalaxy.charge();
      expect(samsunggalaxy.isCharging).toBe(true);
    });

  });
});