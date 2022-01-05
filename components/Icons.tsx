import { HiOutlineBell, HiOutlineHeart } from 'react-icons/hi';
import { useState } from 'react';

const Icons = () => {
    const [isLike, setisLike] = useState(false);
    const [isBell, setisBell] = useState(false);

    return (
        <div className="flex-col">
            <HiOutlineHeart
                onClick={() => setisLike(!isLike)}
                className={`${
                    isLike ? 'text-blue fill-current' : ''
                } absolute top-4 right-4 h-6 w-6 cursor-pointer`}
            />
            <HiOutlineBell
                onClick={() => setisBell(!isBell)}
                className={`${
                    isBell ? 'text-yblue fill-current' : ''
                } absolute top-12 right-4 h-6 w-6 text-black cursor-pointer`}
            />
        </div>
    );
};

export default Icons;
