jest.dontMock('../autocomplete.js');

describe('Autocomplete', function() {
	it('renders on the page', function() {
		console.log('test!!!')
		var React = require('react/addons');
		var Autocomplete = require('../autocomplete.js');
		var TestUtils = React.addons.TestUtils;

		// Render a checkbox with label in the document
		var container = TestUtils.renderIntoDocument(
			<Autocomplete />
		);
		console.log('container', container);
		var anchor = TestUtils.findRenderedDOMComponentWithTag(container, 'div');

		expect(anchor.getDOMNode().className).toContain('uk-autocomplete');
  });
  
});