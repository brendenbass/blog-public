import UserIMG from './img/Brenden Bass.PNG'

const PostHeader = () => {
    return (
        <div className="postHeader">
            <img src={UserIMG} alt="user image" className="profile-img"/>
            {/* author name */}
        </div>
    )
}

export default PostHeader
