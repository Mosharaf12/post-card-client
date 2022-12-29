import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Componets/Spinner/Spinner';
import MediaDetails from './MediaDetails';

const Media = () => {

    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async()=>{
            const res = await fetch(`https://post-card-server.vercel.app/posts`)
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
       </div>
    );
};

export default Media;