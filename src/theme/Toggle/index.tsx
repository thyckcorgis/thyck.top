/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  SyntheticEvent,
  useState,
  useRef,
  useEffect,
  memo,
} from "react";

// import { useThemeConfig, type ColorModeConfig } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";

import clsx from "clsx";
import styles from "./styles.module.css";
import IconDarkMode from "@theme/IconDarkMode";
import IconLightMode from "@theme/IconLightMode";

type SwitchConfig = {
  darkIcon: string;
  lightIcon: string;
  darkIconStyle: any;
  lightIconStyle: any;
};

// switchConfig: {
//   darkIcon: "🌚",
//   lightIcon: "🌝",
// },

export interface Props {
  readonly className?: string;
  readonly checked: boolean;
  readonly onChange: (e: SyntheticEvent) => void;
}

// Based on react-toggle (https://github.com/aaronshaf/react-toggle/).
const ToggleComponent = memo(
  ({ className, checked: defaultChecked, onChange }: Props): JSX.Element => {
    const isBrowser = useIsBrowser();
    const [checked, setChecked] = useState(defaultChecked);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
      setChecked(defaultChecked);
    }, [defaultChecked]);

    return (
      <div
        className={clsx(styles.toggle, className, {
          [styles.toggleChecked]: checked,
          [styles.toggleFocused]: focused,
          [styles.toggleDisabled]: !isBrowser,
        })}
      >
        <div
          className={styles.toggleTrack}
          role="button"
          tabIndex={-1}
          onClick={() => inputRef.current?.click()}
        >
          <div className={styles.toggleTrackCheck}>
            <span className={styles.toggleIcon}>
              <IconDarkMode />
            </span>
          </div>
          <div className={styles.toggleTrackX}>
            <span className={styles.toggleIcon}>
              <IconLightMode />
            </span>
          </div>
          <div className={styles.toggleTrackThumb} />
        </div>

        <input
          ref={inputRef}
          checked={checked}
          type="checkbox"
          className={styles.toggleScreenReader}
          aria-label={translate(
            {
              message: "Switch between dark and light mode (currently {mode})",
              id: "theme.colorToggle.ariaLabel",
              description: "The ARIA label for the navbar color mode toggle",
            },
            {
              mode: checked
                ? translate({
                    message: "dark mode",
                    id: "theme.colorToggle.ariaLabel.mode.dark",
                    description: "The name for the dark color mode",
                  })
                : translate({
                    message: "light mode",
                    id: "theme.colorToggle.ariaLabel.mode.light",
                    description: "The name for the light color mode",
                  }),
            }
          )}
          onChange={onChange}
          onClick={() => setChecked(!checked)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputRef.current?.click();
            }
          }}
        />
      </div>
    );
  }
);

export default memo(ToggleComponent);
