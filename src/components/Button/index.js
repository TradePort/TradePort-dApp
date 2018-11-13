import React from "react";
import PropTypes from "prop-types";
import * as Icon from "react-feather";
import Loader from "../Loader";
import button from "./button.scss";

const Button = props => {
  const {
    className,
    type,
    disabled,
    onClick,
    loading,
    icon,
    fitWidth,
    margin,
    onMouseDown,
    buttonType
  } = props;

  let loaderColor = "white";
  if (type === "default") {
    loaderColor = "blue";
  }

  let classes = [];
  //   if (disabled) {
  //       classes.push(button.disabled)
  //   }
  let wrapper = "";
  if (loading) {
    //   wrapper = button.wrapper;
  }

  const onClickHandler = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };
  return (
    <button
      className={`${className} ${classes.join(" ")}`}
      onClick={onClickHandler}
      disabled={disabled}
      onMouseDown={onMouseDown}
      type={buttonType}
    >
      <div className={wrapper}>
        {icon && <Icon.$ {...icon} />}
        {props.children}
      </div>
      {loading && <Loader />}
    </button>
  );
};

Button.PropTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "default", "link"]),
  icon: PropTypes.array,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {},
  type: "default",
  fitWidth: false,
  onMouseDown: () => {}
};

export default Button;
