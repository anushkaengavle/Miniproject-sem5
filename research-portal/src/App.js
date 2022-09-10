import logo from './logo.svg';
import './App.css';
import htmlContent from './stu_home.js'
function App() {
  return (
    <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
  );
}

export default App;
