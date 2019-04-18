import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  Create
} from 'react-admin';

// -- snip --

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);
