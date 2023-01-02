import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Componets/Spinner/Spinner';
import MediaDetails from '../Media/MediaDetails';

const SortMedia = () => {
    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/sortPosts`)
            const data = await res.json();
            return data
        }
    })

    refetch()
    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='md:max-w-[700px] mx-auto'>
              <div className='grid grid-cols-1 gap-10 py-16'>
            {
                posts.map(post => <MediaDetails
                key={post.id}
                post={post}
                ></MediaDetails>)
            }
            
        </div>
        <div className='flex justify-center'>
            <Link to='/media'><button className='btn bg-green-500 border-none hover:bg-green-800'>SEE MORE</button></Link>
        </div>
        </div>
    );
};

export default SortMedia;