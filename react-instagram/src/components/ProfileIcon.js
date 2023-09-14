import "../styles/ProfileIcon.css";

function ProfileIcon(props){
    // declaring all the props
    const { iconSize, storyBorder, image} = props;

    // function to define the range of number
    function getRandomInt(min, max){
        min= Math.floor(min);
        max= Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // using the above function to generate the random number b/w 1 to 70
    let randomId = getRandomInt(1,70);

    // getting a random image if image is not passed as property 
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`


    return(
        <div className={storyBorder ? "storyBorder" : ""}>
            <img src={profileImage} alt="profile" className={`profileIcon ${iconSize}`} />
        </div>
    )
}

export default ProfileIcon;