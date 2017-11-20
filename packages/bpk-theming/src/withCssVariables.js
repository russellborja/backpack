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

import React from 'react';
import PropTypes from 'prop-types';

const withCssVariables = (Component) => {
  class WithCssVariables extends React.Component {
    constructor(props) {
      super(props);
      this.updateCssVariables = this.updateCssVariables.bind(this);
    }

    componentDidUpdate() {
      this.updateCssVariables();
    }

    componentdidMount() {
      this.updateCssVariables();
    }

    updateCssVariables() {
      const { theme } = this.props;
      if (theme) {
        Object.keys(theme).forEach((variableName) => {
          const cssName = variableName.replace(/([A-Z])/g, variable => `-${variable.toLowerCase()}`);
          const value = theme[variableName];
          this.div.style.setProperty(`--${cssName}`, value);
        });
      }
    }

    render() {
      const { ...rest } = this.props;
      return (
        <div ref={(div) => { this.div = div; }}>
          <Component {...rest} />
        </div>
      );
    }
  }

  WithCssVariables.propTypes = {
    theme: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  WithCssVariables.defaultProps = {
    theme: null,
  };

  return WithCssVariables;
};

export default withCssVariables;
