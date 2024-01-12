import "./Spotify.css"
const SpotifyPomodoro = () => {
  return (
    <div className="SpotifyC">
      <iframe
      className="spotify"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator"
        height="152px"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPomodoro;
