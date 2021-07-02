// import withAuth from "../withAuth";
import protectPage from "../protectPage";
import { useAuth } from '../auth';
import firebaseClient from '../firebaseClient'

const Dashboard = () => {
    firebaseClient();
    const {user} = useAuth();
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>
            {`User email: ${user ? user.email : '...'} , You can access this protected route!!`}
            </h2>
        </div>
    )
}

export default protectPage(Dashboard);