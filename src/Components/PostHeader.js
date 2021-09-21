import UserIMG from './img/Brenden Bass.PNG'
import Username from './Username'

const PostHeader = () => {
    return (
        <div className="postHeader">
                {/* Post Image */}
                <img src={UserIMG} alt="user" className="profile-img"/>
            
                {/* Author's username */}
                <Username/>
        </div>
    )
}

export default PostHeader
