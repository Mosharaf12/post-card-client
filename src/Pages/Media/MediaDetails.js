import React, { useState } from "react";
import { FaRegEdit, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MediaDetails = ({ post }) => {
  const { caption, picture, date, user, countLike, _id } = post;
  const [commentBox, setCommentBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plusLike, setPlusLike] = useState(false);

  const handleComment = (id) => {
    setCommentBox(true);
  };

  const handleIncrease = (id) => {
    setLoading(true);
    console.log(plusLike);

    fetch(`https://post-card-server.vercel.app/postlike/${plusLike}?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      });
  };

  return (
    <div className="card bg-green-50 shadow-md rounded-none">
      {picture && <img className="p-3" src={picture} alt="Shoes" />}
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} alt="" />
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
        <div className="flex justify-between">
        <p>{countLike} Likes</p>
        <Link to={`/posts/${_id}`}><button className="btn btn-outline border-none text-white bg-green-500 font-bold">view</button></Link>
        </div>
        <hr />
        <div className="flex justify-between">
          <button
            onClick={() => {
              handleIncrease(_id);
              setPlusLike(!plusLike);
            }}
            className="flex items-center gap-2 p-2 hover:bg-green-100 rounded-lg"
          >
            <FaThumbsUp></FaThumbsUp>Like
          </button>
          <button
            onClick={() => {
              handleComment(_id);
              setCommentBox(!commentBox);
            }}
            className="flex items-center p-2 hover:bg-green-100 rounded-lg"
          >
            <FaRegEdit></FaRegEdit>comment
          </button>
        </div>

        <div className={commentBox ? "p-3" : "hidden"}>
          <div className="flex gap-3">
            <input
              type="text"
              className="text-xl input border-2 border-green-500 w-full"
              placeholder="Comment Section"
            />
            <button className="btn border-none bg-green-500">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
