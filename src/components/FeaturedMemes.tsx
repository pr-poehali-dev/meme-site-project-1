import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturedMemes = () => {
  const memes = [
    {
      id: 1,
      title: "Когда понедельник наступает",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      likes: 1234,
      views: 5678,
      author: "МемМастер",
      timeAgo: "2 часа назад",
    },
    {
      id: 2,
      title: "Программисты поймут",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
      likes: 856,
      views: 3421,
      author: "КодерШутник",
      timeAgo: "4 часа назад",
    },
    {
      id: 3,
      title: "Когда нашёл баг в продакшене",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400",
      likes: 2103,
      views: 8965,
      author: "БагХантер",
      timeAgo: "6 часов назад",
    },
    {
      id: 4,
      title: "Котики правят миром",
      image:
        "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400",
      likes: 3456,
      views: 12543,
      author: "КотоЛюб",
      timeAgo: "8 часов назад",
    },
    {
      id: 5,
      title: "Когда deadline завтра",
      image: "https://images.unsplash.com/photo-1551845041-63e8e76836e4?w=400",
      likes: 1876,
      views: 6789,
      author: "РаботягаМем",
      timeAgo: "10 часов назад",
    },
    {
      id: 6,
      title: "Пятница наконец-то!",
      image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400",
      likes: 4321,
      views: 15678,
      author: "ВыходныеЖдун",
      timeAgo: "12 часов назад",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🔥 Топовые мемы дня
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые смешные и популярные мемы, которые уже покорили сердца наших
            пользователей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {memes.map((meme) => (
            <Card
              key={meme.id}
              className="hover-scale bg-white border-2 border-transparent hover:border-pink-200 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={meme.image}
                  alt={meme.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon name="Eye" size={14} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {meme.views.toLocaleString()}
                  </span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
                  {meme.title}
                </h3>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={14} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{meme.author}</span>
                  </div>
                  <span className="text-xs text-gray-500">{meme.timeAgo}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-2"
                  >
                    <Icon name="Heart" size={16} className="mr-1" />
                    {meme.likes.toLocaleString()}
                  </Button>

                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-purple-50"
                    >
                      <Icon
                        name="Share2"
                        size={16}
                        className="text-purple-600"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 hover:bg-orange-50"
                    >
                      <Icon
                        name="Bookmark"
                        size={16}
                        className="text-orange-600"
                      />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="gradient-secondary text-white hover:opacity-90 font-semibold px-8 py-4 text-lg hover-scale"
          >
            <Icon name="Grid3X3" size={20} className="mr-3" />
            Посмотреть все мемы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemes;
