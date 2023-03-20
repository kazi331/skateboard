import { createBrowserRouter } from "react-router-dom"
import Layout from "./src/components/layout/Layout"
import Bookmark from "./src/pages/Bookmark"
import Category from "./src/pages/Category"
import Discover from "./src/pages/Discover"
import Playlist from "./src/pages/Playlist"
import Streaming from "./src/pages/Streaming"
import Trending from "./src/pages/Trending"

const routes = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: "/", element: <Discover /> },
            { path: "/trending", element: <Trending /> },
            { path: "/streaming", element: <Streaming /> },
            { path: "/playlist", element: <Playlist /> },
            { path: "/bookmark", element: <Bookmark /> },
            { path: "/category/:id", element: <Category /> },
        ]
    }
])

export default routes