import logo from './logo.svg';
import './App.css';
import Button from './Button/Button';
import Header from './Header/Header';
import Flex from './Flex/Flex';
import Item from './ItemListContainer/Item';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Header>

      </Header>
      <div className="App">
        <header className="App-header">


          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a  
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Flex>
            <Button text="Aceptar"></Button>
            <Button text="Aprender" color="purple" size="64px"></Button>
            <Button>Que onda</Button>
          </Flex>
          <Flex>
            <Item
              price={60000}
              title="TCL 30 SE "
              description="128 GB space gray 4 GB RAM"
              img="https://http2.mlstatic.com/D_Q_NP_620277-MLA51777854599_092022-W.webp"
            />
            <Item
              price={30000}
              title="TCL 30 E "
              description="64 GB space gray 3 GB RAM"
              img="https://http2.mlstatic.com/D_Q_NP_725392-MLA51542352177_092022-W.webp"
            />
          </Flex>

        </header>
      </div></>
  );
}   
  
export default App;
