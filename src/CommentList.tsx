interface Comment {
  id: number
  author: string
  text: string
  date: string
}

interface CommentListProps {
  comments: Comment[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex items-start bg-white p-4 rounded-lg shadow-md"
        >
          <img
            src="https://via.placeholder.com/50"
            alt="Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-bold">{comment.author}</p>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="mt-2">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentList