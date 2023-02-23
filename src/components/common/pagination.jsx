import React from 'react';
import _ from 'lodash';

const Pagination = ({itemsCount, pgsize, onChangePage, currentPage}) => {
    const pagesCount = Math.ceil(itemsCount/pgsize);
    const pages = _.range(1, pagesCount + 1);

    if(pages == 1){
        return null;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => 
                    <li className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link" onClick={() => onChangePage(page)}>{page}</a>
                    </li>
                
                )}
            </ul>
        </nav>
    );
}

export default Pagination;