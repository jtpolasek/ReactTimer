var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer ', () => {
  it('should exist', () =>{
    expect(Timer).toExist();
  });

  it('should start Timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleTimerChange('started');
    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });

  it('should stop the timer on paused status', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleTimerChange('started');
      timer.handleTimerChange('paused');
      setTimeout(() => {
          expect(timer.state.timerStatus).toBe('paused');
          expect(timer.state.count).toBe(10);
          done();
      }, 1001);
    });

    it('should stop the timer on stopped status', (done) =>{
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({count: 10});
        timer.handleTimerChange('started');
        timer.handleTimerChange('stopped');
        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            expect(timer.timer).toBe(undefined);
            done();
        }, 1001);
      });
});
