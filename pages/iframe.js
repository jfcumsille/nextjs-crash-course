import Head from "next/head"

const iframe = () => {
  return (
    <div>
      <Head>
        <title>Iframe</title>
      </Head>
      <embed id="testContinuum"
          title="Test Continuum"
          width="1024"
          height="720"
          src="https://681aea312ca8.ngrok.io/applicant?continuum_token=token">
      </embed>
    </div>
  )
}

export default iframe