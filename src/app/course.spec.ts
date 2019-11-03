import { Course } from './course';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course(1, 'Title', '2019-01-01', 90, 'Descr')).toBeTruthy();
  });
});
