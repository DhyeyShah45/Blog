import { Link } from "react-router-dom";

const BlogList = ({blogs,title,handleDelete}) => {
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {/* show only if no blog present */}
      {!blogs.length && <div>Please add some blogs..</div>}
      {blogs.map((blog)=>(
          <div className="blog-preview" key={blog._id}>
            {/* {console.log(blog._id)} */}
            <Link to={`/blogs/${blog._id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.author}</p>
            </Link>
          </div>
        )
        )}
    </div>
   );
}
 
export default BlogList;