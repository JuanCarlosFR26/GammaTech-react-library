import Header from "./Header";
import SpinnerLibrary from "./SpinnerLibrary";

export default function ListBooks({setCurrentPage, dashboard, isLoading, setBooks, setTitle}) {

    const setPageShowBooks = (list) => {


        setCurrentPage('bookSelected');

        setBooks(list.books);

        setTitle(list.display_name)

    }


    return (
        <div>
            <Header />
            <hr id="separatorHeader"></hr>
            <div className="dashboard">
            {
                isLoading && <SpinnerLibrary />
            }
                {
                    dashboard && dashboard.results.lists.map((list, i) => (
                        <div className="listBook" key={i}>
                            <h1>{list.display_name}</h1>
                            <hr></hr>
                            <p>Id: #{list.list_id}</p>
                            <p>Update: {list.updated}</p>
                            <button className="button" onClick={() => setPageShowBooks(list)}>Read More! <i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    ))
                }

            </div>
            </div>
    )


}