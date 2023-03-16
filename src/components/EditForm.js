import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EditForm = ({blog,token}) => {
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [visibilty, setVisibilty] = useState(blog.visibilty);
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = { title, body, visibilty };
    // console.log(data);
    fetch("https://blog-here.onrender.com/blog/" + blog._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      body:JSON.stringify(data)
    }).then(() => {
      navigate('/')
    });

  }
  
  return (
    <div className="create">
      <h2>Edit this Blog? </h2>
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
  );
};

export default EditForm;
