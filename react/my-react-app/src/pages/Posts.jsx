import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../component/PostFilter";
import PostForm from "../component/PostForm";
import PostList from "../component/PostList";
import MyButton from "../component/UI/button/MyButton";
import Loader from "../component/UI/loader/Loader";
import MyModal from "../component/UI/MyModal/MyModal";
import Pagination from "../component/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import '../style/App.css'
import { getPageCount } from "../utils/pages";

const Posts = () => {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Download Posts</MyButton>
      <MyButton style={{ marginTop: '20px' }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>Произошла ошибка {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список Постов #1"} />
      }
      <Pagination page={page} totalPage={totalPages} changePage={changePage}/>
    </div>
  )
} 


export default Posts;