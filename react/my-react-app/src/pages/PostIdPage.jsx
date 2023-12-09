import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../component/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComent, isComLoading, Comerror] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComent(params.id);
  }, []);

  return (
    <div>
      <h1>This is Post id Page ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <h3>
          {post.id}.{post.title}
        </h3>
      )}
      <h1>
        Коментарий
      </h1>
      {isComLoading
        ?<h2>Подождите...</h2>
        :<div>
            {comments.map(comm => 
                <div key={comm.id} style={{margin: '15px'}}>
                    <h4 style={{margin: '15px'}}>{comm.email}</h4>
                    <div>{comm.body}</div>
                </div>
                )}
        </div>

      }
    </div>
  );
};

export default PostIdPage;
