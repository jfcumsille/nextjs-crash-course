import Head from "next/head"
import { useState } from 'react'

const iframe = () => {
  const [token, setToken] = useState('3a0ff591-7cc9-4c47-b923-62cca66e1b4b')
  const [load, setLoad] = useState(false)

  return (
    <div>
      <Head>
        <title>Iframe</title>
      </Head>
      <div>
        <input type="text" name="token" value={token} onChange={e => setToken(e.target.value)}></input>
        <input type="submit" name="submit" onClick={() => setLoad(true)}></input>
      </div>
      { load && <div>
        <embed id="testContinuum"
            title="Test Continuum"
            width="1024"
            height="720"
            src={"https://staging.keyclouding.cl/applicant?continuum_token=" + token}>
        </embed>
      </div>
      }
    </div>
  )
}

export default iframe