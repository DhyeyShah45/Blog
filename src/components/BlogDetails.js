import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import useFetch from "../hooks/useFetch";
const BlogDetails = () => {
  const {user} = useAuthContext()
  const url = "/blog/";
  const {id} = useParams();

  const { data: blog, isPending, error } = useFetch(url + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch("/blog/" + blog._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
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
