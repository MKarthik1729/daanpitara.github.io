interface HeadingProps {
    heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
    return (
        <div className="flex w-full text-txt-black lg:max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 lg:font-open-type mx-auto">
                {heading}
            </h1>
        </div>
    );
};

export default Heading;
