import { useEffect } from 'react';
import { auth, db } from './firebase';

function App() {
  useEffect(() => {
    console.log("Firebase conectado!");
    console.log("Auth:", auth);
    console.log("Firestore:", db);
  }, []);

  return (
    <div>
      <h1>Meta de Vendas</h1>
      <p>TESTE</p>
      <p>Firebase inicializado com sucesso!</p>
    </div>
  );
}

export default App;
