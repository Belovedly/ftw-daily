import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import ballardImage from './images/location_ballard_play.jpg';
import capitolHillImage from './images/location_capitol_hill_montessori.jpg';
import columbiaCityImage from './images/location_columbia_city_stem.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Ballard',
          ballardImage, // TODO: play-based image
          '?address=Ballard%2C%20Seattle&bounds=47.69895644%2C-122.36122854%2C47.65138589%2C-122.412164'
        )}
        {locationLink(
          'Capitol Hill',
          capitolHillImage, // TODO: Montessori-inspired image
          '?address=Capitol%20Hill%2C%20Seattle&bounds=47.66329703%2C-122.27345772%2C47.59227174%2C-122.34943804'
        )}
        {locationLink(
          'Columbia City',
          columbiaCityImage, // TODO: STEM-focused image
          '?address=Columbia%20City%2C%20Seattle&bounds=47.59091453%2C-122.25575513%2C47.53102513%2C-122.32195037'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
