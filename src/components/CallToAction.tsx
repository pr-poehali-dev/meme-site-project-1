import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готов стать мем-легендой? 🌟
          </h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Присоединяйся к нашему сообществу творцов мемов! Загружай свои
            шедевры, получай лайки и становись звездой мемного мира.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="Upload" size={20} className="mr-3" />
              Загрузить первый мем
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="Users" size={20} className="mr-3" />
              Найти друзей
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Стань популярным</h3>
              <p className="text-white/80">Твои мемы увидят тысячи людей</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Получай награды</h3>
              <p className="text-white/80">Лучшие мемы получают призы</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Заряжай позитивом</h3>
              <p className="text-white/80">Дари улыбки каждый день</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
