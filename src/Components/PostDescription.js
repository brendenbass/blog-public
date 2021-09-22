import Username from "./Username"

const PostDescription = ({ description, author }) => {
    return (
        <div className="postDescriptionDiv">
            <div className="postDescription">
                <p><Username author={author}/> {description}</p>
            </div>
        </div>
    )
}

export default PostDescription
