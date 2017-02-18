import { A2BoSassD3Page } from './app.po';

describe('a2-bo-sass-d3 App', () => {
  let page: A2BoSassD3Page;

  beforeEach(() => {
    page = new A2BoSassD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
