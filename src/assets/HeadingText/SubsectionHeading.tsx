import React from 'react';

interface HeadingProps {
    heading: string;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading,className }) => {
    return (
        <div className="content-center items-center w-full text-center font-gray-400 lg:max-w-4xl mx-auto">
            <h1 className={`mx-auto text-center text-xl font-bold font-family-italic font-gray-400 ${className ? className : ''}`}
            
            style={{color:"gray"}}
            >
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
