import { ModuleAPage } from './app.po';

describe('module-a App', function() {
  let page: ModuleAPage;

  beforeEach(() => {
    page = new ModuleAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
