import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {

  const students = [
    { name: 'Ken', age: 45 },
    { id: 1, name: 'Kim', age: 5 },
    { id: 2, name: 'Kent', age: 56 },
    { id: 3, name: 'Lynn', age: 4 },
    { id: 4, name: 'Boss', age: 48 }
  ];

  const techers = [
    { name: 'Ken', age: 45 },
    { id: 1, name: 'Kim', age: 5 },
    { id: 2, name: 'Kent', age: 56 },
    { id: 3, name: 'Lynn', age: 4 },
    { id: 4, name: 'Boss', age: 48 }
  ];

  return (
    <>
      <Header />
      <Food />
      <Footer />
      <List items={students} category="Students" />
      <List items={students} category="Teachers" />

      <UserGreeting isLoggedIn={false} username='Kankan' />
      <UserGreeting />
      <Card />
      <Card />
      <Button />
      <Student name="Mansa Musa" age={50} isStudent={false} />
      <Student name="Omondi Timon" />
    </>
  );

}

export default App
