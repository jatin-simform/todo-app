import TodoProvider from './Components/TodoProvider';
import Main from './Pages/Main';

function App() {

  return <>
    <TodoProvider>
      <Main/>
    </TodoProvider>
  </>
}

export default App
