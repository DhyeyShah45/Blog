import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const url_for_all = "https://blog-here.netlify.app/blogs";
  const {data:blogs,isPending,error} = useFetch(url_for_all)

  const url_for_author = "https://blog-here.netlify.app/blogs/author"
  const {data:blogs_author,isPending:isPending_author,error:error_author} = useFetch(url_for_author)


  return (
    <div className="home">
      {(error || error_author) && <div>{error}</div>}
      {(isPending || isPending_author) && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      )}
      {blogs_author && (
        <BlogList
          blogs={blogs_author}
          title="Your Blogs!"
        />
      )}
        
    </div>
  );
};

export default Home;
