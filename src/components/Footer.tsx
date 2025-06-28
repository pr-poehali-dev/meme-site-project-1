import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-lg">😂</span>
              </div>
              <h3 className="text-xl font-bold">МемПортал</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Лучшая платформа для создания, просмотра и обмена мемами.
              Присоединяйся к сообществу юмора!
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Топ мемы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Загрузить
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Котики
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Программирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Работа
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Жизнь
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Подписывайся</h4>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Следи за новыми мемами в наших соцсетях!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 МемПортал. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Правила
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
