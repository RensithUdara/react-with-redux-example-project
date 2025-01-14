import { use } from "react";

function AlbumsList() {

    const dispatch = useDispatch();
    const album = useSelector((state) => state.album.album);

    const { loading, albums, error } = useSelector((state) => state.album);

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [dispatch]);

    console.log(album)
    
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h1>My Album List</h1>
            <div>
                {albums.map(album => (
                    <div key={album.id}>
                        {
                            album.title
                        }
                    </div>

                ))}

            </div>
        </div>
    );
}

export default AlbumsList;