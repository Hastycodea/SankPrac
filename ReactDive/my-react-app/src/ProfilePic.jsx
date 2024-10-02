import Pic from './assets/passport-photo.jpg'

function ProfilePic() {

    const handleClick = () => console.log('Clicked Image');

    return(
        <img onClick={handleClick} src={Pic} alt="" />
    );

}

export default ProfilePic