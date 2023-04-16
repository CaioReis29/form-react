import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Joaozinho", email: "joaozinho@gmail.com", bio: "sou um advogado", role: "admin"}}/>
    </div>
  );
}

export default App;
