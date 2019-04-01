import React from 'react';
import PropTypes from 'prop-types';
import style from './SocialPreview.st.css';

import Text from '../Text';
import ImageViewer from '../ImageViewer';

/**
 * A displayer for a social post
 */
class SocialPreview extends React.Component {
  static displayName = 'SocialPreview';

  static propTypes = {
    dataHook: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    previewUrl: PropTypes.string,
    imageViewerProps: PropTypes.object,
    media: PropTypes.func,
  };

  render() {
    const { title, description, previewUrl, media } = this.props;

    return (
      <div {...style('root', {}, this.props)}>
        {media && media()}
        <div className={style.container}>
          <Text
            weight="normal"
            size="tiny"
            light={false}
            dataHook="socialPreview-url"
            className={style.socialPreviewUrl}
            ellipsis
          >
            {previewUrl && previewUrl.toUpperCase()}
          </Text>
          <Text
            weight="bold"
            size="small"
            light={false}
            dataHook="socialPreview-title"
            className={style.socialPreviewTitle}
            ellipsis
          >
            {title}
          </Text>
          <Text
            weight="thin"
            size="tiny"
            light={false}
            dataHook="socialPreview-description"
            className={style.socialPreviewDescription}
            ellipsis
          >
            {description}
          </Text>
        </div>
      </div>
    );
  }
}

export default SocialPreview;
