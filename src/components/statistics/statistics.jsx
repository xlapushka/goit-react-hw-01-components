import PropTypes from 'prop-types';

export function Statistics(props) {

  const MarkUp = props.stats.map(({id, label, percentage}) => {
    return (
      <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
      </li>
      )
    });

  return ( 
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
         {MarkUp }
      <ul class="stat-list">
  
      </ul>
    </section>)
};