import {Link} from "react-router";

const Page = ()=>{
    return(
        <div>
            <h1>
                Hello from page 2
            </h1>
            <Link to="/">
                Back home.
            </Link>
        </div>
    )
}

export default Page;