import EmployeeList from "./components/employee-list";
import EmployeeContextProvider from './contexts/employee-context';

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            
            <EmployeeContextProvider>
                <EmployeeList />
            </EmployeeContextProvider>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
