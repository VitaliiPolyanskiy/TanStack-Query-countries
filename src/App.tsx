import CountriesList from './components/CountriesList';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Список стран и столиц</h1>
        <p>Данные загружаются через TanStack Query (countries.json)</p>
      </header>
      <main>
        <CountriesList />
      </main>
    </div>
  );
}
