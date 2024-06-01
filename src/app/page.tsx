"use client";

import Sidebar from "@/components/Sidebar";
import s from "./page.module.sass";
import { useEffect, useState } from "react";
import Image from "next/image";

enum Genre {
  All,
  Comedy,
  Fantasy,
  Drama,
  History,
  Horror,
}

function fetchMovies() {
  const movies = [
    {
      id: 5613545,
      name: "Лучший джасс – русский",
      alternativeName: null,
      enName: null,
      type: "movie",
      typeNumber: 1,
      year: 2022,
      description:
        "Фильм рассказывает о зарождении джаза, о его появлении, развитии и становлении в России, о взаимопроникновении культур и влиянии русского авангарда начала 20-го века на американский джаз, о серьëзном и курьëзном в джазовом сообществе.",
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 52,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10768063/aaf31049-6437-4022-bb67-4fad82773cff/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10768063/aaf31049-6437-4022-bb67-4fad82773cff/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fa4e4a7c0f0f259032100026f4f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018fa4e4a7c0f0f259032100026f4f/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5461825,
      name: "Что видят животные",
      alternativeName: "What Animals See",
      enName: null,
      type: "movie",
      typeNumber: 1,
      year: 2018,
      description:
        "Как животные воспринимают окружающий мир? Как зрение животного связано с его местом в природе? Профессор Томас Кронин рассказывает, как устроены самые сложные и необычные глаза в царстве животных, и как у животных вообще появились органы зрения.",
      shortDescription:
        "Как особенности зрения помогают животным ориентироваться и охотиться? Мир глазами разных представителей фауны",
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 256,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 28,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10671298/92887c89-fd6c-409b-9624-80c2b609d152/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10671298/92887c89-fd6c-409b-9624-80c2b609d152/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018e7f135bc01a10661eadfacc4064/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a0000018e7f135bc01a10661eadfacc4064/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5461786,
      name: "Самые опасные существа",
      alternativeName: "Nature’s Most Dangerous",
      enName: null,
      type: "movie",
      typeNumber: 1,
      year: 2021,
      description:
        "Какое животное самое опасное для человека? Лев? Тигр? Да, это и вправду свирепые хищники, иногда нападающие на людей. Но гораздо больше людей погибло от нападения бегемотов или буйволов, а также домашних коров, свиней и собак.",
      shortDescription:
        "Огромные зубы, острые когти и запредельные скорости. Документальный проект о страхах и настоящей опасности",
      status: null,
      rating: {
        kp: 8.605,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 697,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 50,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10835644/f882bd82-949a-435e-b3f6-feef50c98d98/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e79e8e54b313ddadf025cd0dd27/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018e79e8e54b313ddadf025cd0dd27/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5515692,
      name: "Майор Гром: Экстра",
      alternativeName: null,
      type: "tv-series",
      typeNumber: 2,
      year: 2024,
      description:
        "Какой на самом деле Игорь Гром, почему сцена прогулки по Исаакиевской площади в «Трудном детстве» так важна и как выглядит обычный день Тихона Жизневского.",
      shortDescription:
        "Трудное детство, безумная работа, погони и круть кручения. Самое интересное о любимой франшизе и ее звездах",
      status: null,
      rating: {
        kp: 7.602,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 868,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 61,
      },
      movieLength: null,
      totalSeriesLength: 65,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/9784475/3ed78488-c5a2-443f-965e-30e5c1939cea/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/9784475/3ed78488-c5a2-443f-965e-30e5c1939cea/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018f5aa0b1b34bcfab8c46a5d8ff2f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a0000018f5aa0b1b34bcfab8c46a5d8ff2f/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      releaseYears: [[Object]],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5515400,
      name: "Production Lab",
      alternativeName: null,
      type: "tv-series",
      typeNumber: 2,
      year: 2023,
      description:
        "О том, как работает звук в кино и почему важно его качество. Кинопоиск и Плюс Студия собрали профессионалов индустрии, чтобы на примере «Кибердеревни» обсудить разницу в звучании проектов на различных устройствах и чек-лист любого проекта, который готовится к премьере.",
      shortDescription:
        "Как музыка и звук влияют на восприятие кино? Профессионалы индустрии объясняют на примере «Кибердеревни»",
      status: "completed",
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 2,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10809116/d4eb16a8-82c7-4f20-9a7d-c043dc7e56d9/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10809116/d4eb16a8-82c7-4f20-9a7d-c043dc7e56d9/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018f208df27e76fee4201c2b7c0921/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018f208df27e76fee4201c2b7c0921/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      releaseYears: [[Object]],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5511937,
      name: "Астрочел в Кино",
      alternativeName: "Astrodude The Movie",
      enName: null,
      type: "cartoon",
      typeNumber: 3,
      year: null,
      description:
        "Астрочел получает предупреждение от своего сына, путешествующего во времени: следующая миссия станет для него последней. Вместе они отправляются в путешествие, чтобы разгадать тайну его исчезновения.",
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 230,
      },
      movieLength: 90,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 12,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10893610/df0fc6b4-2cff-4786-853c-0d03fba90a4e/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10893610/df0fc6b4-2cff-4786-853c-0d03fba90a4e/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018f105b40bde1236eadc423df7f28/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1534341/2a0000018f105b40bde1236eadc423df7f28/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5516712,
      name: "Рыбы-монстры",
      alternativeName: "Trevor Gowdy's Monster Fish",
      type: "tv-series",
      typeNumber: 2,
      year: 2009,
      description:
        "Проект о рыбалке, в котором рассказывается о сложностях, тактике и стратегиях, позволяющих рыболову поймать самую большую рыбу на планете.",
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 6.7,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 10,
        imdb: 8,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/d4751b41-642f-4b89-bdc5-00ef0590d38f/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/d4751b41-642f-4b89-bdc5-00ef0590d38f/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018f3962f5e1759c99bfd055390723/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/12808873/2a0000018f3962f5e1759c99bfd055390723/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      releaseYears: [[Object]],
      top10: null,
      top250: null,
      isSeries: true,
      ticketsOnSale: false,
    },
    {
      id: 5506810,
      name: "Новые горизонты",
      alternativeName: null,
      enName: null,
      type: "cartoon",
      typeNumber: 3,
      year: 2022,
      description:
        "Васька и Булька не только осуществят свою мечту покататься на паруснике, но и лично познакомятся с Петром I и из первых рук узнают все о парусном флоте.",
      shortDescription: null,
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 3,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 8,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: null,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/4483445/2849a18a-2ca8-4c53-ab47-3209e7d8ebe5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/4483445/2849a18a-2ca8-4c53-ab47-3209e7d8ebe5/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000018eebadc0f755b3f404b29c9b9f98/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1652588/2a0000018eebadc0f755b3f404b29c9b9f98/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5461779,
      name: "Самые милые существа",
      alternativeName: "Nature’s Cutest",
      enName: null,
      type: "movie",
      typeNumber: 1,
      year: 2021,
      description:
        "Если бы вас попросили назвать самое милое животное на свете, вам наверняка было бы трудно определиться с ответом. Коала? Пингвин? Большеглазый олененок? Пушистый белек, детеныш тюленя? Белый медвежонок? Давайте попробуем выбрать вместе.",
      shortDescription:
        "Как детеныши разных видов животных выживают в дикой природе? Трогательный док о волчатах, медвежатах и птенцах",
      status: null,
      rating: {
        kp: 9.329,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: null,
      },
      votes: {
        kp: 551,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: 50,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 6,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10809116/c4cab1cd-a5b5-45b3-ad8e-dd12c1ba80a5/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10809116/c4cab1cd-a5b5-45b3-ad8e-dd12c1ba80a5/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018e79ddb9ec598b39624de4b8cfff/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a0000018e79ddb9ec598b39624de4b8cfff/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
    {
      id: 5517094,
      name: "Будущее",
      alternativeName: null,
      enName: null,
      type: "movie",
      typeNumber: 1,
      year: 2023,
      description:
        "Существует ли научно обоснованный метод прогнозирования далёкого будущего? И живём ли мы в мире, который был «рассчитан» предсказателями прошлого? В фильме приняли участие футурологи и прогнозисты, а также специалисты из самых разных областей деятельности. Философ, писатель-фантаст, учёный, инновационный предприниматель и специалист по градостроительству — каждый из героев поделился своим уникальным видением будущего.",
      shortDescription:
        "Можно ли предсказать судьбу с помощью науки? Док, в котором ученые размышляют о путях развития человечества",
      status: null,
      rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      votes: {
        kp: 12,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
        await: 0,
      },
      movieLength: null,
      totalSeriesLength: null,
      seriesLength: null,
      ratingMpaa: null,
      ageRating: 18,
      poster: {
        url: "https://image.openmoviedb.com/kinopoisk-images/10592371/6e3b7b28-64af-4b1d-94b5-ff2683b29d95/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-images/10592371/6e3b7b28-64af-4b1d-94b5-ff2683b29d95/x1000",
      },
      backdrop: {
        url: "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018f3e05aa62b9214087d76c72b244/orig",
        previewUrl:
          "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a0000018f3e05aa62b9214087d76c72b244/x1000",
      },
      genres: [{ name: "Sci-fi" }],
      countries: [{ name: "USA" }],
      top10: null,
      top250: null,
      isSeries: false,
      ticketsOnSale: false,
    },
  ];

  return movies;
}

export default function Home() {
  const [genre, setGenre] = useState(Genre.All);
  const movies = fetchMovies();
  console.log(movies);

  return (
    <div className={s.content}>
      <div className={s.top}>
        <Image alt="logo" src={"/logo.png"} width={64} height={64} />
        <h1>Moovy</h1>
      </div>
      <div className={s.genres}>
        <button
          className={`${s.genre} ${genre === Genre.All ? s.active : ""}`}
          onClick={() => setGenre(Genre.All)}
        >
          🍿 All
        </button>
        <button
          className={`${s.genre} ${genre === Genre.Comedy ? s.active : ""}`}
          onClick={() => setGenre(Genre.Comedy)}
        >
          😁 Comedy
        </button>
        <button
          className={`${s.genre} ${genre === Genre.Fantasy ? s.active : ""}`}
          onClick={() => setGenre(Genre.Fantasy)}
        >
          🦄 Fantasy
        </button>
        <button
          className={`${s.genre} ${genre === Genre.Drama ? s.active : ""}`}
          onClick={() => setGenre(Genre.Drama)}
        >
          😢 Drama
        </button>
        <button
          className={`${s.genre} ${genre === Genre.History ? s.active : ""}`}
          onClick={() => setGenre(Genre.History)}
        >
          📗 History
        </button>
        <button
          className={`${s.genre} ${genre === Genre.Horror ? s.active : ""}`}
          onClick={() => setGenre(Genre.Horror)}
        >
          😨 Horror
        </button>
      </div>
      <div className={s.main}>
        <Image
          className={s.image}
          alt="backdrop"
          width={120}
          height={60}
          src={movies[1].backdrop.url}
        />
        <div className={s.info}>
          <h1 className={s.title}>{movies[0].name}</h1>
          <p className={s.description}>{movies[0].description}</p>
          <div className={s.details}>
            <p className={s.year}>{movies[0].year}</p>
            <p className={s.genre}>{movies[0].genres[0].name}</p>
            <p className={s.duration}>{movies[0].movieLength}</p>
          </div>
        </div>
      </div>
      <p className={s.specialTitle}>Special for you</p>
      <div className={s.special}>
        <div className={s.movies}>
          {movies.map((movie) => (
            <div className={s.movie} key={movie.id}>
              <Image className={s.poster} alt="poster" src={movie.poster.url} width={10} height={10}/>
              <div className={s.info}>
                <p className={s.title}>{movie.name}</p>
                <p className={s.year}>{movie.year}</p>
                <p className={s.rating}>{movie.rating.kp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
