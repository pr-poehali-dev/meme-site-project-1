import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-bounce-soft">
            <span className="text-2xl">😂</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
            МемПортал
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Главная
          </a>
          <a
            href="#gallery"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Галерея
          </a>
          <a
            href="#upload"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Загрузить
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Топ мемы
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>
          <Button
            size="sm"
            className="gradient-secondary text-white hover:opacity-90"
          >
            <Icon name="Plus" size={16} className="mr-2" />
            Создать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
