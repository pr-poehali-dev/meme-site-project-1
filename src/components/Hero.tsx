
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="gradient-primary py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Лучшие мемы
            <br />
            <span className="text-pink-200">в одном месте! 🎉</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Делись смешными картинками, оценивай мемы друзей и заряжайся позитивом каждый день!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="ImageIcon" size={20} className="mr-3" />
              Смотреть мемы
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 text-lg hover-scale"
            >
              <Icon name="Upload" size={20} className="mr-3" />
              Загрузить мем
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {['😂', '🤣', '😎', '🔥'].map((emoji, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-4xl text-center hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
