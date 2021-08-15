import { useHistory } from "react-router-dom";

export default function NotFoundView() {
    const history = useHistory();

    return (
        <div className="container">
            <h1>404 Page not found</h1>
            {history.push('/')};
        </div>
    )
}