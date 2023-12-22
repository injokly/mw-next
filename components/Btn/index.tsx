import PropTypes from "prop-types";
import React from "react";
import styles from './styles.module.css';
import { SolidCall1 } from "@/icons/SolidCall1";

export const Btn = ({
    btnTxt = "#btn_txt",
    bg=["nega", "posi"],
    grade=["ter", "sec", "pri"],
    showIco=['left','right'],
    size=["large", "medium", "small"],
    state=["disabled", "default"],
    href,
    className,
    elementBtnIcoTxtClassName,
    ...restProps
}:any) => {
    const Tag = href ? 'a': 'button';
    return (
        <Tag
            {...restProps}
            className={[styles[`solid`], styles[`${showIco}`], styles[`size-1-${size}`], styles[`state-2-${state}`], styles[`grade-3-${grade}`], styles[`${bg}`], styles[`${className}`] ].join(" ")}
        >
            <div className={[styles[`btn-txt-4`], styles[`${elementBtnIcoTxtClassName}`]].join(" ")}>
            {
                showIco==="left" && (
                    <SolidCall1
                    className="solid-call"
                    color={
                      bg === "nega"
                        ? "white"
                        : state === "default" && bg === "posi"
                        ? "#17008C"
                        : state === "disabled"
                        ? "#B8B8B8"
                        : undefined
                    }
                  />
                )
            }
            {showIco === "off" && <>{btnTxt}</>}
            {showIco === "right" && <div className={styles[`btn-txt-5`]}>{btnTxt}</div>}
            {
                showIco==="right" && (
                    <SolidCall1
                    className="solid-call-1"
                    color={
                      state === "default" && bg === "posi"
                        ? "#17008C"
                        : state === "disabled"
                        ? "#B8B8B8"
                        : bg === "nega"
                        ? "white"
                        : undefined
                    }
                  />
                )
            }
            {showIco === "left" && <div className={styles[`btn-txt-6`]}>{btnTxt}</div>}
            </div>
        </Tag>
    );
}

Btn.propTypes = {
    btnTxt: PropTypes.string,
    bg: PropTypes.oneOf(["nega", "posi"]),
    grade: PropTypes.oneOf(["ter", "sec", "pri"]),
    showIco: PropTypes.oneOf(["off", "right", "left"]),
    size: PropTypes.oneOf(["large", "medium", "small"]),
    state: PropTypes.oneOf(["disabled", "default"]),
};
