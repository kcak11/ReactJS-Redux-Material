var Gravatar = require("components/App"),
	
	React = require("react"),
	TestUtils = React.addons.TestUtils,
	
	md5 = require("blueimp-md5");

describe("components - gravatar - ", function() {
	it("should set image source with Gravatar url and hashed email address", function() {
		var email = "test@email.com",
			gravatar = TestUtils.renderIntoDocument(<gravatar email="{email}">),
			dom = TestUtils.findRenderedDOMComponentWithTag(gravatar, "div").getDOMNode();
		
		expect(dom.querySelector("img").getAttribute("src") === "http://www.gravatar.com/avatar/" + md5(email)).toBe(true);
	});
});</gravatar>


