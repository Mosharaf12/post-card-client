import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Media = () => {

    const {data: posts = [], refetch, isLoading} = useQuery({
        queryKey: ['posts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/posts`)
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h3>this is media {posts.length}</h3>
        </div>
    );
};

export default Media;