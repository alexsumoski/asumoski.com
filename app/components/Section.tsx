import React from "react";

interface SectionProps {
    title: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="py-10">
            <h2 className="text-3xl mb-4">{title}</h2>
            {children}
        </section>
    );
}

export default Section;