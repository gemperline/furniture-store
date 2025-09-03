import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import { DepartmentTile } from '../DepartmentTile';
import { useTranslation } from 'react-i18next';
import { MOCK_DEPARTMENTS } from 'app/mockData/MOCK_DEPARTMENTS';

const useStyles = makeStyles()((theme) => ({
  sectionHeader: {
    textDecoration: 'underline',
    textWrap: 'nowrap',
    padding: '12px 12px 0px',
    marginBottom: '0px',
  },
  tilesWrapper: {
    padding: '6px',
  },
}));

export const DepartmentsSection = ({
  title,
  ...props
}: {
  [key: string]: any;
  title?: string;
}) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={classes.sectionHeader}>{`${t('Shop By Department')}`}</h1>
      </Grid>
      <Grid container className={classes.tilesWrapper}>
        {MOCK_DEPARTMENTS.map((department) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={department.name}>
            <DepartmentTile
              name={department.name}
              description={department.description}
              image={department.image}
              altText={department.name}
              path={department.path}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
