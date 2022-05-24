import './App.css';
import {QueryClientProvider,QueryClient} from 'react-query'
import { Example } from './Example';

const queryClient = new QueryClient();


function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
