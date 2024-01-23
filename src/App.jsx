import styles from "./App.module.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1>Hello from React!</h1>
      <main className={styles.container}>
        <Card title="iPhone" text="Apple" price={800} />
        <Card title="Gameboy" text="Nintendo" price={84.5} featured />
        <Card title="Walkman" text="Sony" price={140} />
      </main>
    </>
  );
}

export default App;
