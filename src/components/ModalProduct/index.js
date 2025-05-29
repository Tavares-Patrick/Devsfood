import React from "react";
import { 
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea, 
    ProductName,
    ProductIngredients,
    ProductButton
} from './styled';

export default ({data}) => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        ,,,
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton>Cancelar</ProductButton>
                <ProductButton>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}