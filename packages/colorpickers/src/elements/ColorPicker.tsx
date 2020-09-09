/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable */

import * as React from 'react';
import {
  ColorPicker as FluentColorPicker,
  IColorPickerStyles,
  IColorPickerProps
} from 'office-ui-fabric-react/lib/index';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

export const ColorPicker = React.forwardRef<HTMLDivElement, IColorPickerProps>((props, ref) => {
  return (
    <div className={classNames.wrapper}>
      <FluentColorPicker
        styles={colorPickerStyles}
        // The ColorPicker provides default English strings for visible text.
        // If your app is localized, you MUST provide the `strings` prop with localized strings.
        strings={{
          // By default, the sliders will use the text field labels as their aria labels.
          // If you'd like to provide more detailed instructions, you can use these props.
          alphaAriaLabel:
            'Alpha slider: Use left and right arrow keys to change value, hold shift for a larger jump',
          transparencyAriaLabel:
            'Transparency slider: Use left and right arrow keys to change value, hold shift for a larger jump',
          hueAriaLabel:
            'Hue slider: Use left and right arrow keys to change value, hold shift for a larger jump',
          red: 'R',
          green: 'G',
          blue: 'B',
          alpha: 'A'
        }}
        {...props}
      />
    </div>
  );
});

const classNames = mergeStyleSets({
  wrapper: { display: 'flex' },
  column2: { marginLeft: 10 }
});

/**
 * This would leverage Garden theming with a `useTheme` hook
 */
const colorPickerStyles: Partial<IColorPickerStyles> = {
  panel: { padding: 12 },
  root: {
    maxWidth: 302,
    minWidth: 302
  },
  colorRectangle: {
    height: 172,
    '> div.ms-ColorPicker-thumb': {
      width: '20px',
      height: '20px',
      'background-color': '#FFF !important'
    },
    '&.garden-focus-visible': {
      border: '1px solid green'
    }
  },
  colorSquare: {
    marginRight: '8px', // depend on RTL
    marginLeft: '0px',
    height: '32px',
    width: '32px'
  },
  flexContainer: {
    flexDirection: 'row-reverse'
  },
  flexPreviewBox: {},
  flexSlider: {
    '> div': {
      marginBottom: '8px',
      '> div.ms-ColorPicker-thumb': {
        width: '16px',
        height: '16px',
        border: 'none',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.12), 0px 4px 8px 0px rgba(4, 68, 77, 0.15)'
      }
    },
    'div[role=slider]': {
      height: '12px'
    },
    '.garden-focus-visible': {
      border: '1px solid red'
    }
  },
  input: {
    input: {
      textAlign: 'center',
      color: 'rgb(47, 57, 65)',
      '&:hover': {
        borderColor: 'purple'
      }
    },
    'input&:hover': {
      borderColor: 'purple'
    }
  },
  table: {
    // border: '2px solid magenta'
  },
  tableAlphaCell: {
    textAlign: 'center',
    color: 'rgb(104,115,125)',
    fontSize: '14px'
  },
  tableHeader: {
    textAlign: 'center',
    color: 'rgb(104,115,125)',
    fontSize: '14px'
  },
  tableHexCell: {
    // border: '2px solid orange'
  }
};
