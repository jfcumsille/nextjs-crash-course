import Head from "next/head"

const iframe = () => {
  return (
    <div>
      <Head>
        <title>Iframe</title>
      </Head>
      <iframe src="https://staging.keyclouding.cl/applicant?continuum_token=untoken2" height="1024" width="1800"></iframe>
    </div>
  )
}

export default iframe