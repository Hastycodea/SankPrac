import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Students.jsx'

function App() {

  return (
    <>
      <Header />
      <Food />
      <Footer />
      <Card />
      <Card />
      <Button />
      <Student name="Mansa Musa" age={50} isStudent={false}/>
      <Student name="Omondi Timon"/>
    </>
  );

}

export default App
