import BookSelected from "./BookSelected";
import { useState, useEffect } from "react";
import ListBooks from "./ListBooks";


export default function HomePage() {

    const [currentPage, setCurrentPage] = useState('home');

    const [dashboard, setDashboard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState(null)
    const [title, setTitle] = useState('')

    const getData = async () => {
        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=KDwG1VlencZAXoKeACFuNhL3O6uC792u')
            const data = await response.json();
            setDashboard(data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {


        setIsLoading(true)

        setTimeout(() => {
            getData()
            setIsLoading(false)
        }, 3000)

    }, [])

    useEffect(() => {

        dashboard && dashboard.results.lists.map((list) => {
            setBooks(list.books)
        })
    }, [dashboard])

    return (
        <div>
            {
                currentPage === 'home' && <ListBooks isLoading={isLoading} setBooks={setBooks} setCurrentPage={setCurrentPage} dashboard={dashboard} setTitle={setTitle} title={title}/>
            }

            {
                currentPage === 'bookSelected' && <BookSelected setCurrentPage={setCurrentPage} dashboard={dashboard} books={books} setBooks={setBooks} setTitle={setTitle} title={title}/>
            }

        </div>
    )
}