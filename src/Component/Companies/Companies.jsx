import { useLoaderData } from "react-router";
import { useState, useRef, useEffect } from "react";
import CompanyCard from "./CompanyCard";

const Companies = () => {
    const data = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const containerRef = useRef(null);
    const [height, setHeight] = useState("auto");

    useEffect(() => {
        if (containerRef.current) {
            const fullHeight = containerRef.current.scrollHeight;
            setHeight(showAll ? `${fullHeight}px` : "1000px"); //adjusting the height
        }
    }, [showAll, data]);

    // const visibleCompanies = showAll ? data : data.slice(0, 8);

    const toggleShowAll = () => setShowAll(prev => !prev);

    return (
        <div>
            <div className='text-center mt-28'>
                <h1 className='text-4xl font-bold mb-8'>Companies You Can Work With</h1>
            </div>

            <div
                className="w-4/5 mx-auto overflow-hidden transition-all duration-700"
                style={{ maxHeight: height }}
                ref={containerRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        data.map(company => (
                            <CompanyCard key={company.id} companies={company} />
                        ))
                    }
                </div>
            </div>

            {
                data.length > 8 && (
                    <div className="text-center mt-8 mb-24">
                        <button className="btn" onClick={toggleShowAll}>
                            {showAll ? "Show Less" : "All Companies"}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Companies;
