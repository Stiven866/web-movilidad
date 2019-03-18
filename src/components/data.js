import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOn';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';

export const categories = [
  {
    id: 'Virtual Audience',
    children: [
      { id: 'Mis Multas', icon: <DescriptionIcon /> },
      { id: 'Puntos de información', icon: <LocationIcon /> },
      { id: 'Configuración', icon: <SettingsIcon /> },
    ],
  },
]

export const multas = [
  {
    id: 'multa_1',
    title: 'Multa por mal estacionamiento',
    description: 'Descripción'
  },
  {
    id: 'multa_2',
    title: 'Multa por foto',
    description: 'Descripción'
  },
  {
    id: 'multa_3',
    title: 'Multa por foto',
    description: 'Descripción'
  },
  {
    id: 'multa_4',
    title: 'Multa por foto',
    description: 'Descripción'
  },
  {
    id: 'multa_5',
    title: 'Multa por foto',
    description: 'Descripción'
  },
  {
    id: 'multa_6',
    title: 'Multa por foto',
    description: 'Descripción'
  },
  {
    id: 'multa_7',
    title: 'Multa por foto',
    description: 'Descripción'
  },
];
