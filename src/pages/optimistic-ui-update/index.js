import Container from "@/components/Container";
import { useState } from "react";

const OptimisticUpdateLikeCounter = () => {
    const [likes, setLikes] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const mockApiCallWithSuccess = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    totalLikes: likes + 1,
                });
            }, 150);
        });
    };

    const mockApiCallWithoutSuccess = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({
                    success: false,
                    totalLikes: likes + 1,
                });
            }, 150);
        });
    };

    const handleLikeClick = async () => {
        // Optimistic UI update
        setLikes((prevLikes) => prevLikes + 1);
        setIsLoading(true);

        // DB Call and Error Handling
        try {
            const response = await mockApiCallWithSuccess();

            if (response.success) {
                setLikes(response.totalLikes);
            } else {
                console.log("failed to fetch update likes");
                setLikes(likes);
            }
        } catch (err) {
            console.log("error update likes", err);
            setLikes(likes);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <p>Likes: {likes}</p>
            <button onClick={handleLikeClick} disabled={isLoading}>
                {isLoading ? "Updating..." : "Like"}
            </button>
        </Container>
    );
};

export default OptimisticUpdateLikeCounter;
