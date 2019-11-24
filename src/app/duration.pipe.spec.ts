import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
  it('create return only minutes', () => {
    const pipe = new DurationPipe();
    let t = pipe.transform(58)
    expect(t).toEqual('58min');
  });
  it('create return hours and minutes', () => {
    const pipe = new DurationPipe();
    let t = pipe.transform(80)
    expect(t).toEqual('1h 20min');
  });
});
