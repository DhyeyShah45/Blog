import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const url = "http://localhost:8000/blogs/";
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(url + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
