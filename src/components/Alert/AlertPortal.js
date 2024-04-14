import ReactDOM from 'react-dom';

export default function AlertPortal({children}) {
  return ReactDOM.createPortal(
    children,
    document.body
  );
}
