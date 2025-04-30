import { Article } from '@/types/article'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  article: Article
}

export default function ArticleCard({ article }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">
      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <Link href={`/articles/${article.id}`} className="hover:underline text-blue-600">
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-600">{article.description}</p>
      </div>
    </div>
  )
}
