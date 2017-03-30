import React, { PropTypes } from 'react';
import { RoutesProvider } from '../components';
import routesConfiguration from '../routesConfiguration';
import { renderDeep, renderShallow } from './test-helpers';
import * as propTypes from './propTypes';
import { createResourceLocatorString, flattenRoutes, withFlattenedRoutes } from './routes';

const { arrayOf } = PropTypes;

describe('util/routes.js', () => {
  describe('withFlattenedRoutes', () => {
    it('should inject the provided routes', () => {
      const CompComp = props => <div>{props.flattenedRoutes[0].name}</div>;
      CompComp.propTypes = { flattenedRoutes: arrayOf(propTypes.route).isRequired };
      const Comp = withFlattenedRoutes(CompComp);
      const routes = [{ name: 'SomePage', path: 'some-page', component: () => null }];
      const shallowTree = renderShallow(
        <RoutesProvider flattenedRoutes={routes}>
          <Comp />
        </RoutesProvider>
      );
      expect(shallowTree).toMatchSnapshot();
      const deepTree = renderDeep(
        <RoutesProvider flattenedRoutes={routes}>
          <Comp />
        </RoutesProvider>
      );
      expect(deepTree).toMatchSnapshot();
    });
  });

  describe('createResourceLocatorString', () => {
    const flattenedRoutes = flattenRoutes(routesConfiguration);

    it('should return meaningful strings if parameters are not needed', () => {
      // default links without params in path or search query
      expect(
        createResourceLocatorString('SearchPage', flattenedRoutes, undefined, undefined)
      ).toEqual('/s');
      expect(createResourceLocatorString('SearchPage', flattenedRoutes, {}, {})).toEqual('/s');
    });

    it('should return meaningful strings with path parameters', () => {
      expect(
        createResourceLocatorString(
          'ListingPage',
          flattenedRoutes,
          { id: '1234', slug: 'nice-listing' },
          {}
        )
      ).toEqual('/l/nice-listing/1234');
      expect(() =>
        createResourceLocatorString('ListingPage', flattenedRoutes, {}, {})).toThrowError(
        TypeError('Expected "slug" to be defined')
      );
      expect(() =>
        createResourceLocatorString(
          'ListingPage',
          flattenedRoutes,
          { id: '1234' },
          {}
        )).toThrowError(TypeError('Expected "slug" to be defined'));
      expect(() =>
        createResourceLocatorString(
          'ListingPage',
          flattenedRoutes,
          { slug: 'nice-listing' },
          {}
        )).toThrowError(TypeError('Expected "id" to be defined'));
    });

    it('should return meaningful strings with search parameters', () => {
      expect(createResourceLocatorString('SearchPage', flattenedRoutes, {}, { page: 2 })).toEqual(
        '/s?page=2'
      );
      expect(
        createResourceLocatorString(
          'SearchPage',
          flattenedRoutes,
          {},
          { address: 'Helsinki', page: 2 }
        )
      ).toEqual('/s?address=Helsinki&page=2');
    });

    it('should return meaningful strings with path and search parameters', () => {
      expect(
        createResourceLocatorString(
          'ListingPage',
          flattenedRoutes,
          { id: '1234', slug: 'nice-listing' },
          { extrainfo: true }
        )
      ).toEqual('/l/nice-listing/1234?extrainfo=true');
    });
  });
});