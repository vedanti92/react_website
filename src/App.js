import './App.css';

function Navbar() {
  return (
    <nav>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='React Logo' className='nav--icon'/>
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>Home</h4>
    </nav>
  )
}

function MainContent() {
  return (
    <main>
      <h1 className='main--title'>Fun facts about React</h1>
      <ul className='main--facts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
 }

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
