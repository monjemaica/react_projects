import Like from './common/like';
import Pagination from './common/pagination';
import styles from './styles.module.css';
import { paginate } from '../utils/paginate';
import Filter from './common/filter';

const Movie = ({ moviesData, onLiked, count, pageSize, currentPage, onChangePage, onHandleFilter }) => {
    const movies = paginate(moviesData, currentPage, pageSize)

    return (

        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-2">
                        <Filter movies={moviesData} onChangeFilter={onHandleFilter}></Filter>
                    </div>
                    <div className="col-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(m => (
                                    <tr key={m.id}>
                                        <td>{m.title}</td>
                                        <td>{m.genre}</td>
                                        <td>{m.stock}</td>
                                        <td>{m.rate}</td>
                                        <td className={styles.icon}>
                                            <Like liked={m.isLiked} onClick={() => onLiked(m)}></Like>
                                        </td>
                                        <td><button className="btn btn-danger btn-sm">Delete</button></td>
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination
                    itemsCount={count}
                    pgsize={pageSize}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>

        </>
    );
}

export default Movie;