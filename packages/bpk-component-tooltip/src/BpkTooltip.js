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

import PropTypes from 'prop-types';
import React from 'react';
import { TransitionInitialMount, cssModules } from 'bpk-react-utils';

import STYLES from './bpk-tooltip.scss';
import { ARROW_ID } from './constants';

const getClassName = cssModules(STYLES);

const BpkTooltip = (props) => {
  const {
    id,
    children,
    className,
    padded,
    ...rest
  } = props;

  const classNames = [getClassName('bpk-tooltip')];
  const innerClassNames = [getClassName('bpk-tooltip__inner')];

  // outer classNames
  if (className) { classNames.push(className); }

  // inner classNames
  if (padded) { innerClassNames.push(getClassName('bpk-tooltip__inner--padded')); }

  return (
    <TransitionInitialMount
      appearClassName={getClassName('bpk-tooltip--appear')}
      appearActiveClassName={getClassName('bpk-tooltip--appear-active')}
      transitionTimeout={200}
    >
      <section
        id={id}
        tabIndex="-1"
        role="dialog"
        className={classNames.join(' ')}
        {...rest}
      >
        <span id={ARROW_ID} className={getClassName('bpk-tooltip__arrow')} role="presentation" />
        <div className={innerClassNames.join(' ')}>
          {children}
        </div>
      </section>
    </TransitionInitialMount>
  );
};

BpkTooltip.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padded: PropTypes.bool,
};

BpkTooltip.defaultProps = {
  className: null,
  padded: true,
};

export default BpkTooltip;
