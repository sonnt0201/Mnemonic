import { Spinner } from "react-bootstrap";

export const LoadingAnimation = (isActive) => {
  return (isActive === true) ? (
    <div className="spinners">
      <Spinner className="me-2" animation="grow" size="sm" variant="primary" />
      <Spinner className="me-2" animation="grow" size="sm" variant="danger" />
      <Spinner className="me-2" animation="grow" size="sm" variant="warning" />
    </div>
  ) : (
    <></>
  );
};
