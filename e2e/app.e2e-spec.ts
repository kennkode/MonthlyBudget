import { MonthlyBudgetPage } from './app.po';

describe('monthly-budget App', function() {
  let page: MonthlyBudgetPage;

  beforeEach(() => {
    page = new MonthlyBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
