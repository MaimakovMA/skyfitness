export default function Video() {
  const opts = {
    height: '639px',
    width: '100%',
  }
  return (
      <iframe
        width="100%"
        height="720px"
        src="https://www.youtube.com/embed/v-xTLFDhoD0?si=icUKIeOYZzTBTIbW" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
  )
}
