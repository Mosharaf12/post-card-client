import React from 'react';

const PostPages = () => {
    const handlePost=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const images = form.images.files[0];
        console.log(name,images)
    }
    return (
        <form onSubmit={handlePost}>
            <div className='w-450 h-250 shadow-xl p-6 my-12'>
            <textarea name='name' className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
            <div>
            <input type="file" name='images' className="file-input file-input-bordered file-input-info w-full my-3" />
            </div>
            <div className='flex justify-end'>
            <button type='submit' className="btn btn-warning P-4">POST</button>
            </div>
        </div>
        </form>
    );
};

export default PostPages;