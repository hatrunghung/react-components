import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalStyles from '@zendesk/garden-css-modals';
import { composeEventHandlers } from '@zendesk/garden-react-selection';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.close';

const StyledClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ModalStyles['c-dialog__close'], {
      // State
      [ModalStyles['is-focused']]: props.focused,
      [ModalStyles['is-hovered']]: props.hovered
    })
})`
  ::-moz-focus-inner {
    border: 0;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Used to close a Modal. Supports all `<button>` props.
 */
export default class Close extends Component {
  static propTypes = {
    focused: PropTypes.bool,
    hovered: PropTypes.bool
  };

  state = {
    isFocused: false
  };

  render() {
    const { onFocus, onBlur, ...other } = this.props; // eslint-disable-line react/prop-types
    const { isFocused } = this.state;

    return (
      <StyledClose
        focused={isFocused}
        onFocus={composeEventHandlers(onFocus, () => this.setState({ isFocused: true }))}
        onBlur={composeEventHandlers(onBlur, () => this.setState({ isFocused: false }))}
        {...other}
      />
    );
  }
}
