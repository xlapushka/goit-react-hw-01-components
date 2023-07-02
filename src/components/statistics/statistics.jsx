import PropTypes from 'prop-types';
import css from './statistics.module.css'

Statistics.propTypes = {
  title : PropTypes.string,
  stats : PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string.isRequired, 
    label :PropTypes.string.isRequired, 
    percentage : PropTypes.number.isRequired
  }))
}

const Color = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export function Statistics(props) {

  const {
    title,
    stats
  } = props;

  
  // const MarkUp = stats.map(({id, label, percentage}) => {
  //   return (
  //     <li className={css.item} key={id} style={{background: `${Color()}`, width: `${percentage}%`}}>
  //           <span className={css.label}>{label}</span>
  //           <span className={css.percentage}>    {percentage}%</span>
  //     </li>
  //     )
  //   });

  return ( 
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
         
      <ul className={css.statList}>
         {stats.map(({id, label, percentage}) => {
            return (
              <li className={css.item} key={id} style={{background: `${Color()}`, width: `${percentage}%`}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>    {percentage}%</span>
              </li>
              )
            }) 
          }
      </ul>
    </section>
  )
};