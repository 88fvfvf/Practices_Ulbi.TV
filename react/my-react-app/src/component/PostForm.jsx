import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const PostForm = ({create}) => {

    const [ post , setPost ] = useState({title:"",body:""})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,id:Date.now()
        }
        create(newPost) 
        setPost({title:"",body:""})
      }
    

    return (
        <form>
          <MyInput 
            value={post.title}
            onChange={e => setPost({...post,title: e.target.value})}
            type="text" 
            placeholder="Название Поста"
          />
          <MyInput
            value={post.body}
            onChange={e => setPost({...post,body: e.target.value})}
            type="text" 
            placeholder="Описание Поста"
          />
          <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
    )
}

export default PostForm