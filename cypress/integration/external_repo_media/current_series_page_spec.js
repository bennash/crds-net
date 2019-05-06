import { ImageDisplayValidator } from '../../Contentful/ImageDisplayValidator';
import { SeriesQueryManager } from '../../Contentful/QueryManagers/SeriesQueryManager';

describe('Tesing the Media/Series/[Current Series] page:', function () {
  let currentSeries;
  before(function () {
    const sqm = new SeriesQueryManager();
    sqm.fetchCurrentSeries().then(() => {
      currentSeries = sqm.queryResult;
      cy.visit(currentSeries.URL.absolute);
      currentSeries.fetchLinkedResources();
    });
  });

  it('The jumbotron image and background image should match Contentful', function () {
    //Large jumbotron image
    cy.get('.jumbotron').as('jumbotron');
    cy.get('@jumbotron').should('be.visible');

    new ImageDisplayValidator('jumbotron').jumbotronShouldHaveImages(currentSeries.image, currentSeries.backgroundImage);

    //Current series image
    cy.get('.jumbotron-content').find('img').as('currentSeriesImage');
    cy.get('@currentSeriesImage').should('be.visible');
    new ImageDisplayValidator('currentSeriesImage').shouldHaveImgixImage(currentSeries.image);
  });
});