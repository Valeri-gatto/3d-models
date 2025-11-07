'use client'

import { useState } from "react";
import { LikeProps } from "@/app/types";
import { setLikedInDB } from "@/app/lib/liked";
import LikeIcon from "@/public/like.svg"

export default function Like({ count, user_id, model_id, liked }: LikeProps) {
    const [isLiked, setIsLiked] = useState(liked);
    const [countLikes, setCountLikes] = useState(count);
    const userId = Number(user_id);

    function handleLiked(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        setIsLiked(!isLiked);
        setCountLikes(countLikes + (isLiked ? -1 : 1));
        setLikedInDB(userId, model_id, !isLiked).then(res => setCountLikes(res));
    }

    return (
        <div className="flex items-center gap-1 mt-2 text-gray-400 cursor-pointer"
            aria-label='count of likes'
            onClick={handleLiked}
        >
            <LikeIcon className={isLiked ? 'fill-red-500 w-5 md:w-7' : 'fill-white hover:fill-red-400 w-5 md:w-7'} aria-hidden="true" />
            <span className="font-light text-gray-400"
                aria-label={`${countLikes} likes`}
            >{countLikes}</span>
        </div>
    )
}