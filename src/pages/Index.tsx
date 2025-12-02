import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [showJoinForm, setShowJoinForm] = useState(false);

  const benefits = [
    {
      icon: "Clock",
      title: "Свободный график",
      description: "Работайте когда удобно вам"
    },
    {
      icon: "Wallet",
      title: "Еженедельные выплаты",
      description: "Деньги на карту без задержек"
    },
    {
      icon: "UserCheck",
      title: "Без опыта",
      description: "Начните зарабатывать сразу после регистрации"
    },
    {
      icon: "Bike",
      title: "Любой транспорт",
      description: "Пешком, на велосипеде или личном авто"
    }
  ];

  const requirements = [
    { icon: "User", text: "Возраст от 18 лет" },
    { icon: "FileText", text: "Паспорт РФ" },
    { icon: "Bike", text: "Велосипед, самокат или авто" },
    { icon: "Smartphone", text: "Смартфон на Android или iOS" }
  ];

  const testimonials = [
    {
      name: "Михаил",
      age: 24,
      rating: 4.9,
      text: "Работаю курьером уже полгода. Отличный способ совмещать с учёбой — сам выбираю когда работать",
      avatar: "👨‍🎓"
    },
    {
      name: "Анна",
      age: 29,
      rating: 5.0,
      text: "Зарабатываю 80-100 тысяч в месяц. График удобный, поддержка всегда на связи. Рекомендую!",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий",
      age: 21,
      rating: 4.8,
      text: "Начал две недели назад. Уже понял принцип работы, деньги приходят вовремя. Всё честно",
      avatar: "🚴‍♂️"
    }
  ];

  const workInfo = [
    {
      title: "Как начать работать?",
      steps: [
        "Оставьте заявку на сайте",
        "Пройдите онлайн-обучение (30 минут)",
        "Получите термосумку в пункте выдачи",
        "Начните принимать заказы"
      ]
    },
    {
      title: "Что входит в работу?",
      steps: [
        "Получить заказ в ресторане",
        "Доставить клиенту по адресу",
        "Получить оплату в приложении",
        "Принять следующий заказ"
      ]
    }
  ];

  const scrollToJoin = () => {
    setShowJoinForm(true);
    setTimeout(() => {
      document.getElementById('join-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black drop-shadow-lg">
            🎯 Работа курьером в Яндекс<br/>заработок от 3 000 ₽ в день
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-black/90 font-semibold">
            Подработка и основная работа курьером в Яндекс Еде, Доставке и Лавке
          </p>
          <p className="text-lg md:text-xl mb-8 text-black/80 max-w-3xl mx-auto">
            Ищете способ быстро заработать с гибким графиком? Яндекс курьер — это возможность получать стабильный доход уже сегодня. Работайте в удобное время, выбирайте формат работы и получайте выплаты каждую неделю.
          </p>
          <div className="mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-black">Преимущества работы:</h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-black/90">Свободный график — работайте когда удобно вам</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-black/90">Еженедельные выплаты — деньги на карту без задержек</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-black/90">Без опыта — начните зарабатывать сразу после регистрации</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-black/90">Любой транспорт — пешком, на велосипеде или личном авто</span>
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            onClick={scrollToJoin}
            className="text-2xl px-12 py-8 bg-black text-primary hover:bg-black/90 hover-scale shadow-2xl font-bold"
          >
            Стать курьером Яндекс
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-black/60" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            💰 Сколько зарабатывает курьер Яндекс
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-4xl mx-auto">
            Доход курьера зависит от нескольких факторов: города работы, количества заказов, времени смены и используемого транспорта. Давайте разберём реальные цифры.
          </p>

          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Сколько получает пеший курьер Яндекс</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Пеший курьер Яндекс еда может зарабатывать от 1 500 до 3 000 ₽ за день активной работы. В среднем это 8–12 заказов за смену продолжительностью 6–8 часов.
              </p>
              
              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">От чего зависит доход пешего курьера:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Район работы (центр города приносит больше заказов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Время суток (обед и вечер — самые загруженные часы)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Calendar" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">День недели (выходные дают больше заказов)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Zap" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Скорость выполнения доставок</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl">
                <p className="text-xl font-bold text-black">
                  Месячный доход при работе 5 дней в неделю: 30 000 – 60 000 ₽
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Сколько зарабатывает курьер Яндекс на авто</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Работа яндекс курьер на авто — самый прибыльный формат. Курьер на личном авто Яндекс может зарабатывать от 3 500 до 6 000 ₽ за день, а в крупных городах и того больше.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Преимущества работы на авто:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="TrendingUp" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Больше заказов за смену (15–25 доставок)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Package" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Возможность брать крупногабаритные заказы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Cloud" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Работа в любую погоду</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Map" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Увеличенная зона доставки</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl mb-6">
                <p className="text-lg">
                  <strong>Важно учитывать:</strong> расходы на бензин составляют 500–800 ₽ за смену, но чистый доход всё равно выше, чем у пеших курьеров.
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-xl">
                <p className="text-xl font-bold text-white">
                  Месячный доход на авто: 70 000 – 120 000 ₽ при полной занятости
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Сколько получает курьер Яндекс Еда</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Сколько зарабатывают курьеры яндекс еда? Средний доход курьера Яндекс Еды составляет:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-muted p-6 rounded-xl text-center">
                  <Icon name="User" size={40} className="text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">Пешком</h4>
                  <p className="text-2xl font-bold text-primary">2 000 – 2 800 ₽/день</p>
                </div>
                <div className="bg-muted p-6 rounded-xl text-center">
                  <Icon name="Bike" size={40} className="text-primary mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">На велосипеде</h4>
                  <p className="text-2xl font-bold text-primary">2 500 – 3 500 ₽/день</p>
                </div>
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-center">
                  <Icon name="Car" size={40} className="text-black mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2 text-black">На авто</h4>
                  <p className="text-2xl font-bold text-black">4 000 – 6 000 ₽/день</p>
                </div>
              </div>

              <p className="text-lg">
                Яндекс еда курьер получает оплату за каждый выполненный заказ. Базовая ставка зависит от расстояния и времени доставки. В часы пик действуют повышенные коэффициенты — можно заработать на 30-50% больше.
              </p>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Сколько зарабатывают курьеры яндекс доставки</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Яндекс доставка курьер работает с более крупными заказами — это могут быть посылки, документы, товары из магазинов. Яндекс курьер зарплата в этом сегменте:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="User" size={32} className="text-primary" />
                    <Icon name="Bike" size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Пешком/велосипед</h4>
                  <p className="text-2xl font-bold text-primary">2 200 – 3 200 ₽/день</p>
                </div>
                <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-xl">
                  <Icon name="Car" size={32} className="text-white mb-3" />
                  <h4 className="text-xl font-bold mb-2 text-white">На авто</h4>
                  <p className="text-2xl font-bold text-white">3 800 – 7 000 ₽/день</p>
                </div>
              </div>

              <p className="text-lg">
                Яндекс доставка работа курьером на авто особенно выгодна — можно брать несколько заказов одновременно и оптимизировать маршруты.
              </p>
            </Card>

            <div className="text-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToJoin}
                className="text-2xl px-12 py-8 bg-secondary hover:bg-secondary/90 text-white hover-scale shadow-2xl font-bold"
              >
                Заработать яндекс курьер прямо сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🚴 Форматы работы курьером
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-3xl mx-auto">
            Выберите формат работы под свои возможности и цели
          </p>

          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Пеший курьер Яндекс</h3>
                  <p className="text-lg text-muted-foreground">Самый доступный формат для старта</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Не нужны вложения — только смартфон и удобная обувь. Сколько зарабатывает пеший курьер яндекс? От <strong className="text-primary">45 000 ₽</strong> в месяц при работе 5-6 дней в неделю.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Кому подходит:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="GraduationCap" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Студентам, которым нужна подработка</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Heart" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Тем, кто любит активный образ жизни</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="UserCheck" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Людям без транспорта</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sparkles" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Новичкам без опыта курьерской работы</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
                <p className="text-lg">
                  <strong>Зоны доставки:</strong> обычно радиус до 2 км от ресторана
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Bike" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Курьер Яндекс на велосипеде</h3>
                  <p className="text-lg text-muted-foreground">Золотая середина между пешей доставкой и работой на авто</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Яндекс курьер на велосипеде берёт больше заказов, чем пеший, но без затрат на топливо.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Преимущества:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Zap" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Быстрее доставка = больше заказов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CircleDollarSign" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Нет расходов на бензин</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="TreePine" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Можно работать в зелёных зонах и парках</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="TrendingUp" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Доход выше на 30–40% чем у пеших курьеров</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
                <p className="text-lg">
                  <strong>Требования:</strong> исправный велосипед, термосумка (выдаётся или можно купить свою)
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 border-secondary hover:shadow-2xl transition-all bg-gradient-to-br from-white to-secondary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Car" size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Курьер Яндекс на личном авто</h3>
                  <p className="text-lg text-muted-foreground">Самый прибыльный формат</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Яндекс доставка курьер на личном авто может выполнять до 25 заказов за смену и работать в любую погоду.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Что нужно:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Car" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Автомобиль в исправном состоянии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CreditCard" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Водительские права</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Smartphone" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Смартфон с приложением Яндекс Про</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-xl mb-6">
                <p className="text-xl font-bold text-white">
                  Яндекс доставка работа курьером на авто — это возможность зарабатывать от 80 000 ₽ в месяц. Многие курьеры на авто совмещают несколько сервисов доставки и выходят на доход 150 000+ ₽.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Дополнительные плюсы:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Music" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Можно слушать музыку/подкасты во время работы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CloudSun" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Комфорт в любую погоду</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="ShoppingBag" size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Возможность брать крупные заказы из Яндекс Лавки</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Самозанятый курьер Яндекс</h3>
                  <p className="text-lg text-muted-foreground">Официальная работа с минимальным налогом</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Работаете как самозанятый курьер яндекс — это значит, что вы ведёте деятельность официально, платите налог 4-6% и получаете все преимущества легальной работы.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Преимущества самозанятости:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="BadgeCheck" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Официальный доход (подтверждение для кредитов, виз)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Percent" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Низкий налог (4% при работе с юрлицами)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Никакой отчётности — всё автоматически</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Smartphone" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Работа через приложение «Мой налог»</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl">
                <p className="text-xl font-bold text-black">
                  Зарегистрироваться как самозанятый можно за 10 минут онлайн. Яндекс работает с самозанятыми официально.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📋 Условия работы курьером Яндекс
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-4xl mx-auto">
            Прозрачные и честные условия работы без подводных камней
          </p>

          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">График работы</h3>
                  <p className="text-lg text-muted-foreground">Работайте когда удобно вам</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Один из главных плюсов — вы сами решаете, когда работать. <strong>Можно ли работать яндекс курьером по свободному графику?</strong> Да! Открывайте приложение Яндекс Про в любое время и начинайте принимать заказы.
              </p>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Варианты графика:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="GraduationCap" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Несколько часов после учёбы/основной работы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Calendar" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Полный день в выходные</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Moon" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Вечерние смены (обычно самые прибыльные)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Sun" size={24} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Ежедневная работа полный день</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl">
                <p className="text-xl font-bold text-black">
                  Никаких обязательных смен — работайте столько, сколько нужно вам.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Wallet" size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Яндекс курьер выплаты</h3>
                  <p className="text-lg text-muted-foreground">Деньги каждую неделю без задержек</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Деньги приходят каждую неделю — это один из главных плюсов работы. Яндекс курьер выплаты получает на банковскую карту автоматически.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="CalendarRange" size={28} className="text-secondary" />
                    <h4 className="text-xl font-bold">Период расчёта</h4>
                  </div>
                  <p className="text-lg">С понедельника по воскресенье</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Clock" size={28} className="text-secondary" />
                    <h4 className="text-xl font-bold">Выплата</h4>
                  </div>
                  <p className="text-lg">В течение 3 рабочих дней</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="CreditCard" size={28} className="text-secondary" />
                    <h4 className="text-xl font-bold">Способ</h4>
                  </div>
                  <p className="text-lg">На карту любого российского банка</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="BadgeCheck" size={28} className="text-secondary" />
                    <h4 className="text-xl font-bold">Комиссия</h4>
                  </div>
                  <p className="text-lg">Отсутствует</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-xl">
                <p className="text-xl font-bold text-white">
                  Сколько платят яндекс курьеру: оплата за каждый заказ + бонусы за выполнение плана.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Бонусы и мотивация</h3>
                  <p className="text-lg text-muted-foreground">Зарабатывайте больше с системой поощрений</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Работа курьером яндекс включает систему бонусов:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="TrendingUp" size={28} className="text-primary" />
                    <h4 className="text-xl font-bold">Пиковые часы</h4>
                  </div>
                  <p className="text-lg">Повышенная оплата в обед и вечером (коэффициент до 1.5x)</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Repeat" size={28} className="text-primary" />
                    <h4 className="text-xl font-bold">Серии заказов</h4>
                  </div>
                  <p className="text-lg">Выполните 5 заказов подряд — получите дополнительный бонус</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Calendar" size={28} className="text-primary" />
                    <h4 className="text-xl font-bold">Выходные дни</h4>
                  </div>
                  <p className="text-lg">Увеличенная ставка в субботу и воскресенье</p>
                </div>
                <div className="bg-muted p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Target" size={28} className="text-primary" />
                    <h4 className="text-xl font-bold">Квесты</h4>
                  </div>
                  <p className="text-lg">Еженедельные челленджи с денежными призами</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Headphones" size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Поддержка курьеров</h3>
                  <p className="text-lg text-muted-foreground">Всегда на связи</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Яндекс про работа курьером предполагает круглосуточную поддержку:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                  <Icon name="MessageSquare" size={28} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Чат в приложении</h4>
                    <p className="text-lg">Ответ в течение минуты</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                  <Icon name="Phone" size={28} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Телефон горячей линии</h4>
                    <p className="text-lg">Круглосуточная связь</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                  <Icon name="MapPin" size={28} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Центры поддержки курьеров</h4>
                    <p className="text-lg">В крупных городах</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                  <Icon name="BookOpen" size={28} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">База знаний</h4>
                    <p className="text-lg">Ответы на все вопросы</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={36} className="text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Штрафы</h3>
                  <p className="text-lg text-muted-foreground">Честная система без жёстких санкций</p>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <p className="text-lg">
                  Система работы построена так, что штрафов практически нет. Яндекс заинтересован в курьерах и не практикует жёсткие санкции. Единственное требование — выполнять взятые заказы. Если поняли, что не успеваете — можно отказаться до взятия заказа в работу без последствий.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 border-secondary hover:shadow-2xl transition-all bg-gradient-to-br from-white to-secondary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Smartphone" size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Приложение Яндекс Про курьер</h3>
                  <p className="text-lg text-muted-foreground">Ваш главный рабочий инструмент</p>
                </div>
              </div>

              <p className="text-lg mb-6">
                Яндекс курьер приложение — ваш главный рабочий инструмент. Через него вы:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                  <Icon name="ShoppingBag" size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">Получаете заказы</span>
                </div>
                <div className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                  <Icon name="Map" size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">Видите адреса и маршруты</span>
                </div>
                <div className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                  <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">Отмечаете этапы доставки</span>
                </div>
                <div className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                  <Icon name="Wallet" size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">Следите за заработком</span>
                </div>
                <div className="flex items-center gap-3 bg-muted p-4 rounded-xl">
                  <Icon name="MessageCircle" size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">Общаетесь с поддержкой</span>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4">Как работать яндекс курьером через приложение:</h4>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <span className="text-lg mt-1">Откройте Яндекс Про</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <span className="text-lg mt-1">Нажмите «Начать работу»</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <span className="text-lg mt-1">Ждите новые заказы или смотрите доступные</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <span className="text-lg mt-1">Принимайте заказ и следуйте навигации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</span>
                    <span className="text-lg mt-1">Доставьте заказ и получите оплату</span>
                  </li>
                </ol>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={scrollToJoin}
                  className="text-2xl px-12 py-8 bg-secondary hover:bg-secondary/90 text-white hover-scale shadow-2xl font-bold"
                >
                  Стать курьером Яндекс и скачать приложение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            👤 Со скольки лет можно работать курьером Яндекс
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-3xl mx-auto">
            Требования по возрасту и документам
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-black">18+</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Минимальный возраст</h3>
                  <p className="text-xl text-muted-foreground">
                    <strong>Яндекс курьер со скольки лет можно работать?</strong> С 18 лет — это минимальный возраст для регистрации.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl mb-8">
                <p className="text-lg">
                  Исключений нет, так как требуется заключение договора.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-6">Кто может работать:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                    <span className="text-3xl">✅</span>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Студенты</h5>
                      <p className="text-lg">Отличный вариант подработки между парами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                    <span className="text-3xl">✅</span>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Без опыта</h5>
                      <p className="text-lg">Обучение происходит прямо в процессе, первые заказы очень простые</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                    <span className="text-3xl">✅</span>
                    <div>
                      <h5 className="text-xl font-bold mb-2">С любым образованием</h5>
                      <p className="text-lg">Диплом не требуется</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-muted p-6 rounded-xl">
                    <span className="text-3xl">✅</span>
                    <div>
                      <h5 className="text-xl font-bold mb-2">Граждане РФ и иностранцы</h5>
                      <p className="text-lg">С документами на работу</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl">
                <p className="text-xl font-bold text-black">
                  Скольки лет можно работать курьером яндекс максимально? Ограничений по верхней возрасте нет — главное физическая способность выполнять доставки.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🚀 Как устроиться курьером Яндекс — пошаговая инструкция
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16 max-w-4xl mx-auto">
            Яндекс курьер устроиться можно за 1 день — процесс максимально упрощён и проходит онлайн.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-white to-primary/5">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Нажмите кнопку регистрации</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>Яндекс еда курьер устроиться</strong> начинается с заявки. Нажмите кнопку «Стать курьером» на этой странице — попадёте в форму регистрации.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-white to-secondary/5">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Заполните анкету</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    <strong>Яндекс курьер регистрация</strong> занимает 5 минут:
                  </p>
                  <div className="bg-muted p-6 rounded-xl">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0" />
                        <span className="text-lg">ФИО и дата рождения</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Phone" size={24} className="text-secondary flex-shrink-0" />
                        <span className="text-lg">Номер телефона (для связи)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="MapPin" size={24} className="text-secondary flex-shrink-0" />
                        <span className="text-lg">Город работы</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Bike" size={24} className="text-secondary flex-shrink-0" />
                        <span className="text-lg">Выбор транспорта (пешком/велосипед/авто)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-secondary flex-shrink-0" />
                        <span className="text-lg">Паспортные данные</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg mt-4 text-muted-foreground">
                    Все данные проверяются автоматически — никаких собеседований.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-white to-primary/5">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-black">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Пройдите онлайн-регистрацию</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    После подачи заявки придёт СМС с подтверждением. <strong>Курьер яндекс устроиться на работу</strong> можно без визита в офис — всё удалённо.
                  </p>
                  <div className="bg-muted p-6 rounded-xl">
                    <h4 className="text-xl font-bold mb-4">Что нужно подготовить:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="FileText" size={24} className="text-primary flex-shrink-0" />
                        <span className="text-lg">Паспорт (скан или фото)</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Hash" size={24} className="text-primary flex-shrink-0" />
                        <span className="text-lg">ИНН</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Car" size={24} className="text-primary flex-shrink-0" />
                        <span className="text-lg">Для работы на авто: водительское удостоверение и СТС</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-white to-secondary/5">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Скачайте приложение Яндекс Про</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    После одобрения заявки установите приложение:
                  </p>
                  <div className="bg-muted p-6 rounded-xl mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Smartphone" size={24} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="text-lg">Яндекс Про (для курьеров) — в App Store или Google Play</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="LogIn" size={24} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="text-lg">Войдите с вашим номером телефона</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="BookOpen" size={24} className="text-secondary flex-shrink-0 mt-1" />
                        <span className="text-lg">Изучите короткое обучение (10 минут)</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    <strong>Яндекс доставка устроиться курьером</strong> можно через это же приложение — оно общее для всех сервисов (Еда, Доставка, Лавка).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 border-2 border-primary hover:shadow-2xl transition-all bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-black">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Получите первый заказ</h3>
                  <p className="text-lg mb-6">
                    Всё готово! Нажимайте «В сеть» в приложении и ждите первый заказ. Обычно он приходит в течение 5–15 минут в активные часы.
                  </p>
                  <div className="bg-white p-6 rounded-xl mb-6">
                    <h4 className="text-xl font-bold mb-4">Советы новичкам:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Icon name="Sun" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Начните в дневное время — заказов меньше, но можно спокойно освоиться</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="Snail" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Первые 2–3 заказа делайте не спеша, изучайте интерфейс</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="MessageCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-lg">Не бойтесь писать в поддержку — они помогают новичкам</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-secondary to-primary p-6 rounded-xl">
                    <p className="text-xl font-bold text-white text-center">
                      Время от заявки до первого заказа: 1–3 дня
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToJoin}
                className="text-2xl px-12 py-8 bg-primary hover:bg-primary/90 text-black hover-scale shadow-2xl font-bold"
              >
                Яндекс еда стать курьером прямо сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">
            Отзывы курьеров
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Реальные истории наших партнёров
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 hover-scale hover:shadow-xl transition-all border-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}, {testimonial.age}</h4>
                    <div className="flex items-center gap-1 text-primary">
                      <Icon name="Star" size={20} className="fill-current" />
                      <span className="font-bold text-black">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">
            О работе
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {workInfo.map((info, index) => (
              <Card key={index} className="p-8 bg-white hover-scale">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  {info.title}
                </h3>
                <ul className="space-y-4">
                  {info.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3 text-lg">
                      <Icon name="CheckCircle2" size={24} className="text-secondary flex-shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Icon name="Clock" size={48} className="text-primary" />
                <div className="text-left">
                  <h4 className="text-2xl font-bold mb-2">Гибкий график работы</h4>
                  <p className="text-lg text-muted-foreground">
                    Сами решаете, когда и сколько работать. Без обязательных смен.<br/>
                    Работайте утром, днём, вечером или ночью — как вам удобно.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="join-section" className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Готовы начать?
            </h2>
            <p className="text-2xl mb-8 text-black/90">
              Присоединяйтесь к команде Яндекс Еды прямо сейчас
            </p>

            {showJoinForm ? (
              <Card className="p-8 bg-white/95 backdrop-blur-sm animate-fade-in">
                <form className="space-y-6">
                  <div className="text-left">
                    <label className="block text-lg font-semibold mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                      placeholder="Иван"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-lg font-semibold mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-lg font-semibold mb-2">Город</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                      placeholder="Москва"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-lg font-semibold mb-2">Транспорт</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg">
                      <option>Велосипед</option>
                      <option>Самокат</option>
                      <option>Пешком</option>
                      <option>Автомобиль</option>
                    </select>
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-black text-primary hover:bg-black/90 text-xl py-6 font-bold hover-scale"
                  >
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </form>
              </Card>
            ) : (
              <Button 
                size="lg" 
                onClick={scrollToJoin}
                className="text-2xl px-12 py-8 bg-black text-primary hover:bg-black/90 hover-scale shadow-2xl font-bold"
              >
                Стать курьером
              </Button>
            )}

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-black">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Icon name="Users" size={28} />
                <span>50 000+ курьеров</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Icon name="MapPin" size={28} />
                <span>500+ городов</span>
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Icon name="Star" size={28} className="fill-current" />
                <span>4.8 рейтинг</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Яндекс Еда</h3>
            <p className="text-gray-400 text-lg">Работай с лучшими. Зарабатывай больше.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">О компании</a>
            <a href="#" className="hover:text-primary transition-colors">Вакансии</a>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-gray-500">© 2024 Яндекс Еда. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;