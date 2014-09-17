describe('Service: $cordovaDatePicker', function() {

  var $cordovaDatePicker, $rootScope;

  beforeEach(module('ngCordova.plugins.datePicker'));

  beforeEach(inject(function (_$cordovaDatePicker_, _$q_, _$rootScope_) {
    $cordovaDatePicker = _$cordovaDatePicker_;
    $rootScope = _$rootScope_;

    window.datePicker = {
      show: angular.noop
    };
  }));

  it('should call window\'s datePicker.show method', function() {

    var result;
    var options = { mode: 'date', date: new Date() };

    spyOn(window.datePicker, 'show')
      .andCallFake(function (date, successCb, errorCb) {
        successCb(options.date);
      });

    $cordovaDatePicker
      .show(options)
      .then(function (response) {
        result = response;
      });

    $rootScope.$digest();

    expect(result).toBe(options.date);
    expect(window.datePicker.show.calls[0].args[0]).toBe(options);
  });

});
