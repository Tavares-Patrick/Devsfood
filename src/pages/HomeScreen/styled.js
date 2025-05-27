import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryArea = styled.div`
    color: #FFF;
    margin-top: 20px;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const ProductArea = styled.div`
    margin: 20px 0;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div`
    background-color: ${props=>props.active==props.current ? '#CCC' : '#FFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;
`;