import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Address from "../Address"
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartBody,
    CartText,
    ProductsArea,
    ProductPhoto,
    ProductItem,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText,
    SectionTitle,
    DiscountArea,
    DiscountInput,
    SummaryArea,
    SummaryRow,
    SummaryLabel,
    SummaryValue
} from './styled';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart?.products || []);

    const [show, setShow] = useState(false);
    const [address, setAddress] = useState({
        place: "Ex minha casa",
        street: "Rua Exemplo, 123",
        cityState: "Cidade, Estado"
    });
    const [discountCode, setDiscountCode] = useState("");
    const [discountValue, setDiscountValue] = useState(0);
    const deliveryFee = 7.99;

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: { key, type }
        })
    }

    const productsTotal = products.reduce((sum, item) => sum + item.price * item.qt, 0);
    const total = productsTotal + deliveryFee - discountValue;

    const applyDiscount = () => {
        if (discountCode.trim().toUpperCase() === 'PROMO10') {
            setDiscountValue(10);
        } else {
            setDiscountValue(0);
            alert("Cupom inválido");
        }
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products?.length || 0})</CartText>
                {show && <CartIcon src="/assets/down.png" />}
            </CartHeader>

            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={item.id || index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon
                                    src="/assets/minus.png"
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>

                {/* Aqui substitui o bloco de endereço pelo componente DeliveryAddress */}
                <Address
                    initialAddress={address}
                    onChange={newAddress => setAddress(newAddress)}
                />

                <SectionTitle>Cupom de desconto</SectionTitle>
                <DiscountArea>
                    <DiscountInput
                        type="text"
                        placeholder="Digite o código"
                        value={discountCode}
                        onChange={e => setDiscountCode(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') applyDiscount();
                        }}
                    />
                </DiscountArea>

                <SummaryArea>
                    <SummaryRow>
                        <SummaryLabel>Desconto</SummaryLabel>
                        <SummaryValue>R$ {discountValue.toFixed(2)}</SummaryValue>
                    </SummaryRow>
                    <SummaryRow>
                        <SummaryLabel>Taxa de entrega</SummaryLabel>
                        <SummaryValue>R$ {deliveryFee.toFixed(2)}</SummaryValue>
                    </SummaryRow>
                    <SummaryRow>
                        <SummaryLabel><strong>Total</strong></SummaryLabel>
                        <SummaryValue><strong>R$ {total.toFixed(2)}</strong></SummaryValue>
                    </SummaryRow>
                </SummaryArea>
            </CartBody>
        </CartArea>
    );
}
