import "../styles/Menu.css";
// imported svg as react component
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notifications} from "../images/notifications.svg";

function Menu(){
    return(
        <div className="menu">
            {/* Extracted the imported svgs as component */}
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explore className="icon"/>
            <Notifications className="icon"/>
        {/* Here we will be having a different component for profile pic  */}
        </div>
    )
}

export default Menu;