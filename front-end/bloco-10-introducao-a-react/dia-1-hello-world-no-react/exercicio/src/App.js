import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  // const compromissos = ['Acordar', 'Tomar Café', 'Banhar', 'Programar'];
  // return (compromissos.map((compromisso) => Task(compromisso)));
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
