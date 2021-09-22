import PostHeader from "./PostHeader"
import PostImage from './img/picofme.jpg'
import PostInteract from "./PostInteract"
import PostDescription from "./PostDescription"
import PostTime from "./PostTime"

const Post = ({ author, image, description, created }) => {
    return (
        <div>
            {/* Post Header */}
            <PostHeader author={author}/>

            {/* Post Image */}
            <img src={image} alt="post" className="postImage"/>
            
            {/* Interactive Elements */}
            <PostInteract />

            {/* Author and Description */}
            <PostDescription description={description} author={author}/>

            {/* Time Posted */}
            <PostTime/>
        </div>
    )
}

export default Post
