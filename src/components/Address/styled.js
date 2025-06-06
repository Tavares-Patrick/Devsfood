import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 10px;
  color: #fff;
`;

export const AddressArea = styled.div`
  background: #136713;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
`;

export const AddressRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  font-size: 14px;
`;

export const SaveButton = styled.button`
  padding: 10px 15px;
  background-color: #0d4d0d;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a3a0a;
  }
`;

export const WarningMessage = styled.span`
    color: #FFF;
    font-size: 14px;
`;
