import Header from "./Header";
import '../styles/index.css'



export default function BookSelected({setCurrentPage, books, setBooks, dashboard, title, setTitle}) {

    const backIndex = () => {
        setCurrentPage('home');
        setBooks([])
        setTitle("");
    }


    return (
        <div>
            <Header />
            <h3 style={{color: "#777", marginTop: '-20px', marginBottom: "40px", marginLeft: "20px"}}>{title}</h3>
            <hr></hr>
            <button className="buttonIndex" onClick={backIndex}><i className="fa-solid fa-chevron-left"> Back to Index!</i></button>
            <div className="booksContainer">
                {
                    books && books.map((book, i) => ( (
                            <div key={i} className="bookCard">
                            <h1>{book.title}</h1>
                            <img src={book.book_image} alt={book.title}></img>
                            <h3>Author: {book.author}</h3>
                            <p>Rank: {book.rank}</p>
                            <p>Weeks on list: {book.weeks_on_list}</p>
                            <p>"{book.description ? book.description : "No description"}"</p>
                            <button><a href={book.amazon_product_url} target="_blank">Buy on Amazon</a></button>
                        </div>
                        ))
                    )
                }
            </div>
        </div>
    )


}

// books && books.map((book, i) => (
//     <div key={i} className="bookCard">
//         <h1>{book.title}</h1>
//         <img src={book.book_image} alt={book.title}></img>
//         <h3>Author: {book.author}</h3>
//         <p>Rank: {book.rank}</p>
//         <p>Weeks on list: {book.weeks_on_list}</p>
//         <p>"{book.description ? book.description : "No description"}"</p>
//         <button><a href={book.amazon_product_url} target="_blank">Buy on Amazon</a></button>
//     </div>
// ))