import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [language, setLanguage] = useState('en');
  const [cartItems, setCartItems] = useState(3);

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
    { id: 1, name: 'Premium Wireless Headphones', price: '$89', rating: 4.8, image: '/placeholder.svg' },
    { id: 2, name: 'Luxury Watch Collection', price: '$299', rating: 4.9, image: '/placeholder.svg' },
    { id: 3, name: 'Arabic Perfume Set', price: '$159', rating: 4.7, image: '/img/cf7d2c22-6439-4f0b-99e9-79593290f552.jpg' },
    { id: 4, name: 'Traditional Hookah', price: '$199', rating: 4.6, image: '/img/359045c1-1458-4f33-82fb-81f4d417bd19.jpg' },
    { id: 5, name: 'Modern LED Lamp', price: '$79', rating: 4.8, image: '/placeholder.svg' },
  ];

  const reviews = [
    { name: 'Ahmed Al-Rashid', rating: 5, text: 'Amazing products and fast delivery! Highly recommend Souqly for authentic Middle Eastern goods.', avatar: '/placeholder.svg' },
    { name: 'Sara Hassan', rating: 5, text: 'Perfect shopping experience. Great customer service and quality products.', avatar: '/placeholder.svg' },
    { name: 'Omar Khalil', rating: 4, text: 'Love the variety of products available. Will definitely shop again!', avatar: '/placeholder.svg' },
  ];

  const whyChooseUs = [
    { icon: 'Truck', title: 'Fast Delivery', titleAr: 'التسليم السريع', description: 'Same day delivery in Beirut' },
    { icon: 'Store', title: 'Local Vendors', titleAr: 'البائعون المحليون', description: 'Support local businesses' },
    { icon: 'CreditCard', title: 'Cash on Delivery', titleAr: 'الدفع عند الاستلام', description: 'Pay when you receive' },
    { icon: 'RefreshCw', title: 'Easy Returns', titleAr: 'الإرجاع السهل', description: '30-day return policy' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen bg-white font-rubik">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200 shadow-sm">
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
      <section className="relative bg-gradient-to-r from-sand-100 via-sand-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-eastern-pattern opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6 animate-fade-in">
              <span className="block">🌍 From Eastern Market</span>
              <span className="block text-gold-600">Straight to Your Door</span>
            </h1>
            <p className="text-xl text-sand-700 mb-8 max-w-2xl mx-auto">
              Discover authentic Middle Eastern products, electronics, fashion, and more from local Lebanese vendors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold hover-scale"
              >
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold-500 text-gold-600 hover:bg-gold-50 px-8 py-4 text-lg font-semibold hover-scale"
              >
                <Icon name="Store" size={20} className="mr-2" />
                Sell with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover-lift cursor-pointer group border-sand-200 hover:border-emerald-300 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={category.icon as any} size={24} className="text-emerald-800" />
                  </div>
                  <h3 className="font-semibold text-emerald-800 text-sm">
                    {language === 'en' ? category.name : category.nameAr}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-sand-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Featured Products
          </h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
              {products.map((product) => (
                <Card key={product.id} className="min-w-[280px] hover-lift cursor-pointer border-sand-200 hover:border-emerald-300 transition-all duration-300">
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-emerald-800 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-bold text-gold-600">{product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="text-gold-500 fill-current" />
                          <span className="text-sm text-sand-600">{product.rating}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Add to Cart
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            Why Choose Souqly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <Icon name={item.icon as any} size={24} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-emerald-800 mb-2">
                  {language === 'en' ? item.title : item.titleAr}
                </h3>
                <p className="text-sand-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-sand-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.name} className="border-sand-200 hover:border-emerald-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-emerald-800">{review.name}</h4>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-gold-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sand-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">Souqly</span>
              </div>
              <p className="text-emerald-200 text-sm">
                Your trusted marketplace for authentic Middle Eastern products in Lebanon.
              </p>
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
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
              <Button
                variant="outline"
                onClick={toggleLanguage}
                className="mt-4 border-emerald-400 text-emerald-200 hover:bg-emerald-800 hover:text-white"
              >
                🇱🇧 {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200 text-sm">
            <p>&copy; 2024 Souqly. All rights reserved. Made with ❤️ in Lebanon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;