import { SeriesQueryManager } from '../../Contentful/QueryManagers/SeriesQueryManager';

describe('Testing the Current Series on the a locations page:', function () {
  let currentSeries;
  before(function () {
    const sqm = new SeriesQueryManager();
    sqm.fetchCurrentSeries().then(() => {
      currentSeries = sqm.queryResult;
    });
  });

  ['/dayton', '/oakley'].forEach(slug => {
    it(`On crossroads.net${slug}, the latest series button should link to the current series`, function () {
      cy.visit(slug);

      cy.get('[data-automation-id="series-slug"]').as('currentSeriesButton');
      cy.get('@currentSeriesButton').should('be.visible').and('have.attr', 'href', currentSeries.URL.relative);
    });
  });
});