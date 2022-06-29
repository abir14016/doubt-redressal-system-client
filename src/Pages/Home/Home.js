import PageTitle from '../Shared/PageTitle/PageTitle';
import Doubts from './Doubts';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <div className='container mt-5'>
                <h2>Home</h2>
                <Doubts></Doubts>
            </div>
        </div>
    );
};

export default Home;