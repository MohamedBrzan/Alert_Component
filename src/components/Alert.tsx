import './Alert.css';

type Props = {
  severity: string;
  variant?: string;
  rounded?: boolean;
  text: string;
};

const Alert = ({ severity, variant, rounded, text }: Props) => {
  return (
    <div className='container'>
      {rounded ? (
        <div>
          <div className={`alert alert-${severity} rounded ${variant}`}>
            <img src={`/images/${severity}.svg`} alt={severity} />
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className={`alert alert-${severity} ${variant}`}>
          <img src={`/images/${severity}.svg`} alt={severity} />
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Alert;
