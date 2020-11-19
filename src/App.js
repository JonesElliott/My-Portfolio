import Navbar from './components/nav/navbar';
import Header from './components/header/header';
import { Work, Projects } from './components/work/work';
// import Projects from './components/projects/projects';
import './App.css';
// import Projects from './components/work/work';

let json = require('./assets/projects.json');

function App() {

  const projects = {
    data: json
  }

  console.log(projects.data);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Work>
        {
          projects.data.map(data => <Projects key={projects.data.id} data={data} />)
        }
      </Work>
    </div>
  );
}

export default App;
