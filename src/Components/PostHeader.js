import UserIMG from './img/Brenden Bass.PNG'
import Username from './Username'

const PostHeader = ({ author }) => {
    return (
        <div className="postHeader">
                {/* Post Image */}
                <img src={UserIMG} alt="user" className="profile-img"/>
            
                {/* Author's username */}
                <Username author={author}/>
        </div>
    )
}

export default PostHeader
