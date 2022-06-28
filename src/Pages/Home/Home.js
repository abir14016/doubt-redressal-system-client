import PageTitle from '../Shared/PageTitle/PageTitle';
import Doubts from './Doubts';

const Home = () => {
    // const [load, setLoad] = useState(false);
    // window.onload = function pageLoad() {
    //     if (load) {
    //         window.location.reload(true);
    //         setLoad(false);
    //     }
    // };
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