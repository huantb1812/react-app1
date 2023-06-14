
import { useEffect , useState} from 'react';

import './style.css';

export default function Root(props) {
  const [message, setMessage] = useState('');
  const [txt, setTxt] = useState('hello, I am reactjs');

  useEffect(() => {
    const handleCustomEvent = (event) => {
      // Handle the custom event here
     setMessage(event.detail);
      console.log('Custom event received:', event.detail);
    };

    window.addEventListener('event', handleCustomEvent);

    return () => {
      window.removeEventListener('event', handleCustomEvent);
    };
  }, []); // Empty dependency array to run the effect only once
  function sendMessage() {
    const event = new CustomEvent('event2', {detail: txt});
    dispatchEvent(event);
  }
  return <section>{props.name} is mounted!
  <br />
  <a href="/angular-app1">angular app1</a>
  <a href="/angular-app2">angular app2</a>
  <a href="/welcome">welcome</a>
  {message}
  <input type="text" id="message" value={txt} />
  <button onClick={sendMessage}>send</button>
  </section>;
}
