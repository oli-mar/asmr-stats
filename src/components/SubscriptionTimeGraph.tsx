import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, TooltipProps, Legend } from 'recharts';
import eloSearchListResponse from '../testData/eloSearchListResponse.json';
import eloVideoListResponse from '../testData/eloVideoListResponse.json';
import eloChannelListResponse from '../testData/eloChannelListResponse.json';

interface IGraphItemData {
  readonly hour: number;
  readonly day: number;
  readonly title: string;
  readonly viewSubRatio: number;
}

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDate = new Date();

const differenceInDays = (firstDate: Date, secondDate: Date) => {
  return Math.round((secondDate.getTime() - firstDate.getTime())/(1000*60*60*24));
}

const parsedEloData = eloSearchListResponse.items.map((item) => {
  const date = new Date(item.snippet.publishedAt);
  const correspondingVideoStatistics = eloVideoListResponse.items.find(video => video.id === item.id.videoId);
  const correspondingChannelStatistics = eloChannelListResponse.items.find(channel => channel.id === item.snippet.channelId);
  if (correspondingVideoStatistics && correspondingChannelStatistics) {
    const viewCount = parseFloat(correspondingVideoStatistics.statistics.viewCount);
    const subscriberCount = parseFloat(correspondingChannelStatistics.statistics.subscriberCount);
    return {
      hour: date.getHours() + (date.getMinutes() / 60),
      day: date.getDay(),
      title: item.snippet.title,
      viewSubRatio: (viewCount / subscriberCount) * (1 - (0.005 * differenceInDays(date, currentDate)))
    }
  }
  return null as any as IGraphItemData;
}).filter(x => !!x);

export default class SubscriptionTimeGraph extends React.Component {
  
	public render () {
    console.log(parsedEloData);
    const range = [10, 1000];
    const xTickFormatter = (value: number) => value >= 0 && value < 7 ? days[value] : '';

    return (
      <div>
        <ScatterChart width={800} height={600} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
          <XAxis type="number" dataKey="day" name="day" domain={[-1, 7]} tickCount={9} tickFormatter={xTickFormatter}/>
          <YAxis type="number" dataKey="hour" unit="h" domain={[0, 24]} tickCount={10}/>
          <ZAxis type="number" dataKey="viewSubRatio" range={range}/>
          <Tooltip cursor={{strokeDasharray: '3 3'}} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
          <Scatter data={parsedEloData} shape={this.renderShape} />
        </ScatterChart>
      </div>
    );
  }
  
	private renderTooltip(props: TooltipProps) {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10 }}>
          <p>{data.title}</p>
          <p>{data.viewSubRatio}</p>
        </div>
      );
    }

    return null;
  }

  private renderShape(props: any) {
    const { cx, cy, size, x, y, height } = props;
    const radius = height  / 2;
    return (
      <circle cx={x + radius} cy={y + radius} r={radius} fill="violet" fillOpacity="0.7"/>
    )
  }
};
