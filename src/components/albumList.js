import { use } from "react";

function AlbumsList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums());
    }, []);

    return (
        <div>
            <h1>My Album List</h1>
        </div>
    );
}

export default AlbumsList;