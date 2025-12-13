import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { axiosCountries } from '../api/countries'

export default function CountriesList() {
  // useQuery - главный хук TanStack Query для загрузки данных, кеширования и автообновления
  const { data, isLoading, isError, error, isFetching } = useQuery({
    // Уникальный ключ запроса. TanStack Query создаёт кеш, привязанный к этому ключу.
    queryKey: ['countries'],
    // Функция, которая реально загружает данные.
    queryFn: axiosCountries,
    // Данные считаются «свежими» 5 минут.
    // За это время запрос не будет автоматически повторяться при заходе на страницу, 
    // пока данные есть в кеше.
    staleTime: 1000 * 60 * 5,
    // Если пользователь вернулся во вкладку — запрос обновится в фоне
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if (data) console.log('Countries loaded:', Object.keys(data).length)
  }, [data])

  if (isLoading) return <p>Загрузка данных...</p>
  if (isError) return <p>Ошибка: {(error as Error).message}</p>

  return (
    <section className="countries">
      {isFetching && <p className="fetching">Обновление...</p>}

      <ul>
        {Object.entries(data!).map(([country, capital]) => (
          <li key={country}>
            <strong>{country}</strong>: <span>{capital}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
