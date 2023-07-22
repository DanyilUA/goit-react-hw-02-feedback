import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
            <ul className='list'>
                {options.map(option => {
                    return (
                      <li className="item" key={option}>
                        <button
                          className="button"
                          type="buttom"
                          onClick={() => onLeaveFeedback(option)}
                        >
                          {option}
                        </button>
                      </li>
                    );
                })}
            </ul>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

