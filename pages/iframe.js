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
          src="https://2a26269777f5.ngrok.io/applicant?continuum_token=token">
      </embed>
    </div>
  )
}

export default iframe