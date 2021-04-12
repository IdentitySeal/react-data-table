import React,{ useContext} from 'react';
import { DataContext } from '../../context/index'
import './Search.css'

const Search = () => {
    const getData = useContext(DataContext);
    const { search, setSearch, setCurrentPage, currentPage} = getData;


    const onInputChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(currentPage)

        console.log(search)

    }

    return (
        <div class="search-container">
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ width: '200px' }}
                    onChange={onInputChange}
                    value={search}
                />
            </div>
        </div>
    )
}
export default Search