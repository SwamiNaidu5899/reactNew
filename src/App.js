import './App.css';
import Modals from './Components/FunctionCom/Modals';
import CustomNavBar from './Components/FunctionCom/Styles/Button';
import PopUp from './Components/FunctionCom/Styles/alert';
import CustomFooter from './Components/FunctionCom/Styles/Footer';
import ButtonUsage from './Components/MUi/Crads';



function App() {
  return (
    <div className="App">
      

      <CustomNavBar/>
      
      {true ? <Modals/> : null}

      <PopUp/>
     
      <ButtonUsage/><br/><br/>

      <CustomFooter/>

    </div>
  );
}

export default App;
