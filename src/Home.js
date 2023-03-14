
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const url = "/blogs";
  const {data:blogs,isPending,error} = useFetch(url)


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"

        />
      )}
    </div>
  );
};

export default Home;
