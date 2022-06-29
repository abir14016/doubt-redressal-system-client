import PageTitle from '../Shared/PageTitle/PageTitle';
import Doubts from './Doubts';

const Home = () => {
    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
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