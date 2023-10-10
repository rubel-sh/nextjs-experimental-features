import { useState } from "react";

const OptimisticUpdateLikeCounter = () => {
    const [likes, setLikes] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleLikeClick = async () => {
        // Optimistic UI update
    }

    return (
        <div>
            <p>Likes: {likes}</p>
            <button onClick={handleLikeClick} disabled={isLoading}>{isLoading ? "Updating...":"Like"}</button>
        </div>
    );
};

export default OptimisticUpdateLikeCounter;