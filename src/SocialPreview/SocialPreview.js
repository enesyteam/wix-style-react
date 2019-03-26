import React from 'react';
import PropTypes from 'prop-types';
import style from './SocialPreview.st.css';

import Text from '../Text';
import ImageViewer from '../ImageViewer';

/**
 * A displayer for a social post
 */
class SocialPreview extends React.PureComponent {
  static displayName = 'SocialPreview';

  static propTypes = {
    dataHook: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    previewUrl: PropTypes.string,
    imageViewerProps: PropTypes.object,
  };

  static defaultProps = {
    title: 'Click me!',
    description: 'A description for the displayed item',
    previewUrl: 'www.site-name.com',
  };

  render() {
    const { title, description, previewUrl, imageViewerProps } = this.props;

    return (
      <div {...style('root', {}, this.props)}>
        <ImageViewer
          className={style.imageViewer}
          {...imageViewerProps}
          width="100%"
          height="144px"
          dataHook="socialPreview-imageViewer"
        />
        <div className={style.container}>
          <div>
            <Text
              weight="normal"
              size="tiny"
              light={false}
              dataHook="socialPreview-url"
              className={style.socialPreviewUrl}
              ellipsis
            >
              {previewUrl.toUpperCase()}
            </Text>
          </div>
          <div>
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
          </div>
          <div>
            <Text
              weight="thin"
              size="tiny"
              light={false}
              dataHook="socialPreview-description"
              className={style.socialPreviewdescription}
              ellipsis
            >
              {description}
            </Text>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialPreview;
