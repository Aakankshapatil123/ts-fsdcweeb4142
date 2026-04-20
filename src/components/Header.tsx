type person = {
    name: string;
    age: number;
}


function Header(props:person){
  return(
    <>
    <h1>Hello {props.name}! You are {props.age} years old!</h1>
    </>
  )
}

export default Header;