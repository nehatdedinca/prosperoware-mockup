import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import CircleIcon from 'material-ui/svg-icons/image/lens';
import { amber500, lightGreenA700, red900, grey600 } from 'material-ui/styles/colors';

export default class DropDownList extends React.Component {
  render() {
    return (
      <div>
        <br />
        <List>
          <ListItem primaryText="L100 Case Assessment, Development and Administration" leftIcon={<CircleIcon color={amber500}/>}
            nestedItems={[
              <ListItem key={1} leftIcon={<CircleIcon color={red900}/>}>
                <Checkbox label="Fact Investigation/Development"/>
              </ListItem>,
              <ListItem key={2} leftIcon={<CircleIcon color={grey600}/>}>
                <Checkbox label="Analysis/Strategy"/>
              </ListItem>,
              <ListItem key={3} leftIcon={<CircleIcon color={amber500}/>}>
                <Checkbox label="Experts Consultants"/>
              </ListItem>,
              <ListItem key={4} leftIcon={<CircleIcon color={lightGreenA700}/>}>
                <Checkbox label="Document/File Management"/>
              </ListItem>,
              <ListItem key={5} leftIcon={<CircleIcon color={grey600}/>}>
                <Checkbox label="Budgeting"/>
              </ListItem>
            ]}
          />
          <ListItem primaryText="L200 Pre-Trial Pleadings and Motions" leftIcon={<CircleIcon color={grey600}/>}
            nestedItems={[
              <ListItem key={1} leftIcon={<CircleIcon color={red900}/>}>
                <Checkbox label="Fact Investigation/Development"/>
              </ListItem>
            ]}
          />
          <ListItem primaryText="L300 Discovery" leftIcon={<CircleIcon color={grey600}/>}
            nestedItems={[
              <ListItem key={1} leftIcon={<CircleIcon color={red900}/>}>
                <Checkbox label="Fact Investigation/Development"/>
              </ListItem>
            ]}
          />
          <ListItem primaryText="L400 Trial Preperation and Trial" leftIcon={<CircleIcon color={grey600}/>}
            nestedItems={[
              <ListItem key={1} leftIcon={<CircleIcon color={red900}/>}>
                <Checkbox label="Fact Investigation/Development"/>
              </ListItem>
            ]}
          />
          <ListItem primaryText="L500 Appeal" leftIcon={<CircleIcon color={grey600}/>}
            nestedItems={[
              <ListItem key={1} leftIcon={<CircleIcon color={red900}/>}>
                <Checkbox label="Fact Investigation/Development"/>
              </ListItem>
            ]}
          />
        </List>
      </div>
    );
  }
}
