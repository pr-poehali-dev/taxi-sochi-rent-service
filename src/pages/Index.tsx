import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const cars = [
    {
      id: 1,
      name: 'Geely Emgrand',
      category: 'Эконом',
      image: 'https://cdn.poehali.dev/files/b019c6e5-7617-4d1b-817d-3954365be579.jpg',
      price: '2 000',
      features: ['Автомат', 'Навигация', 'Пол бака']
    },
    {
      id: 2,
      name: 'Geely Coolray',
      category: 'Комфорт',
      image: 'https://cdn.poehali.dev/files/877a0cd0-60ed-4a30-8856-1cf1d2b6e36c.jpg',
      price: '2 700',
      features: ['Автомат', 'Камера 360', 'Детское кресло']
    },
    {
      id: 3,
      name: 'Электромобиль Evolute I-PRO',
      category: 'Электро',
      image: 'https://cdn.poehali.dev/files/4649d105-6797-4b37-bb37-71e94921cc50.jpg',
      price: '3 500',
      features: ['Автомат', 'Запас хода 350 км', 'Экономия на топливе', '1 сессия 750р до полного!']
    },
    {
      id: 4,
      name: 'Hongqi H5',
      category: 'Бизнес',
      image: 'https://cdn.poehali.dev/files/92e5defa-4d80-4800-b144-22a73d1cb4ba.jpg',
      price: '4 500',
      features: ['Автомат', 'Камера 360', 'Высокие требования', 'Тариф Бизнес']
    },
    {
      id: 5,
      name: 'BYD HAN 2025',
      category: 'Бизнес',
      image: 'https://cdn.poehali.dev/files/f5a4f381-fc13-4566-8878-95e0be80b7d6.jpg',
      price: '5 500',
      features: ['Автомат', 'Камера 360', 'Высокие требования', 'Тариф Бизнес', 'Запас хода 500 км']
    }
  ];

  const tariffs = [
    {
      title: 'Комфорт',
      price: '2 000',
      period: 'сутки',
      features: ['Без ограничения км', 'Пол бака топлива', 'Поддержка 24/7', 'Geely Emgrand'],
      popular: false
    },
    {
      title: 'Комфорт',
      price: '2 700',
      period: 'сутки',
      features: ['Без ограничения км', 'Камера 360', 'Детское кресло', 'Geely Coolray'],
      popular: false
    },
    {
      title: 'Электро',
      price: '2 500',
      period: 'сутки',
      features: ['Запас хода 350 км', 'Экономия на топливе', '1 зарядка 750₽', 'Evolute I-PRO'],
      popular: true
    },
    {
      title: 'Бизнес',
      price: '4 500',
      period: 'сутки',
      features: ['Без ограничения км', 'Высокие требования', 'Камера 360', 'Hongqi H5 / BYD HAN'],
      popular: false
    }
  ];

  const rentalConditions = [
    { icon: 'User', title: 'Возраст от 25 лет', description: 'Стаж вождения от 2 лет' },
    { icon: 'CreditCard', title: 'Документы', description: 'Паспорт и водительские права' },
    { icon: 'Clock', title: 'Бронирование 24/7', description: 'Круглосуточная поддержка' },
    { icon: 'Banknote', title: 'Первый день аренды бесплатный', description: '' },
    { icon: 'Percent', title: 'Акции', description: 'Выгодные предложения для водителей' },
    { icon: 'Car', title: 'Выкуп автомобиля', description: 'Выгодные условия выкупа авто' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AutoRent
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#fleet" className="hover:text-primary transition-colors">Автопарк</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#conditions" className="hover:text-primary transition-colors">Условия</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Забронировать</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-fade-in"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Аренда авто под такси в Сочи
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Выгодные тарифы для длительной аренды
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                <Icon name="Car" className="mr-2" />
                Выбрать авто
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Phone" className="mr-2" />
                Позвонить
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Автомобилей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5</div>
                <div className="text-muted-foreground">Филиалов по всей России</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10 лет</div>
                <div className="text-muted-foreground">На рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground">Выбери идеальный авто для выполнения заказов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary">
                    {car.category}
                  </Badge>
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{car.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">
                    от {car.price} ₽ / сутки
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  tariff.popular ? 'border-primary border-4 scale-105' : 'hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-4">{tariff.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tariff.price} ₽
                    </span>
                  </div>
                  <CardDescription className="text-lg">за {tariff.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      tariff.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:scale-105' 
                        : ''
                    }`}
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Условия аренды</h2>
            <p className="text-xl text-muted-foreground">Простые и понятные правила</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {rentalConditions.map((condition, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={condition.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{condition.title}</CardTitle>
                  <CardDescription className="text-base">{condition.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Какие документы нужны для аренды?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    Для аренды необходимы паспорт РФ и водительское удостоверение. Стаж вождения от 3 лет.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Что входит в стоимость аренды?
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    В стоимость аренды включены Путевые листы, круглосуточная поддержка, пол бака бензина 92 или 95, подключение к парку, обслуживание авто за счет парка.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>Мы перезвоним в течение 5 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение (необязательно)" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Телефон</h3>
                      <a href="tel:+79331690249" className="text-xl text-primary hover:underline">
                        +7 933 169 02 49
                      </a>
                      <p className="text-muted-foreground mt-1">с 9:00 до 18:00, Пн-Пт</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-accent transition-colors hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-lg">г. Сочи, ПГТ Сириус, ул. Станиславского 1/3</p>
                      <p className="text-muted-foreground mt-1">Пн-Вс: 08:00 - 22:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AutoRent
              </h3>
              <p className="text-gray-400">Надежная аренда автомобилей в Москве с 2019 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#fleet" className="hover:text-primary transition-colors">Автопарк</a></li>
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#conditions" className="hover:text-primary transition-colors">Условия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoRent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}