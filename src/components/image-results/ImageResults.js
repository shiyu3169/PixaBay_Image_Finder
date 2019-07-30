import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList/";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Divider } from "material-ui";

class ImageResults extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  render() {
    let imageListContent = null;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return <div>{imageListContent}</div>;
  }
}

export default ImageResults;
