import Head from 'next/head';
import Navegacion from '../components/Navegacion'

const MasterPage = (props) => (
    <div>
      <Head>
          <title>Raccoon Dev Studio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel='stylesheet' href='https://bootswatch.com/4/minty/bootstrap.min.css' />
      </Head>
      <Navegacion />
      <div className='mt-4'>
          {props.children}
      </div>
    </div>
)

export default MasterPage;