import React from 'react';
import RX, { Styles, View, Text } from 'reactxp';
class App extends RX.Component {
  render() {
    return (
      <View style={[ss.box]} >
        <Text style={[ss.text]} >Hello ReactXP</Text>
      </View>
    )
  }
}

const ss = {
  box: Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }, false),
  text: Styles.createTextStyle({
    backgroundColor: '#f5fcff',
    color: '#f33',
    fontSize: 40,
  }, false)
}

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);