var activityList = [];

var ChecklistPage = React.createClass({
	getInitialState: function() {
		return {
			checklistArray: []
		}
	},
	componentDidMount: function() {
		$.get(
			'https://no-bummer-summer-2015.herokuapp.com/activities',
			function(activityList) {
				if(this.isMounted()) {
					this.setState({
						checklistArray: (activityList)
					});
				}
			}.bind(this)
		);
	},
	render: function() {
		listItems = this.state.checklistArray.map(function(listModel) {
			return (
				<div key={listModel.cid}>
					<input type="checkbox" name="checkbox" id="checkbox_id"/>
					<label for="checkbox_id">{listModel.name}</label>
				</div>
			)
		});
		return (
			<div>
				{listItems}
			</div>
		)
	}

});