import React, {useContext,useEffect}from 'react'
import { DataContext } from '../../context/index';
import './Pagination.css'


import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = () => {
    const getData = useContext(DataContext);


    const {data,  booksPerPage, currentPage, setCurrentPage, totalPages, setTotalPages} = getData

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
        
            const total = Math.ceil((data.length) / booksPerPage)
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


        <div class="pagin-container">
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
        </div>

        
    )
}

export default PaginationComponent