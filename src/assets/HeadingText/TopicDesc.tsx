import React from 'react';

interface HeadingProps {
    heading: string;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
    return (
        <div className="w-full font-gray-400 lg:max-w-4xl mx-auto">
            <h1 className={`mx-auto text-xl font-bold font-family-italic ${className ? className : ''}`}
            
            style={{color:"gray"}}
            >
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
