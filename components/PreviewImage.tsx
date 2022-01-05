import React from 'react'

const PreviewImage = ({image} : any) => {
    return (
        <div className = "group cursor-pointer mx-2 mb-2">
            <div className = "p-2 border border-transparent hover:border-blue active:border-blue transition-all ">
                <img src="/images/meuble1.png" alt=" {image}" className = "w-20 h-20 " />
            </div>
        </div>
    )
}

export default PreviewImage
