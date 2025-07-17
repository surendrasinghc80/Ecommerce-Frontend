import React, { useState } from "react";
import Image from "next/image";

const FallbackImage = ({
    src,
    alt,
    className,
    fill,
    width,
    height,
}: {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc || "/placeholder.svg"}
            alt={alt}
            fill={fill}
            width={width}
            height={height}
            className={className}
            onError={() => setImgSrc("/placeholder.svg")}
        />
    );
};

export default FallbackImage;
