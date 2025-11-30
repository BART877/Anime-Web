import { useState } from 'react'
import './App.css'

function App() {
  const [animeList] = useState([
    {
      id: 1,
      title: "Jujutsu Kaisen",
      genre: ["Action", "Dark"],
      episodes: 24,
      rating: 8.8,
      status: "مكتملة",
      year: 2020,
      emoji: "👹"
    },
    {
      id: 2,
      title: "Attack on Titan",
      genre: ["Action", "Drama"],
      episodes: 139,
      rating: 9.1,
      status: "مكتملة",
      year: 2013,
      emoji: "🗡️"
    },
    {
      id: 3,
      title: "My Hero Academia",
      genre: ["Action", "School"],
      episodes: 139,
      rating: 8.4,
      status: "مستمرة",
      year: 2016,
      emoji: "🦸"
    },
    {
      id: 4,
      title: "Demon Slayer",
      genre: ["Action", "Adventure"],
      episodes: 55,
      rating: 8.7,
      status: "مستمرة",
      year: 2019,
      emoji: "⚔️"
    },
    {
      id: 5,
      title: "Tokyo Revengers",
      genre: ["Action", "Drama"],
      episodes: 50,
      rating: 8.3,
      status: "مكتملة",
      year: 2021,
      emoji: "🚘"
    },
    {
      id: 6,
      title: "One Piece",
      genre: ["Adventure", "Action"],
      episodes: 1000,
      rating: 8.9,
      status: "مستمرة",
      year: 1999,
      emoji: "🏴‍☠️"
    },
    {
      id: 7,
      title: "Naruto Shippuden",
      genre: ["Action", "Adventure"],
      episodes: 500,
      rating: 8.6,
      status: "مكتملة",
      year: 2007,
      emoji: "🥷"
    },
    {
      id: 8,
      title: "Steins;Gate",
      genre: ["Sci-Fi", "Thriller"],
      episodes: 24,
      rating: 9.1,
      status: "مكتملة",
      year: 2011,
      emoji: "⏰"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedAnime, setSelectedAnime] = useState(null)

  const allGenres = ["Action", "Adventure", "Drama", "Sci-Fi", "School", "Dark", "Thriller"]

  const filteredAnime = animeList.filter(anime => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre ? anime.genre.includes(selectedGenre) : true
    return matchesSearch && matchesGenre
  })

  const generateEpisodes = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      number: i + 1,
      title: `الحلقة ${i + 1}`
    }))
  }

  return (
    <div>
      <header>
        <h1>🎬 Anime Episodes Hub</h1>
        <p>اكتشف أفضل حلقات الانمي</p>
      </header>

      <div className="container">
        <div className="search-section">
          <input
            type="text"
            placeholder="ابحث عن انمي..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="genre-filter">
          <button
            className={`genre-btn ${selectedGenre === null ? 'active' : ''}`}
            onClick={() => setSelectedGenre(null)}
          >
            الكل
          </button>
          {allGenres.map(genre => (
            <button
              key={genre}
              className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {filteredAnime.length > 0 ? (
          <div className="anime-grid">
            {filteredAnime.map(anime => (
              <div
                key={anime.id}
                className="anime-card"
                onClick={() => setSelectedAnime(anime)}
              >
                <div className="anime-poster">
                  {anime.emoji}
                </div>
                <div className="anime-info">
                  <div className="anime-title">{anime.title}</div>
                  <div className="anime-meta">
                    <span>⭐ {anime.rating}</span>
                    <span>📺 {anime.episodes}</span>
                  </div>
                  <div className="anime-genre">
                    {anime.genre.map(g => (
                      <span key={g} className="genre-tag">{g}</span>
                    ))}
                  </div>
                  <div style={{fontSize: '0.85em', color: 'var(--color-text-secondary)'}}>
                    {anime.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            لم يتم العثور على نتائج
          </div>
        )}
      </div>

      {selectedAnime && (
        <div
          className="modal active"
          onClick={(e) => {
            if (e.target.className === 'modal active') {
              setSelectedAnime(null)
            }
          }}
        >
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedAnime(null)}>×</button>
            <div className="modal-header">
              <h2>{selectedAnime.title}</h2>
              <p style={{color: 'var(--color-text-secondary)'}}>
                إجمالي الحلقات: {selectedAnime.episodes}
              </p>
            </div>
            <div className="episodes-list">
              {generateEpisodes(Math.min(selectedAnime.episodes, 24)).map(ep => (
                <button
                  key={ep.number}
                  className="episode-btn"
                  onClick={() => alert(`تشغيل: ${selectedAnime.title} - ${ep.title}`)}
                >
                  {ep.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
