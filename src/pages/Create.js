import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Create = () => {
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [visibilty, setVisibilty] = useState("Private");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, visibilty };

    fetch("/blog/add-new-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(blog),
    }).then(() => {
      // history.go(-1);
      history("/");
    });
  };

  return (
    <div>
      {!user ? (
        <Link to="/">Click here to login again</Link>
      ) : (
        <div className="create">
          <h2>Add a New Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog visibilty:</label>
            <select
              value={visibilty}
              onChange={(e) => setVisibilty(e.target.value)}
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            <button>Add Blog</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Create;
