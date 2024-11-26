import { useState } from "react"

interface Comment {
  id: number
  author: string
  text: string
  date: string
}

interface CommentFormProps {
  onAddComment: (comment: Comment) => void
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [author, setAuthor] = useState<string>("")
  const [text, setText] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newComment: Comment = {
      id: Date.now(),
      author,
      text,
      date: new Date().toLocaleString(),
    }
    onAddComment(newComment)
    setAuthor("")
    setText("")
  }

  return (
    <form
      className="bg-white p-4 rounded-lg shadow-md mb-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/50"
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <input
          type="text"
          placeholder="Seu nome"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <textarea
        placeholder="O que está acontecendo?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={3}
        required
      />
      <div className="mt-4 text-right">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Tweetar
        </button>
      </div>
    </form>
  )
}

export default CommentForm
