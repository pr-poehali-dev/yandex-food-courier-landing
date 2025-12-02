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
          <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Почему выбирают нас
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Более 50 000 курьеров уже работают с Яндекс Едой
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 hover-scale border-2 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={benefit.icon} size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">
            Требования
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Всё что нужно для старта
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-scale bg-white hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={req.icon} size={36} className="text-black" />
                </div>
                <p className="text-lg font-semibold">{req.text}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground mb-6">
              Опыт работы курьером не требуется — мы всему научим
            </p>
            <Button 
              size="lg" 
              onClick={scrollToJoin}
              className="bg-secondary hover:bg-secondary/90 text-white px-10 py-6 text-xl hover-scale"
            >
              Подать заявку
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
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