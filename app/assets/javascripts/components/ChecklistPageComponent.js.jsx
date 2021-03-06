var activityList = [];
var userActivities = new UserActivityCollection();

var ChecklistPage = React.createClass({
	getInitialState: function() {
		return {
			checklistArray: []
		}
	},
	componentDidMount: function() {
		$.get(
			'http://no-bummer-summer-2015.herokuapp.com/activities',
			function(activityList) {
				if(this.isMounted()) {
					this.setState({
						checklistArray: (activityList)
					});
				}
			}.bind(this)
		);
	},
	render: function() 	{
		listItems = this.state.checklistArray.map(function(listModel) {
			return (
				<div key={listModel.cid}>
					<input type="checkbox" name="checkbox" id="checkbox_id" onChange={this.checkboxClick}/>
					<label for="checkbox_id">{listModel.name}</label>
				</div>
			)
		});
		return (
			<div className="content">
				<h1>Hello, User!</h1>
				<p>Summers in Texas can be long and way too hot. The heat alone can be a bummer. While we can&#39;t do anything about the heat, we can help you not be bored. </p>
 
				<p>Below is a list of activities that will hopefully shoot your fun level into the stratosphere, like fireworks! Tick off the ones you&#39;ve done and we&#39;ll keep track.</p>
				{listItems}
			</div>
		)
	}

});