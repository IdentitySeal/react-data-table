import React,{ useContext,useEffect, useState} from 'react';
import { DataContext} from '../context/index'

const Search = () => {
    const getData = useContext(DataContext);
    const { search, setSearch, setCurrentPage, data, setData } = getData;

    // const [filteredbooks, setFilteredBooks] = useState([]);

    const onInputChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(1)

        console.log(search)





            // const filterbooks = data.filter(books => {
            //     return books.name.toLowerCase().includes(search.toLowerCase())
            // })
            // console.log(filterbooks)

        
        
        
        // // setFilteredBooks(filterbooks)
        // console.log(search)
        
        // // if (search === "") {
        // //     setData(data)
        // //     console.log(data)
        // // }
        // // else {
        //     setData(filterbooks)
        // //     console.log(data)

        // }
    }
    
    // useEffect(() => {
    //     onInputChange()
    // },[])

    return (
        <input 
            type="text"
            className="form-control"
            placeholder="Search"
            style ={{width:'200px'}}
            onChange={onInputChange}
            value={search}
        />
    )
}
export default Search