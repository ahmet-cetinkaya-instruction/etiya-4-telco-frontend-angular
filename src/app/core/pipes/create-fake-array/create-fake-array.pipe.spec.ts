import { CreateFakeArrayPipe } from './create-fake-array.pipe';

describe('CreateFakeArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateFakeArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
