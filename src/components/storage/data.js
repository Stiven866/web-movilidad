import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

export const categories = [
  {
    id: 'Comparecencia Virtual',
    children: [
      { id: 'Mis Multas', icon: <DescriptionIcon />},
      { id: 'Locaciones Disponibles', icon: <LocationIcon /> },
      { id: 'Configuración', icon: <SettingsIcon /> },
    ],
  },
]

export const multas = [
  {
    id: 'multa_1',
    title: 'Multa por mal estacionamiento',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, '
  },
  {
    id: 'multa_2',
    title: 'Multa por foto',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
  },
  {
    id: 'multa_3',
    title: 'Multa por velocidad',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
  },
  {
    id: 'multa_4',
    title: 'Multa semaforo en rojo',
    description: ''
  },


];
