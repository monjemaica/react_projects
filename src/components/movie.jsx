import Like from './like';
import styles from './styles.module.css'


const Movie = ({ moviesData, onLiked  }) => {


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {moviesData.map(m => (
                    <tr key={m.id}>
                        <td>{m.title}</td>
                        <td>{m.genre}</td>
                        <td>{m.stock}</td>
                        <td>{m.rate}</td>
                        <td className ={styles.icon}>
                            <Like liked = {m.isLiked} onClick={() => onLiked(m)}></Like>
                        </td>
                        <td><button className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
}

export default Movie;