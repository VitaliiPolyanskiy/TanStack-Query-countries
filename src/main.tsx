import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

const queryClient = new QueryClient();

// QueryClient — это центральное хранилище и менеджер серверного состояния.
// Любой компонент внутри <App /> может вызвать useQuery(...) и работать с одним общим кешем.
// Без провайдера useQuery просто не будет знать, где хранить данные.
// Обычно провайдер ставят в Main по следующим соображениям:
// - нужен один QueryClient на всё приложение
// - кеш должен жить дольше, чем отдельные компоненты
// - данные должны переиспользоваться между страницами
// Если создать QueryClient внутри компонента — кеш будет теряться при каждом ререндере
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
