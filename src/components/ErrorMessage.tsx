import React from "react";

type ErrorMessageProps = {
  error: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <div className="error">Error: {error}</div>;
};
