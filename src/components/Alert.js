import React from "react";

export default function Alert(props) {
  const capitalized = word => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.type)}</strong>&nbsp;&nbsp;:&nbsp;&nbsp;{props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
      </div>
    )
  );
}