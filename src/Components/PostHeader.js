import UserIMG from './img/Brenden Bass.PNG'

const PostHeader = () => {
    return (
        <div className="postHeader">
                {/* Post Image */}
                <img src={UserIMG} alt="user" className="profile-img"/>
            
                {/* Author's username */}
                <h2 className="userName">brendenbass</h2>
        </div>
    )
}

export default PostHeader
