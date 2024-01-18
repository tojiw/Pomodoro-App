import "./Spotify.css";
const SpotifyPomodoro = () => {
  return (
    <div className="SpotifyC">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator&theme=0"
        
        className="spotify"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPomodoro;
