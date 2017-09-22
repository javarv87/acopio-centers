import { AcopioCentersPage } from './app.po';

describe('acopio-centers App', () => {
  let page: AcopioCentersPage;

  beforeEach(() => {
    page = new AcopioCentersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
