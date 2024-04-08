export  function Video({url}) {
  const opts = {
    height: '639px',
    width: '100%',
  }
  return (
      <iframe
        width="100%"
        height="720px"
        src={url} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
  )
}
