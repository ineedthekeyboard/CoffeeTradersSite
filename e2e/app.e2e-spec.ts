import { SodPage } from './app.po';

describe('sod App', function() {
  let page: SodPage;

  beforeEach(() => {
    page = new SodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
