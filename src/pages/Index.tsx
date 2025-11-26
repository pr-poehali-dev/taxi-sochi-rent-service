import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const cars = [
    {
      id: 1,
      name: 'Geely Emgrand',
      category: 'Комфорт',
      image: 'https://cdn.poehali.dev/files/5077cb11-cb52-4a0f-8bc2-bd199de8b187.png',
      price: 'Акция 2000',
      features: ['Автомат', 'Навигация', 'Пол бака']
    },
    {
      id: 2,
      name: 'Geely Coolray',
      category: 'Комфорт',
      image: 'https://cdn.poehali.dev/files/c89c7b7d-8058-4a2f-960f-635389ef5c14.jpg',
      price: '2 700',
      features: ['Автомат', 'Камера 360', 'Детское кресло']
    },
    {
      id: 3,
      name: 'Электромобиль Evolute I-PRO',
      category: 'Электро',
      image: 'https://cdn.poehali.dev/files/8a5f8c45-40e9-42f7-9dea-aee61a29131f.png',
      price: 'Акция 2000',
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
      image: 'https://cdn.poehali.dev/files/b80a7a25-8a85-4607-a055-72604a55a222.jpg',
      price: '5 500',
      features: ['Автомат', 'Камера 360', 'Высокие требования', 'Тариф Бизнес', 'Запас хода 500 км']
    }
  ];

  const tariffs = [
    {
      title: 'Комфорт',
      price: 'от 2000',
      period: 'сутки',
      features: ['Без ограничения км', 'Пол бака топлива', 'Поддержка 24/7', 'Geely Emgrand'],
      popular: false
    },
    {
      title: 'Комфорт',
      price: 'от 2700',
      period: 'сутки',
      features: ['Без ограничения км', 'Камера 360', 'Детское кресло', 'Geely Coolray'],
      popular: false
    },
    {
      title: 'Электро',
      price: 'от 2000',
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
    <div className="min-h-screen bg-black text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Таксопарк 74/18
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#fleet" className="text-foreground hover:text-primary transition-colors">Автопарк</a>
            <a href="#tariffs" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#conditions" className="text-foreground hover:text-primary transition-colors">Условия</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button 
            className="hidden md:block bg-primary text-black hover:bg-primary/90 font-semibold"
            onClick={() => setIsBookingModalOpen(true)}
          >
            Забронировать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-fade-in"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-scale-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary tracking-wider">
              Аренда авто под такси в Сочи
            </h1>
            <p className="text-5xl md:text-7xl font-bold mb-8 text-primary">
              Таксопарк 74/18
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary text-black hover:scale-105 transition-transform font-semibold"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Icon name="Car" className="mr-2" />
                Забронировать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-black font-semibold"
                onClick={() => setIsPhoneModalOpen(true)}
              >
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
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Филиалов по всей России</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10 лет</div>
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

      <section id="fleet" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground">Выбери идеальный авто для выполнения заказов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id} 
                className="group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary overflow-hidden bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10 bg-primary text-black font-semibold">
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
                    {car.price} ₽ / сутки
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
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-primary text-black hover:bg-primary/90 transition-all font-semibold"
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 bg-card ${
                  tariff.popular ? 'border-primary border-4 scale-105' : 'border-2 border-primary/20 hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black font-semibold px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-4">{tariff.title}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-primary">
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
                    className={`w-full font-semibold ${
                      tariff.popular 
                        ? 'bg-primary text-black hover:scale-105' 
                        : 'border-primary text-primary hover:bg-primary hover:text-black'
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

      <section id="conditions" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Условия аренды</h2>
            <p className="text-xl text-muted-foreground">Простые и понятные правила</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {rentalConditions.map((condition, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <Icon name={condition.icon as any} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-xl">{condition.title}</CardTitle>
                  <CardDescription className="text-base">{condition.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="bg-card border-2 border-primary/20">
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

      <section id="contacts" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors bg-card">
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
                  <Button className="w-full h-12 text-lg bg-primary text-black hover:scale-105 transition-transform font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:border-primary transition-colors hover:shadow-lg hover:shadow-primary/50 bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-black" />
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
              <Card className="border-2 border-primary/20 hover:border-primary transition-colors hover:shadow-lg hover:shadow-primary/50 bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-lg">г. Сочи, ПГТ Сириус, ул. Станиславского 1/3</p>
                      <p className="text-muted-foreground mt-1">с 9:00 до 18:00, Пн-Пт</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-foreground py-12 px-4 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Таксопарк 74/18
              </h3>
              <p className="text-muted-foreground">Надежная аренда автомобилей в Сочи с 2019</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#fleet" className="hover:text-primary transition-colors">Автопарк</a></li>
                <li><a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#conditions" className="hover:text-primary transition-colors">Условия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Таксопарк 74/18. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-md bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary">Забронировать автомобиль</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="flex items-center gap-3 text-3xl font-bold text-primary">
              <Icon name="Phone" size={32} />
              <a href="tel:+79331690249" className="hover:underline">
                +7 933 169 02 49
              </a>
            </div>
            <p className="text-center text-muted-foreground">
              Напишите пожалуйста нам на WhatsApp или Telegram
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen}>
        <DialogContent className="sm:max-w-md bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary">Позвонить нам</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="flex items-center gap-3 text-3xl font-bold text-primary">
              <Icon name="Phone" size={32} />
              <a href="tel:+79331690249" className="hover:underline">
                +7 933 169 02 49
              </a>
            </div>
            <p className="text-center text-muted-foreground">
              Нажмите на номер, чтобы позвонить
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}