import Navbar from './components/nav/navbar';
import Header from './components/header/header';
import { Work, Projects } from './components/work/work';
import Contact from './components/contact/contact';
import './App.css';

let json = require('./assets/projects.json');

function App() {

  const projects = {
    data: json
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work>
        {
          projects.data.map(data => <Projects key={projects.data.id} data={data} />)
        }
      </Work>
      <Contact />
    </div>
  );
}

export default App;
