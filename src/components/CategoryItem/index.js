import React from "react";
import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, onClick, setActiveCategory }) => {
    const isActive = data.id === activeCategory;

    return (
        <Container 
            isActive={isActive} 
            onClick={onClick}
            
            >
            <CategoryImage src={data.image} alt={data.title} />
        </Container>
    );
};

export default CategoryItem;
