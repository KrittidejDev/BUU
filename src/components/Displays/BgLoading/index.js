import React, { useEffect, useState, useRef } from 'react';
// import PropTypes from 'prop-types'
import { LoadingStyled } from './styled';
import cx from 'classnames';
import { Icons } from '@/components';

const Loading = ({ theme_standard_loading, visible }) => {
  const customClass = cx({
    theme_standard_loading: theme_standard_loading,
  });

  let loadingRef = useRef();
  const [_isLoading, _setIsLoading] = useState(false);

  useEffect(() => {
    _setIsLoading(visible ? true : false);
    if (visible) {
      loadingRef.current = setTimeout(() => {
        _setIsLoading(false);
      }, 6000);
    } else {
      loadingRef.current && clearTimeout(loadingRef.current);
    }
    return () => {
      _setIsLoading(false);
      clearInterval(loadingRef.current);
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LoadingStyled visible={_isLoading}>
      <div className={customClass}>
        <Icons.Loading />
      </div>
    </LoadingStyled>
  );
};

Loading.propTypes = {};

export default Loading;
