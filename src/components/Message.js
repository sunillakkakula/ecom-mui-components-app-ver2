import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <div>
      <Alert style={{ marginTop: "250px" }} variant={variant}>
        {children}
      </Alert>
    </div>
  );
};

// Message.defaultProps = {
//   variant: "info",
// };

export default Message;
