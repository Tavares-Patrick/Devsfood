import React, { useState } from 'react';
import {
  SectionTitle,
  AddressArea,
  AddressRow,
  EditIcon,
  Input,
  SaveButton
} from './styled';

export default function Address({ initialAddress, onChange }) {
  const [address, setAddress] = useState(initialAddress);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
    onChange(address);
  };

  return (
    <>
      <SectionTitle>Entrega</SectionTitle>
      <AddressArea>
        {!editing ? (
          <>
            <div>{address.place}</div>
            <AddressRow>
              <div>{address.street}</div>
              <EditIcon src="/assets/edit.png" onClick={() => setEditing(true)} />
            </AddressRow>
            <div>{address.cityState}</div>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="Ex minha casa"
              value={address.place}
              onChange={e => setAddress({ ...address, place: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Rua"
              value={address.street}
              onChange={e => setAddress({ ...address, street: e.target.value })}
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
