import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { FetchData } from './FormatfetchData';
import { FormatPrice } from '../../util/format';
import { useStyles, Container } from './styles';

const Dashboard = () => {
  const [load, setLoad] = useState(true);
  const classes = useStyles();
  const { dataCards, allContracts, dataCharts } = FetchData(setLoad);

  if (load) {
    return (
      <Container>
        <CircularProgress />
      </Container>);
  }
  return (
    <div className={classes.root}>
      <div className={classes.childrenRoot}>
        <Paper className={classes.paper} elevation={8}>
          <Typography
            className={classes.typograyCardsTitle}
            variant="h5"
            component="h5"
          >
            Valor recebido <br />
          </Typography>

          <Typography
            className={classes.typograyCardsSubtitle}
            variant="h6"
            component="h6"
          >
            ultimo mês
          </Typography>

          <Typography
            className={classes.typograyCardsValorUp}
            variant="h2"
            component="h2"
          >
            {FormatPrice(dataCards)}
          </Typography>

          <Typography
            className={classes.typograyCardsValorUp}
            variant="h2"
            component="h2"
          >
            <ArrowUpwardIcon fontSize={'large'} />
          </Typography>
        </Paper>

        {allContracts.map(item => (
          <Paper key={item.label} className={classes.paper} elevation={2}>
            <Typography
              className={classes.typograyCardsTitle}
              variant="h5"
              component="h5"
            >
              {item.label}
              <br />
            </Typography>
            <Typography
              className={classes.typograyCardsSubtitle}
              variant="h6"
              component="h6"
            >
              {item.referencia}
            </Typography>

            <Typography
              className={`${item.classes}`}
              variant="h2"
              component="h2"
            >
              {item.value}
            </Typography>

            <Typography
              className={`${item.classes}`}
              variant="h2"
              component="h2"
            >
              {item.icon}
            </Typography>
          </Paper>
        ))}
      </div>

      <div className={classes.childrenRoot2}>
        {dataCharts.map((item: any) => (
          <Paper key={item.label} className={item.classeGraph}>
            <span>{item.label}</span>
            <Chart data={item.value} rotated>
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                valueField={item.valueField}
                argumentField={item.argumentField}
              />
              <EventTracker />
              <HoverState />
            </Chart>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
