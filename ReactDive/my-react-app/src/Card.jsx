import passport from './assets/passport-photo.jpg';


function Card() {
    return(
        <div className="card">
            <img className="card-image" src={passport} alt="" />
            <h2 className='card-title'>Kennedy Musyoks</h2>
            <p className='card-text'>I write Java programs and SpringBoot Applications</p>
        </div>

    );
}

export default Card