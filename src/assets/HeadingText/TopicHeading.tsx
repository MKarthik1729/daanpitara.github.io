interface HeadingProps {
    heading: string;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading,className }) => {
    return (
        <div className="flex w-full text-txt-black lg:max-w-3xl mx-auto">
            <h1 className={`text-3xl font-bold text-gray-900 lg:font-open-type mx-auto ${className? className : ''}`}>
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
