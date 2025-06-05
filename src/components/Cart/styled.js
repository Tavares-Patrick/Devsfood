import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #136713;
    border-radius: 10px 10px 0px 0px ;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin: 0px 10px;
`;

export const CartText = styled.div`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`
    display: ${props=>props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const ProductsArea = styled.div`

`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;

export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`;

export const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin: 15px 10px 5px;
    color: #FFF;
`;

export const AddressArea = styled.div`
    margin: 0 10px 15px;
    color: #FFF;
`;

export const AddressRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EditIcon = styled.img`
    width: 18px;
    height: auto;
    cursor: pointer;
`;

export const DiscountArea = styled.div`
    display: flex;
    margin: 0 10px 15px;
`;

export const DiscountInput = styled.input`
    flex: 1;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 4px;
    border: none;
`;

export const SummaryArea = styled.div`
    margin: 0 10px 20px;
    color: #FFF;
`;

export const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`;

export const SummaryLabel = styled.div`
    font-size: 13px;
`;

export const SummaryValue = styled.div`
    font-size: 13px;
`;



