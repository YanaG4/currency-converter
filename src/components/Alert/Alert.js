import { useState } from 'react'
import AlertPortal from './AlertPortal';
import './Alert.css';
import CancelButton from './CancelButton';

export default function Alert({title="Unfortunately, the API used in this app isn't publicly available anymore", message="I'm looking for another API. For now the main functionality isn't available."}) {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <AlertPortal>
      <div className='alert-container'>
        <div className='alert-header-container'>
          {title}
          <CancelButton onClick={() => setIsVisible(false)} />
        </div>
        <p>{message}</p>
      </div>
    </AlertPortal>
  )
}
