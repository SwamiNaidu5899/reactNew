import Alert from 'react-bootstrap/Alert';

function PopUp() {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default PopUp;