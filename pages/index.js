import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Feelings from '../components/Feelings'

const Index = (props) => (
    <MasterPage>
        <div className='col-12'>
            <h2 className='text-center'>¿En la escala del Raccoon cómo te siente hoy?</h2>
        </div>
        <div className='container d-flex justify-content-center'>
            <div className='col-md-6'>
                <Feelings 
                    feelings={props.feelingsRaccoon}
                />
            </div>
        </div>
    </MasterPage>
)

Index.getInitialProps = async () => {
    const feelings = await fetch('http://54.196.43.91:3000/raccoon/feelings');
    const resFeelings = await feelings.json();

    return {
        feelingsRaccoon: resFeelings.feelings
    }
}

export default Index;