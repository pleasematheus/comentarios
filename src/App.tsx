import { useState, useEffect } from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

interface Comment {
  id: number
  author: string
  text: string
  date: string
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const savedComments = JSON.parse(
      localStorage.getItem("comments") || "[]"
    ) as Comment[]
    setComments(savedComments)
    setCount(savedComments.length)
  }, [])

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
    setCount(comments.length)
  }, [comments])

  const handleAddComment = (newComment: Comment) => {
    setComments([newComment, ...comments])
  }

  return (
    <div className="container mx-auto max-w-xl py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Comentários</h1>
      <CommentForm onAddComment={handleAddComment} />
      <p className="mb-4 text-gray-500">Total de comentários: {count}</p>
      <CommentList comments={comments} />
    </div>
  )
}

export default App