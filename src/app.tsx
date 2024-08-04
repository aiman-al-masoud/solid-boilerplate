import { createSignal } from "solid-js";
import "./scss/app.css";
import { Button, Card } from "solid-bootstrap";



export default function App() {

  const [count, setCount] = createSignal(0)

  return <>

    <Card style={{ width: '18rem' }}>

      <Card.Header>
        This is a card
      </Card.Header>

      <Card.Body>
        This is the body of the card, the current count is = {count()}.
      </Card.Body>

      <Button onClick={() => setCount(count() + 1)}>Increment</Button>
      <Button onClick={() => setCount(count() - 1)}>Decrement</Button>

      <Card.Footer>
        This is the footer of the card.
      </Card.Footer>

    </Card>

  </>
}
