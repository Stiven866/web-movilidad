import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOn';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';

export const categories = [
  {
    id: 'Virtual Audience',
    children: [
      { id: 'Mis Multas', icon: <DescriptionIcon />, active: true },
      { id: 'Puntos de información', icon: <LocationIcon /> },
      { id: 'Configuración', icon: <SettingsIcon /> },
    ],
  },

];
