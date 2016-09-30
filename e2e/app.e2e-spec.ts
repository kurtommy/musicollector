import { MusicollectorPage } from './app.po';

describe('musicollector App', function() {
  let page: MusicollectorPage;

  beforeEach(() => {
    page = new MusicollectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
