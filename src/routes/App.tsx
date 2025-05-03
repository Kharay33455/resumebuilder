import Index from './Index.tsx';
import Page from './Page.tsx';
import { HashRouter, Routes, Route } from 'react-router';


function App() {
  return (
    <>
    <h1>
      Nav bar
    </h1>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path = "/page2" element = {<Page/>}/>

      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
