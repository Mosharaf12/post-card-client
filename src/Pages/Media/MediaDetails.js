import React from "react";
import { FaRegEdit, FaThumbsUp } from "react-icons/fa";

const MediaDetails = ({ post }) => {
  const { caption, picture, date, user, countLike } = post;
  return (
    <div className="card bg-green-50 shadow-md rounded-none">
      {picture && (
       
          <img className="p-3" src={picture} alt="Shoes" />
      
      )}
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} alt=""/>
            </div>
          </div>
          <div>
            <div>
            <h2 className="card-title">{user?.displayName}</h2>
            <p className="text-blue-500">{date}</p>
            </div>
            
          </div>
        </div>

        <p>{caption}</p>
        <p>{countLike} Likes</p>
        <hr />
        <div className="flex justify-between">
        <button className="flex items-center gap-2"><FaThumbsUp></FaThumbsUp>Like</button>  
         <button className="flex items-center"><FaRegEdit></FaRegEdit> comment</button>
        </div>
    
      </div>
    </div>
  );
};

export default MediaDetails;
