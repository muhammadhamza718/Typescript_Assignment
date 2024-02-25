type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    return {
      artist,
      title,
      tracks, 
    };
  }
  
  const album1 = make_album("The Beatles", "Abbey Road", 20);
  const album2 = make_album("Pink Floyd", "Dark Side of the Moon", 10);
  const album3 = make_album("Nirvana", "Nevermind", 14);
  
  console.log("Album 1:", album1);
  console.log("Album 2:", album2);
  console.log("Album 3:", album3);
  