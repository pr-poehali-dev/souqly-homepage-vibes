import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [language, setLanguage] = useState('en');
  const [cartItems, setCartItems] = useState(3);
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Electronics', nameAr: 'الإلكترونيات', icon: 'Smartphone', color: 'bg-blue-100' },
    { name: 'Accessories', nameAr: 'الإكسسوارات', icon: 'Watch', color: 'bg-purple-100' },
    { name: 'Fashion', nameAr: 'الأزياء', icon: 'Shirt', color: 'bg-pink-100' },
    { name: 'Perfumes', nameAr: 'العطور', icon: 'Droplets', color: 'bg-yellow-100' },
    { name: 'Vapes', nameAr: 'الفيب', icon: 'Wind', color: 'bg-green-100' },
    { name: 'Home & Decor', nameAr: 'المنزل والديكور', icon: 'Home', color: 'bg-orange-100' },
    { name: 'Gifts', nameAr: 'الهدايا', icon: 'Gift', color: 'bg-red-100' },
  ];

  const products = [
    { id: 1, name: 'Premium Wireless Headphones', nameAr: 'سماعات لاسلكية فاخرة', price: '$89', originalPrice: '$129', rating: 4.8, image: '/placeholder.svg', badge: 'SALE -31%', purchases: 89, isHot: false },
    { id: 2, name: 'Luxury Watch Collection', nameAr: 'مجموعة ساعات فاخرة', price: '$299', originalPrice: null, rating: 4.9, image: '/placeholder.svg', badge: 'NEW', purchases: 23, isHot: false },
    { id: 3, name: 'Arabic Perfume Set', nameAr: 'مجموعة عطور عربية', price: '$159', originalPrice: '$199', rating: 4.7, image: '/img/cf7d2c22-6439-4f0b-99e9-79593290f552.jpg', badge: 'SALE -20%', purchases: 142, isHot: true },
    { id: 4, name: 'Traditional Hookah', nameAr: 'أرجيلة تقليدية', price: '$199', originalPrice: null, rating: 4.6, image: '/img/359045c1-1458-4f33-82fb-81f4d417bd19.jpg', badge: null, purchases: 67, isHot: true },
    { id: 5, name: 'Modern LED Lamp', nameAr: 'مصباح LED حديث', price: '$79', originalPrice: '$99', rating: 4.8, image: '/placeholder.svg', badge: 'SALE -20%', purchases: 156, isHot: false },
  ];

  const reviews = [
    { name: 'Ahmed Al-Rashid', rating: 5, text: 'Amazing products and fast delivery! Highly recommend Souqly for authentic Middle Eastern goods.', avatar: '/img/b87fce3c-daed-4cf3-b137-f8308626fc5e.jpg', location: '🇱🇧 Beirut', verified: true },
    { name: 'Sara Hassan', rating: 5, text: 'Perfect shopping experience. Great customer service and quality products.', avatar: '/img/961f9ae1-39d9-46a7-8f35-fb31071ccfa8.jpg', location: '🇯🇴 Amman', verified: true },
    { name: 'Omar Khalil', rating: 4, text: 'Love the variety of products available. Will definitely shop again!', avatar: '/img/f29b5dda-59de-4d52-b1e7-5f6d671af877.jpg', location: '🇱🇧 Tripoli', verified: false },
  ];

  const whyChooseUs = [
    { icon: 'Truck', title: 'Fast Delivery', titleAr: 'التسليم السريع', description: 'Same day delivery in Beirut', color: 'text-blue-600' },
    { icon: 'Store', title: 'Local Vendors', titleAr: 'البائعون المحليون', description: 'Support local businesses', color: 'text-purple-600' },
    { icon: 'CreditCard', title: 'Cash on Delivery', titleAr: 'الدفع عند الاستلام', description: 'Pay when you receive', color: 'text-green-600' },
    { icon: 'RefreshCw', title: 'Easy Returns', titleAr: 'الإرجاع السهل', description: '30-day return policy', color: 'text-orange-600' },
    { icon: 'Shield', title: 'Secure Payment', titleAr: 'دفع آمن', description: 'SSL encrypted transactions', color: 'text-red-600' },
    { icon: 'Users', title: '1000+ Happy Customers', titleAr: '1000+ عميل راضٍ', description: 'Growing community', color: 'text-emerald-600' },
  ];

  const deliveryAreas = [
    { city: 'Beirut', cityAr: 'بيروت', time: 'Same Day', emoji: '🚚' },
    { city: 'Tripoli', cityAr: 'طرابلس', time: '1-2 Days', emoji: '📦' },
    { city: 'Sidon', cityAr: 'صيدا', time: '1-2 Days', emoji: '📦' },
    { city: 'Tyre', cityAr: 'صور', time: '2-3 Days', emoji: '🚛' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'CreditCard', color: 'text-blue-600' },
    { name: 'Mastercard', icon: 'CreditCard', color: 'text-red-600' },
    { name: 'Cash on Delivery', icon: 'Banknote', color: 'text-green-600' },
    { name: 'Bank Transfer', icon: 'Building2', color: 'text-purple-600' },
  ];

  const instagramPosts = [
    { image: '/img/cf7d2c22-6439-4f0b-99e9-79593290f552.jpg', likes: 234 },
    { image: '/img/359045c1-1458-4f33-82fb-81f4d417bd19.jpg', likes: 189 },
    { image: '/placeholder.svg', likes: 156 },
    { image: '/placeholder.svg', likes: 298 },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-white font-rubik">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white py-2 px-4 text-center text-sm font-medium animate-pulse">
        🎉 Free delivery in Beirut - Today Only! | 🎉 توصيل مجاني في بيروت - اليوم فقط!
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold text-emerald-800">Souqly</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border-sand-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-emerald-600 hover:bg-emerald-700"
                >
                  <Icon name="Search" size={16} />
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="text-emerald-800 hover:text-emerald-600"
              >
                🇱🇧 {language === 'en' ? 'العربية' : 'English'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="relative text-emerald-800 hover:text-emerald-600"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/76aa8f94-4ca6-40c2-800d-5835a4818949.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              <span className="block animate-fade-in">🌍 From Eastern Market</span>
              <span className="block text-gold-400 animate-fade-in" style={{ animationDelay: '0.3s' }}>Straight to Your Door</span>
            </h1>
            <p className="text-xl md:text-2xl text-gold-200 mb-2 font-arabic animate-fade-in" style={{ animationDelay: '0.6s' }}>
              من السوق الشرقي - مباشرة إلى باب منزلك
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
              Discover authentic Middle Eastern products, electronics, fashion, and more from local Lebanese vendors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold hover-scale shadow-lg"
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                {language === 'en' ? 'Shop Now' : 'تسوق الآن'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-4 text-lg font-semibold hover-scale shadow-lg"
              >
                <Icon name="Store" size={20} className="mr-2" />
                {language === 'en' ? 'Sell with Us' : 'بع معنا'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center text-emerald-800 mb-12 transition-all duration-700 ${isVisible.categories ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {language === 'en' ? 'Popular Categories' : 'الفئات الشائعة'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.name} 
                className={`hover-lift cursor-pointer group border-sand-200 hover:border-emerald-300 transition-all duration-300 ${isVisible.categories ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-float transition-transform duration-300`}>
                    <Icon name={category.icon as any} size={24} className="text-emerald-800" />
                  </div>
                  <h3 className="font-semibold text-emerald-800 text-sm">
                    {language === 'en' ? category.name : category.nameAr}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover-scale"
            >
              <Icon name="Grid3x3" size={16} className="mr-2" />
              {language === 'en' ? 'View All Categories' : 'عرض جميع الفئات'}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-sand-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center text-emerald-800 mb-12 transition-all duration-700 ${isVisible.products ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {language === 'en' ? 'Featured Products' : 'المنتجات المميزة'}
          </h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`min-w-[280px] hover-lift cursor-pointer border-sand-200 hover:border-emerald-300 transition-all duration-300 ${isVisible.products ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-0 relative">
                    {/* Product Badges */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                      {product.badge && (
                        <Badge className={`text-xs font-bold px-2 py-1 ${
                          product.badge.includes('SALE') ? 'bg-red-500' : 
                          product.badge === 'NEW' ? 'bg-blue-500' : 'bg-green-500'
                        }`}>
                          {product.badge}
                        </Badge>
                      )}
                      {product.isHot && (
                        <Badge className="bg-orange-500 text-white text-xs font-bold px-2 py-1">
                          🔥 HOT
                        </Badge>
                      )}
                    </div>
                    
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-emerald-800 mb-2 line-clamp-2">
                        {language === 'en' ? product.name : product.nameAr}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gold-600">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-sand-500 line-through">{product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="text-gold-500 fill-current" />
                          <span className="text-sm text-sand-600">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-sand-500 mb-3">
                        {language === 'en' ? `Sold ${product.purchases} times` : `تم البيع ${product.purchases} مرة`}
                      </p>
                      <Button
                        size="sm"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white hover-scale"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        {language === 'en' ? 'Add to Cart' : 'أضف للسلة'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center text-emerald-800 mb-12 transition-all duration-700 ${isVisible['why-choose-us'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {language === 'en' ? 'Why Choose Souqly?' : 'لماذا تختار سوقلي؟'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title} 
                className={`text-center group cursor-pointer transition-all duration-700 ${isVisible['why-choose-us'] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 group-hover:scale-110 transition-all duration-300 group-hover:animate-float`}>
                  <Icon name={item.icon as any} size={28} className={`${item.color} transition-colors duration-300`} />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2 text-lg">
                  {language === 'en' ? item.title : item.titleAr}
                </h3>
                <p className="text-sand-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-16 bg-sand-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center text-emerald-800 mb-12 transition-all duration-700 ${isVisible.reviews ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            {language === 'en' ? 'What Our Customers Say' : 'ماذا يقول عملاؤنا'}
          </h2>
          
          {/* Animated Review Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-sand-200 hover:border-emerald-300 transition-all duration-300 mx-auto max-w-2xl">
                      <CardContent className="p-8 text-center">
                        <div className="flex items-center justify-center mb-6">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-emerald-200"
                          />
                        </div>
                        <div className="flex items-center justify-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={20} className="text-gold-500 fill-current mx-1" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-sand-700 italic mb-4 leading-relaxed">
                          "{review.text}"
                        </blockquote>
                        <div className="flex items-center justify-center space-x-2">
                          <h4 className="font-semibold text-emerald-800">{review.name}</h4>
                          {review.verified && (
                            <Icon name="CheckCircle" size={16} className="text-emerald-500" />
                          )}
                        </div>
                        <p className="text-sm text-sand-500 mt-1">{review.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Review Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentReview ? 'bg-emerald-600' : 'bg-sand-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Seller */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Selling?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of local vendors on Souqly and reach customers across Lebanon. 
            Start your online business today!
          </p>
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-sand-50 px-8 py-4 text-lg font-semibold hover-scale"
          >
            <Icon name="Store" size={20} className="mr-2" />
            Open Your Shop
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Instagram Feed */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">
              Follow Us on Instagram <span className="text-gold-400">#souqly</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {instagramPosts.map((post, index) => (
                <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Icon name="Heart" size={20} className="mx-auto mb-1" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Areas */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6">
              {language === 'en' ? 'Delivery Areas' : 'مناطق التوصيل'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {deliveryAreas.map((area) => (
                <div key={area.city} className="text-center p-4 bg-emerald-800 rounded-lg">
                  <div className="text-2xl mb-2">{area.emoji}</div>
                  <h4 className="font-semibold text-white">
                    {language === 'en' ? area.city : area.cityAr}
                  </h4>
                  <p className="text-emerald-200 text-sm">{area.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">Souqly</span>
              </div>
              <p className="text-emerald-200 text-sm mb-4">
                Your trusted marketplace for authentic Middle Eastern products in Lebanon.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="https://wa.me/96170123456" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Track Order</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Payment Methods</h4>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="flex items-center space-x-2 text-emerald-200">
                    <Icon name={method.icon as any} size={16} className={method.color} />
                    <span className="text-xs">{method.name}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={toggleLanguage}
                className="w-full border-emerald-400 text-emerald-200 hover:bg-emerald-800 hover:text-white"
              >
                🇱🇧 {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 pt-8 text-center text-emerald-200 text-sm">
            <p>&copy; 2024 Souqly. All rights reserved. Made with ❤️ in Lebanon.</p>
            <p className="mt-2">
              <a href="https://wa.me/96170123456" className="text-gold-400 hover:text-gold-300 transition-colors">
                💬 WhatsApp Support: +961 70 123 456
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;