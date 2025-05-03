import {Link} from "react-router";

const Index = () =>{
    return(
        <div>
            <h1>Hello world </h1>
            <Link to="/page2">
                Go to page 2
            </Link>
        </div>
    )
}

export default Index;