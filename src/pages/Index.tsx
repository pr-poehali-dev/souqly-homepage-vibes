import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [currentReview, setCurrentReview] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Hero content
  const heroContent = {
    en: {
      title: "Authentic Middle Eastern Marketplace",
      subtitle: "Your trusted source for quality products from local vendors across Lebanon",
      buyNow: "Shop Now",
      sellNow: "Start Selling"
    },
    ar: {
      title: "سوق الشرق الأوسط الأصيل",
      subtitle: "مصدرك الموثوق للمنتجات عالية الجودة من البائعين المحليين في لبنان",
      buyNow: "تسوق الآن",
      sellNow: "ابدأ البيع"
    }
  };

  // Categories
  const categories = [
    { 
      name: language === 'en' ? 'Spices' : 'البهارات', 
      icon: 'Carrot' as const, 
      count: 45 
    },
    { 
      name: language === 'en' ? 'Dates' : 'التمور', 
      icon: 'Apple' as const, 
      count: 23 
    },
    { 
      name: language === 'en' ? 'Honey' : 'العسل', 
      icon: 'Droplets' as const, 
      count: 12 
    },
    { 
      name: language === 'en' ? 'Oils' : 'الزيوت', 
      icon: 'Bottle' as const, 
      count: 18 
    },
    { 
      name: language === 'en' ? 'Nuts' : 'المكسرات', 
      icon: 'Nut' as const, 
      count: 31 
    },
    { 
      name: language === 'en' ? 'Handicrafts' : 'الحرف اليدوية', 
      icon: 'Palette' as const, 
      count: 27 
    }
  ];

  // Products
  const products = [
    {
      id: 1,
      name: language === 'en' ? 'Premium Saffron' : 'زعفران فاخر',
      price: '75.00',
      image: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg',
      sale: 15
    },
    {
      id: 2,
      name: language === 'en' ? 'Medjool Dates' : 'تمر مجهول',
      price: '25.00',
      image: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg',
      isNew: true
    },
    {
      id: 3,
      name: language === 'en' ? 'Olive Oil' : 'زيت زيتون',
      price: '35.00',
      image: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg'
    },
    {
      id: 4,
      name: language === 'en' ? 'Za\'atar Mix' : 'خليط الزعتر',
      price: '18.00',
      image: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg'
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: language === 'en' ? 'Fast Delivery' : 'توصيل سريع',
      description: language === 'en' ? 'Same-day delivery in Beirut' : 'توصيل في نفس اليوم في بيروت',
      icon: 'Truck' as const
    },
    {
      title: language === 'en' ? 'Local Vendors' : 'بائعون محليون',
      description: language === 'en' ? 'Supporting Lebanese businesses' : 'دعم الأعمال اللبنانية',
      icon: 'Store' as const
    },
    {
      title: language === 'en' ? 'Cash on Delivery' : 'الدفع عند الاستلام',
      description: language === 'en' ? 'Pay when you receive' : 'ادفع عند الاستلام',
      icon: 'CreditCard' as const
    },
    {
      title: language === 'en' ? 'Easy Returns' : 'إرجاع سهل',
      description: language === 'en' ? '7-day return policy' : 'سياسة الإرجاع 7 أيام',
      icon: 'RotateCcw' as const
    }
  ];

  // Reviews
  const reviews = [
    {
      id: 1,
      name: 'Ahmad Khalil',
      city: 'Beirut',
      rating: 5,
      text: language === 'en' ? 'Excellent quality spices, fast delivery!' : 'بهارات ممتازة الجودة، توصيل سريع!',
      avatar: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg'
    },
    {
      id: 2,
      name: 'Fatima Houssein',
      city: 'Tripoli',
      rating: 5,
      text: language === 'en' ? 'Best dates I\'ve ever tasted.' : 'أفضل تمور تذوقتها على الإطلاق.',
      avatar: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg'
    },
    {
      id: 3,
      name: 'Michel Frem',
      city: 'Sidon',
      rating: 5,
      text: language === 'en' ? 'Authentic products, great service.' : 'منتجات أصيلة، خدمة رائعة.',
      avatar: '/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg'
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-playfair font-bold text-foreground">Souqly</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-9 w-9 p-0"
              >
                <Icon name={isDark ? "Sun" : "Moon"} size={16} />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="text-sm"
              >
                🇱🇧 {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/b376134f-29ed-41e8-a10f-62ec2a2961e5.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            {heroContent[language].title}
          </h1>
          <p className="text-lg md:text-xl font-inter mb-8 max-w-2xl mx-auto opacity-90">
            {heroContent[language].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-inter"
            >
              {heroContent[language].buyNow}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-inter"
            >
              {heroContent[language].sellNow}
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-foreground mb-12">
            {language === 'en' ? 'Shop by Category' : 'تسوق حسب الفئة'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-inter font-medium text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="font-inter">
              {language === 'en' ? 'View All Categories' : 'عرض جميع الفئات'}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-foreground mb-12">
            {language === 'en' ? 'Featured Products' : 'المنتجات المميزة'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.sale && (
                      <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-inter">
                        -{product.sale}%
                      </div>
                    )}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-inter">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-inter font-medium text-foreground mb-2">{product.name}</h3>
                    <p className="text-xl font-bold text-primary mb-3">${product.price}</p>
                    <Button size="sm" className="w-full font-inter">
                      {language === 'en' ? 'Add to Cart' : 'أضف إلى السلة'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-foreground mb-12">
            {language === 'en' ? 'Why Choose Souqly?' : 'لماذا تختار سوقلي؟'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-inter font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-inter">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-foreground mb-12">
            {language === 'en' ? 'What Our Customers Say' : 'ماذا يقول عملاؤنا'}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={reviews[currentReview].avatar} 
                  alt={reviews[currentReview].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground font-inter mb-4 italic">
                "{reviews[currentReview].text}"
              </p>
              
              <div className="font-inter">
                <p className="font-semibold text-foreground">{reviews[currentReview].name}</p>
                <p className="text-muted-foreground text-sm">🇱🇧 {reviews[currentReview].city}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-playfair font-bold">Souqly</span>
              </div>
              <p className="text-background/80 font-inter text-sm">
                {language === 'en' 
                  ? 'Your trusted marketplace for authentic Middle Eastern products in Lebanon.' 
                  : 'السوق الموثوق للمنتجات الشرق أوسطية الأصيلة في لبنان.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">
                {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
              </h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'About Us' : 'من نحن'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Contact' : 'اتصل بنا'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Terms' : 'الشروط'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Privacy' : 'الخصوصية'}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">
                {language === 'en' ? 'Customer Support' : 'دعم العملاء'}
              </h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Help Center' : 'مركز المساعدة'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Shipping' : 'الشحن'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Returns' : 'الإرجاع'}
                </a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">
                  {language === 'en' ? 'Track Order' : 'تتبع الطلب'}
                </a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold mb-4">
                {language === 'en' ? 'Payment Methods' : 'طرق الدفع'}
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center space-x-2 text-background/80 text-sm font-inter">
                  <Icon name="CreditCard" size={16} />
                  <span>Visa</span>
                </div>
                <div className="flex items-center space-x-2 text-background/80 text-sm font-inter">
                  <Icon name="CreditCard" size={16} />
                  <span>Mastercard</span>
                </div>
                <div className="flex items-center space-x-2 text-background/80 text-sm font-inter">
                  <Icon name="Banknote" size={16} />
                  <span>Cash</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="https://wa.me/96170123456" className="text-background/80 hover:text-background transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/80 text-sm font-inter">
            <p>&copy; 2025 Souqly. {language === 'en' ? 'All rights reserved. Made with' : 'جميع الحقوق محفوظة. صنع بـ'} ❤️ {language === 'en' ? 'in Lebanon' : 'في لبنان'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}