import React, {useContext,useEffect}from 'react'
import { DataContext } from '../context/index';


import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = () => {
    const getData = useContext(DataContext);


    const {  booksPerPage, currentPage, setCurrentPage, totalPages, setTotalPages} = getData

    const nextPageChange = () => {
        setCurrentPage( 
             currentPage + 1
        )
        // console.log(currentPage)

    }
    const prevPageChange = () => {
        setCurrentPage(
            currentPage - 1
        )
        // console.log(currentPage)

    }

    const itemChange = ( number ) => {
        // console.log(number)
        setCurrentPage(number)
    }


    useEffect(() => {
        const getTotal = () => {
        
            // const total = Math.ceil((data.length) / booksPerPage)
            // The above arithmentic would have gotten exact data array length from https://anapioficeandfire.com/api/books
            // but the value i got wasn't correct so i manually inputed 12

        const total = Math.ceil(12 / booksPerPage)
        setTotalPages(total)
    }
        getTotal()
       

    },)
      
    let items = [];

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick ={() => itemChange(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <Pagination>
            <Pagination.Prev
                onClick={() => prevPageChange()}
                disabled={currentPage === 1}
            />
            {items}

            <Pagination.Next
                onClick={() => nextPageChange()}
                disabled={currentPage === totalPages}
            />
        </Pagination>
    )
}

export default PaginationComponent