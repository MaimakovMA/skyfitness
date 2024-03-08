import YouTube from 'react-youtube'

export default function Video() {
  const opts = {
    height: '639px',
    width: '100%',
  }
  return (
    <>
      <YouTube videoId="v-xTLFDhoD0" opts={opts}></YouTube>
    </>
  )
}
