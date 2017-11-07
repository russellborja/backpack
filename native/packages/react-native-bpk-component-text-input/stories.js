import React from 'react';
import BpkIcon from 'react-native-bpk-component-icon';
import { storiesOf } from '@storybook/react-native';
import { TextField } from 'react-native-material-textfield';
import { StyleSheet, View, Platform } from 'react-native';
import { StorySubheading } from '../../storybook/TextStyles';
import BpkTextInput from './index';

const tokens = Platform.select({
  ios: () => require('bpk-tokens/tokens/ios/base.react.native.common.js'), // eslint-disable-line global-require
  android: () => require('bpk-tokens/tokens/android/base.react.native.common.js'), // eslint-disable-line global-require
})();

const {
  spacingBase,
  spacingXs,
  borderRadiusSm,
  borderSizeSm,
  colorGray100,
  colorGray300,
  colorGray700,
  colorGreen500,
  colorRed500,
  spacingLg,
  spacingMd,
  spacingSm,
  spacingXl,
  textLgFontSize,
  textLgFontWeight,
  textLgLineHeight,
  textXsFontSize,
  textXsFontWeight,
  textXsLineHeight,
} = tokens;

const styles = StyleSheet.create({
  label: {
    marginBottom: spacingXs,
  },
  input: {
    marginBottom: spacingBase,
  },
  labelTextStyle: {
    color: colorGray700,
  },
});

storiesOf('BpkTextInput', module)
  .add('docs:text-inputs', () => (
    <View>
      <StorySubheading>Input</StorySubheading>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
      <StorySubheading>Input (Placeholder)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value=""
      />
      <StorySubheading>Valid input (small)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value="Edinburgh"
        valid
      />
      <StorySubheading>Invalid input (small)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value="Edinbrvgh"
        valid={false}
      />
      <StorySubheading>Disabled input (small)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        small
        disabled
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
      <StorySubheading>Password input (small)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        small
        secureTextEntry
        placeholder="password"
        value="password"
      />
      <StorySubheading>Telephone input (small)</StorySubheading>
      <BpkTextInput
        style={styles.input}
        small
        keyboardType="phone-pad"
        placeholder="Phone number"
        value="+441234567890"
      />
    </View>
  ))
  .add('Default', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
    </View>
  ))
  .add('Valid', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value="Edinburgh"
        valid
      />
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value="Edinburgh"
        valid
      />
    </View>
  ))
  .add('Invalid', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value="Edinbrvgh"
        valid={false}
      />
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value="Edinbrvgh"
        valid={false}
      />
    </View>
  ))
  .add('Placeholder', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        placeholder="Country, city, or airport"
        value=""
      />
      <BpkTextInput
        style={styles.input}
        small
        placeholder="Country, city, or airport"
        value=""
      />
    </View>
  ))
  .add('Disabled', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        disabled
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
      <BpkTextInput
        style={styles.input}
        small
        disabled
        placeholder="Country, city, or airport"
        value="Edinburgh"
      />
    </View>
  ))
  .add('Password', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        secureTextEntry
        placeholder="password"
        value="password"
      />
      <BpkTextInput
        style={styles.input}
        small
        secureTextEntry
        placeholder="password"
        value="password"
      />
    </View>
  ))
  .add('Telephone', () => (
    <View>
      <BpkTextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Phone number"
        value="+441234567890"
      />
      <BpkTextInput
        style={styles.input}
        small
        keyboardType="phone-pad"
        placeholder="Phone number"
        value="+441234567890"
      />
    </View>
  ))
  .add('New Version', () => {
    function errorIcon() {
      return (
        <BpkIcon
          icon="exclamation-circle"
          style={{ color: tokens.colorRed500 }}
        />
      );
    }
    function validIcon() {
      return (
        <BpkIcon
          icon="tick"
          style={{ color: tokens.colorGreen500 }}
        />
      );
    }
    return (
      <View>
        <StorySubheading>Normal</StorySubheading>
        <TextField
          label="Normal"
          value="Value"
          tintColor={tokens.colorBlue500}
          baseColor={tokens.colorGray700}
          labelTextStyle={{ color: colorGray700 }}

        />
        <StorySubheading>Placeholder</StorySubheading>
        <TextField
          label="Placeholder"
          value=""
          tintColor={tokens.colorBlue500}
          baseColor={tokens.colorGray100}
          labelTextStyle={{ color: colorGray700 }}

        />
        <StorySubheading>Error</StorySubheading>

        <TextField
          label="Error"
          value=""
          error=" "
          renderAccessory={errorIcon}
          errorColor={tokens.colorRed500}
          tintColor={tokens.colorBlue500}
          baseColor={tokens.colorGray100}
          labelTextStyle={{ color: colorGray700 }}

        />
        <StorySubheading>Valid</StorySubheading>

        <TextField
          label="Success"
          value="Value"
          renderAccessory={validIcon}
          tintColor={tokens.colorBlue500}
          baseColor={tokens.colorGray100}
          labelTextStyle={{ color: colorGray700 }}

        />
      </View>
    );
  });
