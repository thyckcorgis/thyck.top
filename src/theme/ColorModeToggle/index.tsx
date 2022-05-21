import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import IconLightMode from "@theme/IconLightMode";
import IconDarkMode from "@theme/IconDarkMode";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useState, useRef } from "react";
import { useEffect } from "react";

type Color = "dark" | "light";
interface ColorModeToggleProps {
  className: string;
  value: Color;
  onChange: (color: Color) => void;
}

function ColorModeToggle({ className, value, onChange }: ColorModeToggleProps) {
  const isBrowser = useIsBrowser();
  const [checked, setChecked] = useState(() => value === "light");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    onChange(checked ? "light" : "dark");
  }, [checked]);

  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
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
  );

  return (
    <div
      className={clsx(styles.toggle, className, {
        [styles.toggleChecked]: checked,
        [styles.toggleFocused]: focused,
        [styles.toggleDisabled]: !isBrowser,
      })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
      }}
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
        title={title}
        className={styles.toggleScreenReader}
        aria-label={title}
        onChange={() => setChecked(!checked)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

export default React.memo(ColorModeToggle);
