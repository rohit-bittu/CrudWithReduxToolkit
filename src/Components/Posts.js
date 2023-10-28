import React, { useState } from 'react'
import { addPost, deletePost, updatePost } from '../Slice/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Posts() {
    const [title, settitle] = useState('')
    const [Description, setDescription] = useState('')

    //edit
    const [edit, setedit] = useState(false)
    const [id, setid] = useState(null)
    //updateditem
    const [updatedtitle, setUpdatedtitle] = useState('')
    const [updatedDescription, setUpdatedDescription] = useState('')

    const dispatch = useDispatch()
    const posts = useSelector((state => state.posts.items))

    const addUser = (e) => {
        e.preventDefault();
        dispatch(addPost({ id: posts.length + 1, title: title, Description: Description }))
    }
    return (
        <>
            <div className='container mt-5 text-center '>
                <form >
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3"
                                onChange={(e) => settitle(e.target.value)}
                                value={title}

                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="description" className="form-control" id="inputPassword3"
                                onChange={(e) => setDescription(e.target.value)}
                                value={Description}
                            />
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary text-center "
                        onClick={(e) => addUser(e)}>Add Post</button>
                </form>
            </div>



            <div className=' container border border-3 mt-3 '>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Buttons</th>

                        </tr>
                    </thead>
                    {
                        posts.length > 0 ?
                            posts.map((post, index) => {
                                return (<>

                                    <tbody>
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td>{post.title}</td>
                                            <td>{post.Description}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        setedit(true)
                                                        setid(post.id)
                                                    }}>Edit</button>
                                                &nbsp;
                                                <button
                                                    onClick={() => dispatch(deletePost(post.id))}
                                                >Delete</button>
                                                {
                                                    edit && id == post.id ?
                                                        (
                                                            <>
                                                                <input type="text" placeholder='updated title'
                                                                    onChange={(e) => {
                                                                        if (setUpdatedtitle !== "" || setUpdatedtitle !== null || setUpdatedtitle !== undefined) {
                                                                            setUpdatedtitle(e.target.value)
                                                                            return true
                                                                        }
                                                                        

                                                                    }}

                                                                    className="form-control mt-2" />
                                                                <input type="text" placeholder='updated Description'
                                                                    onChange={(e) => {
                                                                        if (setUpdatedDescription !== "") {
                                                                            setUpdatedDescription(e.target.value)
                                                                        }
                                   
                                                                    }}
                                                                    className="form-control mt-2" id="inputPassword3" />
                                                                <button className='mt-2'
                                                                    onClick={() => {
                                                                        

                                                                        setedit(false);
                                                                        dispatch(updatePost({ id: post.id, title: updatedtitle, Description: updatedDescription }))

                                                                    }}>Update</button>
                                                            </>
                                                        ) : ""
                                                }
                                            </td>

                                        </tr>

                                    </tbody>
                                </>)
                            }) : "No post"
                    }
                </table>
            </div>
        </>
    )
}
