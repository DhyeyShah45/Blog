import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";
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
