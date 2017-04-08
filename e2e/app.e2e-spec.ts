import { BlissAppPage } from './app.po';

describe('bliss-app App', () => {
  let page: BlissAppPage;

  beforeEach(() => {
    page = new BlissAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
