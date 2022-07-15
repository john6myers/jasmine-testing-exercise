
it('should calculate the monthly rate correctly', function () {
    const values = { 
      amount: 5000,
      years: 3,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('148.73');
});


it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 4521,
      years: 4,
      rate: 2.2,
    };
    expect(calculateMonthlyPayment(values)).toEqual('98.48');
});

/// etc
