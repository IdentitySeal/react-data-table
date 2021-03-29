import { DataProvider } from "../src/context/index"

import TableComponent from './components/TableComponent'
import PaginationComponent from './components/Pagination'
import Search from './components/Search'
import Header from './components/Header'
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  return (
    <>
      <DataProvider>
        <Search />
        <Table striped bordered hover>
          <Header />
          <TableComponent />
          <Header />
          <PaginationComponent
            // total={totalItems}
            // booksPerPage={booksPerPage}
            // currentPage={currentPage}
            // onPageChange={page => setCurrentPage(page)}
            
          />
        </Table>
      </DataProvider>
    </>
  );
}

export default App;
