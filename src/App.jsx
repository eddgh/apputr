import { useState, useEffect } from 'react';
import Paciente from './components/paciente';
// import { Teste } from './components/Teste';

function App() {

  const [listaPacientes, setListaPacientes] = useState([]);

  useEffect(() => {
    async function carregaPacientes() {
      try {
        const response = await fetch('http://localhost:3333/pacientes');
        const dados = await response.json();
        setListaPacientes(dados);
      } catch (error) {
        console.log(error.message)
      }
    }
    carregaPacientes();
  }, [])

  return (
    <main>
      <header>
        <img src="./pacientes.png" alt="" />
        <h1>Pacientes da unidade: {listaPacientes.length}</h1>
      </header>

      <div className="container">
        <div className={'grid'}>
          {listaPacientes && (
            listaPacientes.map((paciente, index) => {
              return (
                <Paciente key={index} paciente={paciente} />
              )
            })
          )}
        </div>
      </div>
    </main>
  )
}

export default App
