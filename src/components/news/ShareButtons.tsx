interface Props {
  title?: string;
}

export default function ShareButtons({ title = "分享文章" }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex space-x-4">
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="分享到Twitter"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
          </svg>
        </button>
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="分享到Facebook"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="分享到微信"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.384 22.779a1.19 1.19 0 0 1-.814-.355 1.168 1.168 0 0 1-.356-.815v-6.812h-2.403c-.814 0-1.412-.198-1.794-.594-.382-.396-.573-.986-.573-1.771v-6.812c0-.316.119-.585.356-.815.238-.23.507-.345.814-.345h12.779c.315 0 .584.115.814.345.238.23.357.499.357.815v6.812c0 .785-.191 1.375-.573 1.771-.382.396-.98.594-1.794.594h-2.403v6.812c0 .316-.119.585-.356.815-.238.23-.507.345-.814.345h-3.238z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
