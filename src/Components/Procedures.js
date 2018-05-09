import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import ListItem from 'material-ui/List/ListItem';

class ProcedureTemplate extends Component {
	state = {
    value: 1
  };

	size = {
		value: 1
	};

	taskCode = {
		value: 1
	};

	handleChange = (event, index, value) => this.setState({value});

	render () {
		return (
      <Col xs={6}>
        <br/>
        <br/>
        <br/>
        <Tabs>
  				<Tab label="Procedure">
						<Row>
							<Col xs={7}>
								<SelectField floatingLabelText="Select Template" value={this.state.value} onChange={this.handleChange}>
									<MenuItem value={1} primaryText="Select Template"/>
									<MenuItem value={2} primaryText="Template 1"/>
									<MenuItem value={3} primaryText="Template 2"/>
									<MenuItem value={4} primaryText="Template 3"/>
									<MenuItem value={5} primaryText="Template 4"/>
									<MenuItem value={6} primaryText="Template 5"/>
								</SelectField>
							</Col>
							<Col xs={5}>
								<ListItem leftAvatar={<Avatar icon={<FontIcon className="material-ui-icons-settings"/>} /> }>
									Narratives
								</ListItem>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col xs={6}>
								<TextField floatingLabelText="Subject"/>
							</Col>
							<Col xs={6}>
								<SelectField floatingLabelText="Scale" value={this.size.value}>
									<MenuItem value={1} primaryText="Small"/>
									<MenuItem value={2} primaryText="Medium"/>
									<MenuItem value={3} primaryText="Large"/>
								</SelectField>
							</Col>
						</Row>
  					<br />
						<Row>
							<Col xs={6}>
								<TextField floatingLabelText="Select Assignee"/>
							</Col>
							<Col xs={6}>
								<SelectField floatingLabelText="Task Code" value={this.taskCode.value}>
									<MenuItem value={1} primaryText="Select Task Code"/>
									<MenuItem value={2} primaryText="Task Code 1"/>
									<MenuItem value={3} primaryText="Task Code 2"/>
								</SelectField>
							</Col>
						</Row>
  					<br />
						<Row>
							<Col xs={12}>
								<a>Type: </a>
								<RaisedButton label="Non Critical"/>
								<RaisedButton label="Critical Deadline"/>
								<RaisedButton label="Critical Event"/>
							</Col>
						</Row>
						<br/>
						<Row>
							<Col xs={12}>
								<TextField hintText="Each Participant separated by a semi-colon" floatingLabelText="External Participants"
									multiLine={true} rows={4} fullWidth={true}/>
							</Col>
						</Row>
  					<br />
  					<RaisedButton label="Cancel" />
  					<RaisedButton label="Save" style={{float: 'right'}} primary={true} />
  				</Tab>
  				<Tab label="Tasks (5)"></Tab>
  				<Tab label="Documents (3)"></Tab>
  				<Tab label="Time Entries (1)"></Tab>
  			</Tabs>
      </Col>
		)
	}
}

export default ProcedureTemplate;
