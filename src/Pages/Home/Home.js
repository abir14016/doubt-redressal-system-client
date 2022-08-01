import PageTitle from '../Shared/PageTitle/PageTitle';
import Doubts from './Doubts';

const Home = () => {
    return (
        <div className='py-5' style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
            <PageTitle title="Home"></PageTitle>
            <div className='container'>
                <h2>Home</h2>
                <Doubts></Doubts>
            </div>
        </div>
    );
};

export default Home;