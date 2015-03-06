var React = require('react/addons');
var Router = require('react-router');
var {Button, Close, Autocomplete} = require('uikit');

var p = require('../../../data/autocomplete.json');

var HomePage = React.createClass({

  mixins: [Router.Navigation],

  render: function() {

    return (
      <div>
        <div>
          <Button primary={true}>Submit</Button>
          <Button success={true}>Submit</Button>
          <Button danger={true}>Submit</Button>
        </div>
        <br/>
        <div>
          <h2>Close:</h2>
          <Close></Close>
          <Close alt={true}></Close>
        </div>
        <br/>
        <div>
          <h2>Autocomplete</h2>
          <Autocomplete source="/data/autocomplete.json" minLength={2} />
        </div>
      </div>
    );
  }

});

module.exports = HomePage;