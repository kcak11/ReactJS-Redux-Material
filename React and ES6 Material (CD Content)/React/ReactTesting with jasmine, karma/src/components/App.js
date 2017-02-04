
var React = require("react"),
	md5 = require("blueimp-md5");

//require("./style.less");

module.exports = React.createClass({
	render: function() {
		var url = "http://www.gravatar.com/avatar/" + md5(this.props.email);
		if (this.props.size)
			url += "?s=" + this.props.size;
		return 
		<div>
			<img src={url} />
		</div>;
	}
});
