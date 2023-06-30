import PropTypes from 'prop-types';

Statistics.prototypes = {
  title : PropTypes.string,
  stats : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string, 
    label :PropTypes.string, 
    percentage : PropTypes.number
  }))
}


export function Statistics(props) {

  const {
    title,
    stats
  } = props;

  const MarkUp = stats.map(({id, label, percentage}) => {
    return (
      <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
      </li>
      )
    });
    

  return ( 
    <section class="statistics">
      {title && (<h2 class="title">{title}</h2>)}
         
      <ul class="stat-list">
         {MarkUp }
      </ul>
    </section>)
};