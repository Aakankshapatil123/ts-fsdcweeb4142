import Header from "./components/Header";

Header

function App(){
  let name: string = "piu";
  let age: number = 25;
    return(
      <>
      <Header name={name} age={age}/>
      </>
    )
  
}

export default App;