import React, { useEffect, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../services/MockedApi';
import { FormatPrice } from '../../util/format';

const useStyles = makeStyles(theme => ({
  typograyCardsValorUp: {
    fontSize: '22px',
    color: '#255f2a',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
  typograyCardsValorDown: {
    fontSize: '22px',
    color: '#b91a1a',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
  [theme.breakpoints.down('md')]: {
    graph: {
      width: '100% !important',
    },
    graph1: {
      width: '100% !important',
    },
  },
  graph: {
    width: '35%',
    height: '20%',
    fontSize: '18px',
    color: '#161212',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
  graph1: {
    width: '20%',
    height: '20%',
    fontSize: '18px',
    color: '#a32f2f',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
}));

function FetchData(setLoad: any) {
  const classes = useStyles();

  const [data, setData] = useState<any>({});
  const [dataCards, setDataCards] = useState<any>([]);
  const [contracts, setContracts] = useState<any>({});
  const [dataCharts, setDataCharts] = useState<any>([]);

  useEffect(() => {
    async function LoadData() {
      const response = await api.get('');
      setData(response.data);
      setLoad(false);
    }
    LoadData();
  }, [setLoad]);

  useEffect(() => {
    Object.values(data).map((a: any) =>
      setDataCards(a.dataCards.billing.monthlyBilling)
    );
    Object.values(data).map((a: any) => setContracts(a.dataCards.contracts));

    Object.values(data).map((a: any) =>
      setDataCharts(a.dataCharts.monthlyContractOverdue)
    );
    const DataChartsV: any = [];

    Object.values(data).map((a: any) =>
      DataChartsV.push(
        a.dataCharts.monthlyContractOverdue,
        a.dataCharts.totalPaid,
        a.dataCharts.totalSold
      )
    );
    const formatValues = DataChartsV.map((item: any) => {
      return item.labels.map((child: any, indice: any) => ({
        Mes: item.labels[indice],
        ContratoAtrasado: item.series[0][indice],
      }));
    });

    if (typeof formatValues[0] !== 'undefined') {
      setDataCharts([
        {
          value: formatValues[0],
          label: 'Contratatos atrasados mes/mes',
          classeGraph: classes.graph1,
          valueField: 'ContratoAtrasado',
          argumentField: 'Mes',
        },
        {
          value: formatValues[1],
          label: 'Total a receber mes/mes',
          classeGraph: classes.graph,
          valueField: 'ContratoAtrasado',
          argumentField: 'Mes',
        },
        {
          value: formatValues[2],
          label: 'Total vendido mes/mes',
          classeGraph: classes.graph,
          valueField: 'ContratoAtrasado',
          argumentField: 'Mes',
        },
      ]);
    }
  }, [data, classes.graph, classes.graph1]);
  const allContracts = [
    {
      value: contracts.activeContracts,
      label: 'Contratos Ativos',
      referencia: 'ultimo mês',
      icon: <CheckIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorUp,
    },
    {
      value: contracts.overdueContracts,
      label: 'Pagamentos atrasado',
      referencia: 'a receber/mes corrente',
      icon: <SmsFailedIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorDown,
    },
    {
      value: FormatPrice(contracts.overdueValue),
      label: 'Valor atrasado',
      referencia: 'a receber/mes corrente',
      icon: <SmsFailedIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorDown,
    },
    {
      value: contracts.soldContracts,
      label: 'Contratos Novos',
      referencia: 'fechados no mes corrente',
      icon: <CheckIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorUp,
    },
    {
      value: contracts.totalContracts,
      label: 'Total de contratos',
      referencia: 'fechados no ano',
      icon: <CheckIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorUp,
    },
    {
      value: FormatPrice(contracts.totalReceivedValue),
      label: 'Total de valor a receber',
      referencia: 'a receber/mes corrente',
      icon: <CheckIcon fontSize={'large'} />,
      classes: classes.typograyCardsValorUp,
    },
  ];
  return { dataCards, allContracts, dataCharts };
}

export { FetchData };
