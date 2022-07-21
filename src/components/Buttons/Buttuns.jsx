import { ItemButton, Button } from 'components/Buttons/buttons.style';
import PropTypes from 'prop-types';

export const Buttons = ({ options, ratingPlus }) => {
  return (
    <>
      <ItemButton>
        {options.map(option => {
          return (
            <Button
              type="button"
              onClick={() => {
                ratingPlus(option);
              }}
              key={option}
            >
              {option}
            </Button>
          );
        })}
      </ItemButton>
    </>
  );
};

Buttons.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  ratingPlus: PropTypes.func.isRequired,
};
