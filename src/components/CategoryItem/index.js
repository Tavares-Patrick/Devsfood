import React from "react";
import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, onClick, setActiveCategory }) => {
    const isActive = data.id === activeCategory;

    return (
        <Container 
            isActive={isActive} 
            onClick={onClick}
            data-tip={data.name}
            data-for="tip-top"
            >
            <CategoryImage src={data.image} alt={data.title} />
        </Container>
    );
};

export default CategoryItem;
