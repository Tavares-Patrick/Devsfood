import React, { useState } from 'react';
import {
  SectionTitle,
  AddressArea,
  AddressRow,
  EditIcon,
  Input,
  SaveButton,
  WarningMessage
} from './styled';

export default function Address({ initialAddress, onChange }) {
  const [address, setAddress] = useState({
    cep: '',
    street: initialAddress.street || '',
    number: '',
    cityState: initialAddress.cityState || '',
    complement: initialAddress.place || ''
  });
  const [editing, setEditing] = useState(false);

  const handleCEPBlur = async () => {
    const cep = address.cep.replace(/\D/g, '');
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setAddress(prev => ({
            ...prev,
            street: `${data.logradouro}`,
            cityState: `${data.localidade}, ${data.uf}`
          }));
        } else {
          alert('CEP não encontrado.');
        }
      } catch (err) {
        console.error(err);
        alert('Erro ao buscar CEP.');
      }
    } else {
      alert('CEP inválido');
    }
  };

  const handleSave = () => {
    setEditing(false);
    onChange({
      cep: address.cep,
      street: `${address.street}, ${address.number}`,
      place: address.complement,
      cityState: address.cityState
    });
  };

  return (
    <>
      <SectionTitle>Entrega</SectionTitle>
      <AddressArea>
        {!editing ? (
  <>
    <AddressRow>
      <div>
        {address.cep ? (
          <>
            {address.street} {address.number}
          </>
        ) : (
          <WarningMessage>Informe o endereço</WarningMessage>
        )}
      </div>
      <EditIcon src="/assets/edit.png" onClick={() => setEditing(true)} />
    </AddressRow>
    {address.cep && (
      <>
        <div>{address.complement}</div>
        <div>{address.cityState}</div>
        <div>CEP: {address.cep}</div>
      </>
    )}
  </>
) : (


          <>
            <Input
              type="text"
              placeholder="CEP"
              value={address.cep}
              onChange={e => setAddress({ ...address, cep: e.target.value })}
              onBlur={handleCEPBlur}
            />
            <Input
              type="text"
              placeholder="Rua"
              value={address.street}
              onChange={e => setAddress({ ...address, street: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Número"
              value={address.number}
              onChange={e => setAddress({ ...address, number: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Complemento"
              value={address.complement}
              onChange={e => setAddress({ ...address, complement: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Cidade, Estado"
              value={address.cityState}
              onChange={e => setAddress({ ...address, cityState: e.target.value })}
            />
            <SaveButton onClick={handleSave}>Salvar</SaveButton>
          </>
        )}
      </AddressArea>
    </>
  );
}
