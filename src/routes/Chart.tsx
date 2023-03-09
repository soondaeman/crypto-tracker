<<<<<<< HEAD
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
=======
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
>>>>>>> cd1ce75318e8ee61f458e269b842d4a31d02f7eb

interface ChartProps {
  coinId: string;
}

<<<<<<< HEAD
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'Price',
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: false },
            theme: { mode: 'dark' },
            stroke: { curve: 'smooth', width: 4 },
            yaxis: { show: false },
            xaxis: {
              labels: {
                show: false,
                datetimeFormatter: {
                  month: "MMM 'yy",
                },
              },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: data?.map((price) =>
                new Date(Number(price.time_close) * 1000).toISOString()
              ),
              type: 'datetime',
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#4bcffa'],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
=======
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return <h1>Chart</h1>;
>>>>>>> cd1ce75318e8ee61f458e269b842d4a31d02f7eb
}

export default Chart;
