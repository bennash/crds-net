import { ContentfulApi } from '../../support/Contentful/ContentfulApi';
import { ContentfulElementValidator as Element } from '../../support/Cypress/ContentfulElementValidator';

describe('Testing the Latest Message on the Live page', function () {
    let messageList;
    before(function () {
        const content = new ContentfulApi();
        messageList = content.retrieveListOfMessages(5);

        cy.wrap({messageList}).its('messageList.latestMessage').should('not.be.undefined').then(() => {
            cy.visit('live');
            //TODO assert slugs are required
        });
    });

    it('Tests Past Weekend section displays 4 messages', function(){
        cy.get('[data-automation-id="recent-message-card"]').then(($cardList) =>
        {
            expect($cardList).lengthOf(4);
        });
    });

    it('Tests most recent message card in Past Weekend section (title, image, description, link)', function(){
        check_message_card_content_at_index(0);
    });

    it('Tests second most recent message card in Past Weekend section (title, image, description, link)', function(){
        check_message_card_content_at_index(1);
    });

    it('Tests third most recent message card in Past Weekend section (title, image, description, link)', function(){
        check_message_card_content_at_index(2);
    });

    it('Tests fourth most recent message card in Past Weekend section (title, image, description, link)', function(){
        check_message_card_content_at_index(3);
    });

    function check_message_card_content_at_index(index) {
        cy.get('[data-automation-id="recent-message-card"]').eq(index).as('currentCard');

        cy.get('@currentCard').then(($cardContent) => {
            expect($cardContent).to.be.visible;
            expect($cardContent.find('[data-automation-id="recent-message-image"]')).to.have.attr('src')
                .contains(messageList.message(index).image.id);
            expect($cardContent.find('[data-automation-id="recent-message-image"]')).to.have.attr('alt')
                .contains(messageList.message(index).title.text);

            expect($cardContent.find('[data-automation-id="recent-message-image-link"]')).to.have.attr('href')
                .contains(messageList.message(index).slug.text);
            expect($cardContent.find('[data-automation-id="recent-message-title"]')).to.have.text(messageList.message(index).title.text);
        });

        Element.shouldContainText(cy.get('@currentCard').find('[data-automation-id="recent-message-description"]'), messageList.message(index).description.text);
    }
});