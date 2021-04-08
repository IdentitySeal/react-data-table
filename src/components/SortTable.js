import { useContext } from 'react'
import { DataContext } from '../context/index';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SortTable = ({ sortTypes}) => {

    const { currentSort,setCurrentSort } = useContext(DataContext);


    const onSortChange = () => {
        // setCurrentSort(currentSort)
        
        let nextSort;
        
        if (currentSort === 'down') {
            nextSort = 'up'
        }
        else if (currentSort === "up") {
            nextSort = 'default';
        }
        else if (currentSort === 'default') {
            nextSort = 'down'
        }
        setCurrentSort(nextSort)
    }

    console.log(sortTypes[currentSort].class)
    return (
        <thead>
            <tr>
                <th>Name
                    <button onClick={onSortChange}>
                        <FontAwesomeIcon icon={`${sortTypes[currentSort].class}`} />
                        {/* <i className={`fas fa-${}`} /> */}


                    </button>
                </th>
                <th>ISBN</th>
                <th>Authors</th>
                <th>Pages</th>
                <th>Country</th>
                <th>Released</th>
            </tr>
        </thead>
    )
}


export default SortTable