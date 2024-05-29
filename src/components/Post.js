import { useState } from "react";
import {
  FaComment,
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaRegCommentDots,
} from "react-icons/fa";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Post = ({ post, user, comments }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{post.title}</p>
          </div>
        </div>
        <button
          onClick={toggleExpanded}
          className="focus:outline-none text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="text-gray-700 mb-4">
          <p>{post.body}</p>
        </div>
      )}
      <button
        className="flex items-center text-blue-600 focus:outline-none hover:text-blue-800 transition"
        onClick={toggleModal}
      >
        <FaComment className="mr-2" />
        Show Comments
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Comments Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
        closeTimeoutMS={200}
      >
        <div className="relative p-4 mt">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaRegCommentDots className="mr-2" />
            Comments
          </h2>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleModal}
          >
            Close
          </button>
          <div className="mt-4 space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border-t pt-2 mt-2">
                <p className="font-semibold flex items-center">
                  <FaUser className="mr-2" />
                  {comment.name}
                </p>
                <p>{comment.body}</p>
                <p className="text-gray-500 text-sm flex items-center">
                  <FaEnvelope className="mr-2" />
                  {comment.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Post;
