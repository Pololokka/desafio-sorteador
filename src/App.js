import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    handleNumero();
  }, []);

  const handleNumero = () => {
    const numeroSorteio = Math.ceil(Math.random() * 100);
    setNumero(numeroSorteio);
  };

  return (
    <div className="App">
      <main className="main__container">
        <p className="titulo">O número sorteado é: {numero}</p>
        <input
          onClick={() => handleNumero()}
          type="button"
          value="Sortear!"
          className="texto btn__geral"
        />
      </main>
    </div>
  );
}

export default App;
