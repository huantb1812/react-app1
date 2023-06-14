
import './style.css';

export default function Root(props) {
  return <section>{props.name} is mounted!
  <br />
  <a href="/angular-app1">angular app1</a>
  <a href="/angular-app2">angular app2</a>
  <a href="/welcome">welcome</a>

  </section>;
}
