import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Theme from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {
  Avatar, Card, CardActions,
  CardHeader, CardMedia, CardTitle,
  RaisedButton, FlatButton, CardText,
  ThemeWrapper
} from 'material-ui';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(Theme)
class App extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Title"
          subtitle="Subtitle"
          avatar={<Avatar style={{color: 'red'}}>A</Avatar>}/>
        <CardHeader
          title="Demo Url Based Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Title" subtitle="Subtitle"/>
        <CardActions>
          <RaisedButton primary={true} label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

render(<App />, document.getElementById('app'));
