var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('it should exist', () =>  {
    expect(Countdown).toExist();
  });

  describe('handleSetCountDown', (done) => {
      it('should set state to started and countdown', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountDown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');
        setTimeout(() => {
            expect(countdown.state.count).toBe(9);
            done();
        }, 1001)
      });

      it('should not set count to a negative number', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountDown(1);

        setTimeout(() => {
            expect(countdown.state.count).toBe(0);
            console.log(countdown.state.count);
            done();
        }, 10001)

      });
  });
});
