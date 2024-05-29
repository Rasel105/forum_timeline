import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePosts from "../lib/hooks/usePosts";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  const { posts, users, comments, loading } = usePosts();

  const getUser = (userId) => users.find((user) => user.id === userId);
  const getComments = (postId) =>
    comments.filter((comment) => comment.postId === postId);

  const notify = () => toast("Welcome to the Forum Timeline!");

  return (
    <div>
      <Head>
        <title>Forum Timeline</title>
      </Head>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mt-16 mb-8 text-center">
          Forum Timeline
        </h1>
        <ToastContainer />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 mb-4 shadow-lg"
                >
                  <Skeleton height={30} width="80%" className="mb-2" />
                  <Skeleton count={3} className="mb-2" />
                  <div className="flex items-center mb-4">
                    <Skeleton
                      circle={true}
                      height={30}
                      width={30}
                      className="mr-2"
                    />
                    <Skeleton height={20} width="60%" />
                  </div>
                  <Skeleton height={30} width="50%" />
                </div>
              ))}
          </div>
        ) : (
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
        )}
      </div>
      <Footer />
    </div>
  );
}
