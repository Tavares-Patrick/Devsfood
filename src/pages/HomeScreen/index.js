import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList, ProductArea, ProductList } from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';


export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    const getProducts = async () => {
        const prods = await api.getProducts();
        if(prods.error === '') {
            setProducts(prods.result.data);
        }
    }

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories(); // ⬅️ Aqui faltava o await
            if (cat && cat.error === '') {
                setCategories(cat.result);
            } else {
                console.error('Erro ao buscar categorias:', cat?.error);
            }
            ReactTooltip.rebuild();
        };

        getCategories();
    }, []);

    useEffect(()=>{
        getProducts();
    },[activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{ id: 0, name: 'Todas as categorias', image: '/assets/food-and-restaurant.png' }}
                            activeCategory={activeCategory}
                            onClick={() => setActiveCategory(0)}
                        />
                        {categories.map((item) => (
                            <CategoryItem
                                key={item.id}
                                data={item}
                                activeCategory={activeCategory}
                                onClick={() => setActiveCategory(item.id)}
                            />
                        ))}
                    </CategoryList>

                </CategoryArea>
            }

            {products.length > 0 && 
                <ProductArea>
                    <ProductList>
                        {products.map((item, index)=>(
                            <ProductItem
                            key={index}
                            data={item}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }

        </Container>
    );
}