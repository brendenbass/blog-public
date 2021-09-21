import PostHeader from "./PostHeader"
import PostImage from './img/picofme.jpg'
import PostInteract from "./PostInteract"
import PostDescription from "./PostDescription"
import PostTime from "./PostTime"

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
            <PostTime/>
        </div>
    )
}

export default Post
