/** @jsx React.DOM */
var React = require('react'),
    classNames = require('classnames');

var Autocomplete = React.createClass({
	propTypes: {
		source: React.PropTypes.string,
		minLength: React.PropTypes.number,
		param: React.PropTypes.string,
		delay: React.PropTypes.number
	},

	getDefaultProps: function () {
		return {
      source: ''
    };
	},

	render: function () {
		var data = {
			source: this.props.source
		};
		if (this.props.minLength) { data.minLength = this.props.minLength; }
		data = JSON.stringify(data);

		return (
      <div className="uk-autocomplete uk-form"
      	data-uk-autocomplete={data}>
       <input type="text"/>
       {this.props.children}
    </div>
    );

	}
});

module.exports = Autocomplete;