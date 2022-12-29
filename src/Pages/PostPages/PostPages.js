import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PostPages = () => {
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)

    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const navigate = useNavigate()
    const handlePost=event=>{
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const caption = form.caption.value;
        const images = form.images.files[0];
        console.log(caption,images)

        const imgSecret  = process.env.REACT_APP_IMGBB_KEY;

         const formData = new FormData()
        formData.append('image',images)
        const url =`https://api.imgbb.com/1/upload?key=${imgSecret}`
        fetch(url,{
           method: "POST",
           body: formData
   
        })
        .then(res=> res.json())
        .then(pictureData =>{
            const postBody = {
                caption,
                picture: pictureData.data.url,
                date,
                countLike: 0,
                user,


            }
            console.log(pictureData)
            fetch(`https://post-card-server.vercel.app/posts`,{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                },
                body: JSON.stringify(postBody)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                navigate('/media')
                setLoading(false)
            })
        }
           
            )
    }
    return (
       <div className='md:max-w-[600px] mx-auto'>
         <form onSubmit={handlePost}>
            <div className=' shadow-xl p-6 my-12'>
            <textarea name='caption' className="textarea textarea-primary w-full" placeholder="What are You thinking?"></textarea>
            <div>
            <input type="file" name='images' className="file-input file-input-bordered file-input-info w-full my-3" />
            </div>
            <div className='flex justify-end'>
           
               {
                user?.uid ? <>
                 {
                    loading?
                    <button className="btn loading btn-secondary w-full">Loading...</button>
                    :
                    <button type='submit' className="btn btn-warning w-full">POST</button>
                }

                </>
                :
                <Link to='/login'><button className="btn btn-warning w-full">POST</button></Link>
               }
            </div>
        </div>
        </form>
       </div>
    );
};

export default PostPages;