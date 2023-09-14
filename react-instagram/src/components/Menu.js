// imported svg as react component
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notifications} from "../images/notifications.svg";
import image from "../images/profile.jpg";
import ProfileIcon from "./ProfileIcon";
import "../styles/Menu.css";

function Menu(){
    return(
        <div className="menu">
            {/* Extracted the imported svgs as component */}
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explore className="icon"/>
            <Notifications className="icon"/>
        {/* Here we will be having a different component for profile pic  */}
        <ProfileIcon iconSize="small" image={image} />
        </div>
    )
}

export default Menu;