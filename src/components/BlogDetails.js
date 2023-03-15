import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import delete_icon from "../delete.png";
import edit_icon from "../pen.png";
import useFetch from "../hooks/useFetch";
import EditForm from "./EditForm";
import { useState } from "react";
const BlogDetails = () => {
  const { user } = useAuthContext();
  const url = "/blog/";
  const { id } = useParams();
  const [permission, setPermission] = useState(false);

  const { data: blog, isPending, error } = useFetch(url + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (blog.author === user.name) {
      fetch("/blog/" + blog._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }).then(() => {
        navigate("/");
      });
    } else {
      alert("You can only delete your blogs");
    }
  };
  const handleEdit = () => {
    if (blog.author === user.name) {
      setPermission(true);
    } else {
      alert("You can edit your blog only!");
    }
  };
  return (
    <>
      <div className="blog-details">
        {}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blog && (
          <article>
            <div className="blog-details-header">
              <div>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
              </div>
              <div className="action">
                <button onClick={handleEdit}>
                  <img src={edit_icon} alt="Edit Icon" width="30px" />
                </button>
                <button onClick={handleDelete}>
                  <img src={delete_icon} alt="Delete Icon" width="30px" />
                </button>
              </div>
            </div>
            <div>{blog.body}</div>
          </article>
        )}
        {permission && <EditForm blog={blog} token={user.token} />}
      </div>
    </>
  );
};

export default BlogDetails;
