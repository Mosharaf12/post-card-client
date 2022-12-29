
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaRegEdit, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../Componets/Spinner/Spinner";
import { AuthContext } from "../../Context/AuthProvider";

const MediaCardDetails = () => {
    const {user} = useContext(AuthContext);
  const post = useLoaderData();
  const { caption, picture, date, user:userPost, countLike, _id } = post;
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

  const handleCommentPost = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment);

    const commentBox = {
      comment,
      date,
      displayName: user.displayName,
      picture: user.photoURL,
      email: user.email,
      postId: _id,
    };

    fetch(`http://localhost:5000/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentBox),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        form.reset();
      });
  };
  const { data: comments = [], refetch ,isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/comments");
      const data = await res.json();
      return data;
    },
  });
  refetch()
  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div className="card bg-green-50 shadow-md rounded-none mb-20 mt-10">
      {picture && <img className="p-3" src={picture} alt="Shoes" />}
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src={userPost?.photoURL} alt="" />
            </div>
          </div>
          <div>
            <div>
              <h2 className="card-title">{userPost?.displayName}</h2>
              <p className="text-blue-500">{date}</p>
            </div>
          </div>
        </div>

        <p>{caption}</p>
        <p>{countLike} Likes</p>
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
          <form onSubmit={handleCommentPost}>
            <div className="flex gap-3">
              <input
                type="text"
                name="comment"
                className="text-xl input border-2 border-green-500 w-full"
                placeholder="Comment Section"
              />
              <button type="submit" className="btn border-none bg-green-500">
                Add
              </button>
            </div>
          </form>
        </div>
        {/* comments section  */}
        <div>
          {comments.map((comment) => (
            <div key={comment._id} className="">
              {comment.postId === _id && (
                <div>
                  <div className="container flex flex-col w-full p-6 divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4 items-center">
                        <div>
                          <img
                            src={comment?.picture}
                            alt=""
                            className="object-cover w-12 h-12 rounded-full bg-gray-500"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{comment?.displayName}</h4>
                       
                        </div>
                      </div>
                    
                    </div>
                    <div className="p-4 space-y-2 text-sm text-gray-600">
                      <p>
                        {comment.comment}
                      </p>
                    
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCardDetails;
