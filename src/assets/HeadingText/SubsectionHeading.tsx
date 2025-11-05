import React from 'react';

interface HeadingProps {
    heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <div className="content-center items-center w-full text-center font-gray-400">
            <h1 className="mx-auto text-center text-xl font-bold font-family-italic font-gray-400"
            
            style={{color:"gray"}}
            >
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
