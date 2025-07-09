import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, Eye, DollarSign, Check, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [username, setUsername] = useState('');
  const [recentPayments, setRecentPayments] = useState([]);
  const [recentViews, setRecentViews] = useState([]);

  // Generate mock recent payments data
  useEffect(() => {
    const generatePayments = () => {
      const usernames = ['lua****', 'mar****', 'joe****', 'ana****', 'ped****', 'car****', 'bru****', 'fer****', 'gui****', 'leo****'];
      const payments = [];
      const views = [];
      
      for (let i = 0; i < 10; i++) {
        payments.push({
          id: i + 1,
          username: usernames[Math.floor(Math.random() * usernames.length)],
          status: 'Realizado',
          time: `${Math.floor(Math.random() * 60) + 1} Seconds Ago`
        });
        
        views.push({
          id: i + 1,
          username: usernames[Math.floor(Math.random() * usernames.length)],
          status: 'Realizado',
          time: `${Math.floor(Math.random() * 60) + 1} Seconds Ago`
        });
      }
      
      setRecentPayments(payments);
      setRecentViews(views);
    };

    generatePayments();
    const interval = setInterval(generatePayments, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mailcos
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#priority" className="hover:text-purple-400 transition-colors">Nossa Prioridade</a>
            <a href="#proof" className="hover:text-purple-400 transition-colors">Prova de pagamento</a>
            <a href="#faqs" className="hover:text-purple-400 transition-colors">FAQs</a>
            <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              Sala na Cos.tv <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Ganhe seguidores e visualizações reais na cos.tv…
          </h1>
          <div className="inline-block bg-red-500/20 border border-red-500 rounded-full px-6 py-2 mb-12">
            <span className="text-red-400 font-semibold">AINDA EM FASE DEMO</span>
          </div>
          
          <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-800/30">
            <div className="space-y-4">
              <Input 
                placeholder="Digite seu username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-700/50 border-purple-600/30 text-white placeholder-gray-400"
              />
              {/* Espaço reservado para HCaptcha */}
              <div className="h-20 bg-slate-700/30 border border-purple-600/30 rounded-md flex items-center justify-center">
                <span className="text-gray-500 text-sm">HCaptcha será inserido aqui</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3">
                Login Now
              </Button>
              <p className="text-sm text-gray-400">
                Não possui uma conta na cos.tv?{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                  Crie uma
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="priority" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our First Priority: Active Users
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-purple-800/30">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">1 inscrito por dia</h3>
                  <p className="text-gray-400">Crescimento orgânico garantido</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-purple-800/30">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">Visualizações Reais</h3>
                  <p className="text-gray-400">Engajamento autêntico</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-purple-800/30">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">100% gratuito</h3>
                  <p className="text-gray-400">Sem investimento necessário!</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Users className="w-32 h-32 text-white opacity-80" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Proof Section */}
      <section id="proof" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Check Recent Payments
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Followers Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-800/30 overflow-hidden">
              <div className="p-6 border-b border-purple-800/30">
                <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Seguidores Recentes
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="text-left p-4 text-gray-300">#</th>
                      <th className="text-left p-4 text-gray-300">Username</th>
                      <th className="text-left p-4 text-gray-300">Status</th>
                      <th className="text-left p-4 text-gray-300">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayments.map((payment, index) => (
                      <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                        <td className="p-4 text-gray-400">{payment.id}</td>
                        <td className="p-4 font-mono text-purple-400">{payment.username}</td>
                        <td className="p-4">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                            {payment.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400 text-sm">{payment.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Views Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-800/30 overflow-hidden">
              <div className="p-6 border-b border-purple-800/30">
                <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Visualizações Recentes
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="text-left p-4 text-gray-300">#</th>
                      <th className="text-left p-4 text-gray-300">Username</th>
                      <th className="text-left p-4 text-gray-300">Status</th>
                      <th className="text-left p-4 text-gray-300">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentViews.map((view, index) => (
                      <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                        <td className="p-4 text-gray-400">{view.id}</td>
                        <td className="p-4 font-mono text-blue-400">{view.username}</td>
                        <td className="p-4">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm">
                            {view.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-400 text-sm">{view.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Perguntas recentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-slate-800/50 rounded-xl border border-purple-800/30 px-6">
              <AccordionTrigger className="text-left hover:text-purple-400">
                Posso conseguir mais de um inscrito por dia na mesma conta da cos.tv?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Não. Nossa plataforma está configurada para fornecer apenas 1 inscrito por dia por conta para manter a qualidade e autenticidade do crescimento.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-slate-800/50 rounded-xl border border-purple-800/30 px-6">
              <AccordionTrigger className="text-left hover:text-purple-400">
                Posso conseguir mais de 5 visualizações por dia nos meus vídeos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Sim. Sua solicitação vai para uma lista por ordem de realização do pedido. O limite pode variar dependendo da demanda atual da plataforma.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-slate-800/50 rounded-xl border border-purple-800/30 px-6">
              <AccordionTrigger className="text-left hover:text-purple-400">
                Posso fazer login com a minha senha?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Não. Não precisamos da sua senha para realizar as ações. Trabalhamos apenas com seu username público para manter sua conta segura.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-800/30 bg-slate-900/80">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            marimail.shop – All Right Reserve
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
