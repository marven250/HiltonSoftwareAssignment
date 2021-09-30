import React from 'react';
import useStyles from './styles';

function Pagination({postsPerPage, totalPosts, paginate, currentPage, setCurrentPage}) {
    const pageNumbers = [];
    const classes = useStyles();

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }


   const renderPageNumbers = ()=> pageNumbers.map(number => {
       let selectedPageStyle = currentPage == number? classes.selectedPage : classes.otherPages;

        if (number == 1 || number == pageNumbers.length || (number >= currentPage - 2 && number <= currentPage + 2)) {
        return (
            <li key={number} className="page-item">
            <span onClick= {()=> paginate(number)} className={selectedPageStyle + ' page-link'}>
                {number}
            </span>
        </li>
        )}
      });

    return (
       <nav  id='pagination'>
           <ul className= 'pagination'>  
           <li className="page-item">
                <span onClick= {()=> {currentPage> 1? setCurrentPage(currentPage-1): setCurrentPage(currentPage)}} className="page-link">
                     &laquo;
                </span>
           </li>
                {renderPageNumbers()}
            <li className="page-item">
                <span onClick= {()=> {currentPage<pageNumbers.length? setCurrentPage(currentPage+1): setCurrentPage(currentPage)}} className="page-link">
                    &raquo;
                 </span>
           </li>
           </ul>
           
       </nav>
    )
}

export default Pagination
