import React, { useState } from 'react';

import categories from '../constants/categories';

const CategoryGroup = () => {
    const [categoryList, setCategoryList] = useState(categories);

    const [selectedCategory, setSelectedCategory] = useState(0);

    const [selectedSubCategory, setSelectedSubCategory] = useState(0);

    const selectCategory = (index: number) => {
        setSelectedCategory(index);
        if (!categoryList[selectedCategory].subCategoryList) {
            setSelectedSubCategory(0);
        }
    };

    return (
        <div className="px-8 md:px-4 pt-1 mb-2 transition-all duration-150 ease-linear">
            {/* Manière de mettre css directement dens nextjs */}
            <style jsx>{`
                .x-scrollable::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div className="x-scrollable w-full flex overflow-x-auto mb-2">
                <div className="flex flex-nowrap w-max">
                    {categoryList.map((category, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-md cursor-pointer w-32 h-10 border border-seashell ${
                                selectedCategory === index
                                    ? 'bg-black text-white hover:bg-black'
                                    : 'bg-snowdrift hover:bg-seashell'
                            } mr-2`}
                            onClick={() => selectCategory(index)}
                        >
                            <span className="text-sm text-center font-medium">
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={
                    'x-scrollable flex items-center justify-center overflow-x-auto'
                }
            >
                <div className="flex">
                    {/* <div className="flex items-center justify-center rounded border shadow-sm border-quillgrey cursor-pointer text-sm text-blue font-medium hover:border-blue h-9 w-28 mr-2">
                        En bois
                    </div> */}
                    {categoryList[selectedCategory].subCategoryList?.map(
                        (subCategory, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-center rounded border shadow-sm cursor-pointer text-sm font-medium hover:border-blue h-9 w-28 mr-3 ${
                                    selectedSubCategory === index
                                        ? 'text-blue border-blue'
                                        : 'border-quillgrey'
                                }`}
                                onClick={() => {
                                    setSelectedSubCategory(index);
                                }}
                            >
                                <span>{subCategory.name}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryGroup;
