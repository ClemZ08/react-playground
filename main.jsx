//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const helloWorld = <h1>Hello world!</h1>;

const lastName = "John";
const firstName = "riffaud";

const helloWorld2 = (
  <div>
  <span className="lastname">{lastName}</span>
  <span>{firstName}</span>
  </div>
);

ReactDOM.render(helloWorld2, document.querySelector('#app'));
