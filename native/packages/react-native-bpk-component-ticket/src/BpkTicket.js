/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  View,
  Platform,
  StyleSheet,
  PixelRatio,
  ViewPropTypes,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';
import BpkTouchableOverlay from 'react-native-bpk-component-touchable-overlay';

const tokens = Platform.select({
  ios: () => require('bpk-tokens/tokens/ios/base.react.native.common.js'), // eslint-disable-line global-require
  android: () => require('bpk-tokens/tokens/android/base.react.native.common.js'), // eslint-disable-line global-require
})();

const {
  colorGray100,
  colorWhite,
  elevationXs,
  elevationLg,
  borderRadiusSm,
  borderRadiusPill,
  spacingSm,
  spacingMd,
  spacingBase,
  shadowSmColor,
  shadowSmOffsetWidth,
  shadowSmOffsetHeight,
  shadowSmOpacity,
  shadowSmRadius,
  shadowXlColor,
  shadowXlOffsetWidth,
  shadowXlOffsetHeight,
  shadowXlOpacity,
  shadowXlRadius,
} = tokens;


const surface = {
  backgroundColor: colorWhite,
  borderRadius: borderRadiusSm,
  elevation: elevationXs,
  shadowColor: shadowSmColor,
  shadowOffset: { width: shadowSmOffsetWidth, height: shadowSmOffsetHeight / PixelRatio.get() },
  shadowOpacity: shadowSmOpacity,
  shadowRadius: shadowSmRadius / PixelRatio.get(),
};

const surfaceFocused = {
  elevation: elevationLg,
  shadowColor: shadowXlColor,
  shadowOffset: { width: shadowXlOffsetWidth, height: shadowXlOffsetHeight / PixelRatio.get() },
  shadowOpacity: shadowXlOpacity,
  shadowRadius: shadowXlRadius / PixelRatio.get(),
};

const styles = StyleSheet.create({
  ticket: {
  },
  ticketFocused: {
    ...surfaceFocused,
  },
  ticketInner: {
    padding: Platform.select({ ios: null, android: 4 }),
    flexDirection: 'row',
    backgroundColor: 'transparent', // otherwise this view's corners would bleed outwith the outer container
  },
  ticketInnerVertical: {
    flexDirection: 'column',
  },
  ticketMain: {
    flex: 1,
    ...surface,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  ticketMainFocused: {
  },
  ticketMainVertical: {
    flex: null,
  },
  ticketMainPadded: {
    padding: spacingBase,
  },
  ticketPunchlineContainer: {
    width: 8,
    zIndex: 1,
    elevation: elevationXs,
  },
  ticketPunchlineNotch: {
    height: 4,
    width: 8,
    overflow: 'hidden',
    elevation: elevationXs,
  },
  ticketPunchlineNotchShape: {
    top: -8,
    left: -4,
    height: 16,
    width: 16,
    borderRadius: borderRadiusPill,
    borderWidth: 4,
    borderColor: colorWhite,
    zIndex: 1,
    elevation: elevationXs,
  },
  ticketPunchlineNotchShapeFlipped: {
    top: null,
    bottom: 4,
  },
  ticketPunchlineNotchShadow: {
    position: 'absolute',
    bottom: -1,
    width: 8,
    height: 1,
    backgroundColor: colorWhite,
    shadowColor: shadowSmColor,
    shadowOffset: { width: shadowSmOffsetWidth, height: shadowSmOffsetHeight / PixelRatio.get() },
    shadowOpacity: shadowSmOpacity,
    shadowRadius: shadowSmRadius / PixelRatio.get(),
  },
  ticketPunchlineNotchShadowFlipped: {
    top: -1,
    bottom: null,
  },
  ticketPunchlineWrapper: {
    flex: 1,
    width: 8,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colorWhite,
    elevation: elevationXs,
  },
  ticketPunchline: {
    flex: 1,
    flexDirection: 'column',
  },
  ticketPunchlineFocused: {
  },
  ticketPunchlineVertical: {
    width: null,
    marginTop: null,
    marginRight: spacingMd,
    marginBottom: null,
    marginLeft: spacingMd,
    flexDirection: 'row',
  },
  ticketStub: {
    flex: 1,
    ...surface,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  ticketStubFocused: {
  },
  ticketStubVertical: {
    flex: null,
  },
  ticketStubPadded: {
    padding: spacingBase,
  },
});

const BpkTicket = (props) => {
  const {
    children,
    stub,
    vertical,
    focused,
    padded,
    style: userStyle,
    mainStyle: userMainStyle,
    stubStyle: userStubStyle,
    ...rest
  } = props;

  const style = [styles.ticket];
  const innerStyle = [styles.ticketInner];
  const mainStyle = [styles.ticketMain];
  const punchlineStyle = [styles.ticketPunchline];
  const stubStyle = [styles.ticketStub];

  if (vertical) {
    innerStyle.push(styles.ticketInnerVertical);
    mainStyle.push(styles.ticketMainVertical);
    punchlineStyle.push(styles.ticketPunchlineVertical);
    stubStyle.push(styles.ticketStubVertical);
  }
  if (padded) {
    mainStyle.push(styles.ticketMainPadded);
    stubStyle.push(styles.ticketStubPadded);
  }
  if (focused) {
    style.push(styles.ticketFocused);
    mainStyle.push(styles.ticketMainFocused);
    punchlineStyle.push(styles.ticketPunchlineFocused);
    stubStyle.push(styles.ticketStubFocused);
  }
  if (userStyle) { style.push(userStyle); }
  if (userMainStyle) { mainStyle.push(userMainStyle); }
  if (userStubStyle) { stubStyle.push(userStubStyle); }

  return (
    <BpkTouchableOverlay
      accessibilityComponentType="button"
      style={style}
      {...rest}
    >
      <View style={innerStyle}>
        <View style={mainStyle}>{children}</View>
        <View style={styles.ticketPunchlineContainer}>
          <View style={styles.ticketPunchlineNotch}>
            <View style={styles.ticketPunchlineNotchShape} />
            <View style={styles.ticketPunchlineNotchShadow} />
          </View>
          <View style={styles.ticketPunchlineWrapper}>
            <Dash
              style={punchlineStyle}
              dashGap={spacingSm}
              dashLength={spacingSm}
              dashThickness={1}
              dashColor={colorGray100}
            />
          </View>
          <View style={styles.ticketPunchlineNotch}>
            <View style={[styles.ticketPunchlineNotchShape, styles.ticketPunchlineNotchShapeFlipped]} />
            <View style={[styles.ticketPunchlineNotchShadow, styles.ticketPunchlineNotchShadowFlipped]} />
          </View>
        </View>
        <View style={stubStyle}>{stub}</View>
      </View>
    </BpkTouchableOverlay>
  );
};

BpkTicket.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  stub: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  focused: PropTypes.bool,
  padded: PropTypes.bool,
  style: ViewPropTypes.style,
  mainStyle: ViewPropTypes.style,
  stubStyle: ViewPropTypes.style,
};

BpkTicket.defaultProps = {
  vertical: false,
  focused: false,
  padded: true,
  style: null,
  mainStyle: null,
  stubStyle: null,
};

export default BpkTicket;
