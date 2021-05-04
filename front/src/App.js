
import React, {  useContext } from 'react'
import { DataContext } from '../src/context/index';

import LoaderComponent from './components/Loader/LoaderComponent'


import TableComponent from './components/TableComponent/TableComponent'
import PaginationComponent from './components/Pagination/Pagination'
import Search from './components/Search/Search.js'
// import Header from './components/Header'
import Table from 'react-bootstrap/Table'


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'




const App = () => {
  const { loading } = useContext(DataContext);

  return (
    <div className="App-header">
      <Search />
      {
        !loading ?
          <LoaderComponent />
          :

          <div>
            <Table  striped bordered hover>
              {/* <Header /> */}

              <TableComponent />
              {/* <Header /> */}

            </Table>
            <PaginationComponent />
          </div>
      }

    </div>
  );
}

export default App;
