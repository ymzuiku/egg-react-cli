import React from 'react';
import {Platform, GestureView, Input, View} from 'reactxp'
import {Keyboard} from 'react-native'

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <GestureView  onTap={Keyboard.dismiss}>
      <Comp {...props}>
        {children}
      </Comp>
    </GestureView>
  )
}
const DismissKeyboardView = DismissKeyboardHOC(View)

export {
  DismissKeyboardHOC, DismissKeyboardView
}