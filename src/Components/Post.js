import PostHeader from "./PostHeader"
import PostImage from './img/picofme.jpg'
import PostInteract from "./PostInteract"
import PostDescription from "./PostDescription"

const Post = () => {
    return (
        <div>
            {/* Post Header */}
            <PostHeader />

            {/* Post Image */}
            <img src={PostImage} alt="post" className="postImage"/>
            
            {/* Interactive Elements */}
            <PostInteract />

            {/* Author and Description */}
            <PostDescription />

            {/* Time Posted */}
        </div>
    )
}

export default Post
