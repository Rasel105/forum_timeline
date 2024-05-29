import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePosts from "../lib/hooks/usePosts";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const { posts, users, comments, loading } = usePosts();

  if (loading)
    return (
      <div className="container mx-auto p-4">
        <Skeleton count={5} height={200} />
      </div>
    );

  const getUser = (userId) => users.find((user) => user.id === userId);
  const getComments = (postId) =>
    comments.filter((comment) => comment.postId === postId);

  const notify = () => toast("Welcome to the Forum Timeline!");

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mt-16 mb-8 text-center">
          Forum Timeline
        </h1>
        <ToastContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <Post
                key={post.id}
                post={post}
                user={getUser(post.userId)}
                comments={getComments(post.id)}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
