import './SocialCard.css';
import Information from "./Information";



const SocialCard = ({userData}) =>{
    
    return(
        <>
            <div className="card__wraffer">
                {
                    userData.map((data,index) =>{
                    let {name,location,picture,email,phone,cell} = data
                    return(
                            <div className="card">
                                <div className="card__top">
                                    <div className="card__body">
                                        
                                        <div className="card__image">
                                            <img src={picture.large} alt={name.first}/>
                                        </div>
                                    </div>

                                    <h2 className="card__title">{name.first} {name.last}</h2>
                                    <h2 className="card__tag"></h2>
                                </div>

                                <div className="card__bottom">
                                        <Information adress={location} email={email} phone ={phone} cell ={cell} key ={index} />
                                </div>    
                            </div>                
                    )
                        
                    })
                }
            </div>
        </>
    )
}


export default SocialCard;