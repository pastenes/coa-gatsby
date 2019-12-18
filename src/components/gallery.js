import React from "react"
import { graphql } from "gatsby"

export const CoreGalleryBlockFragment = `
  fragment CoreGalleryBlockFragment on CoreGalleryBlock {
    attributes {
      caption
      className
      columns
      imageCrop
      images
    }
    originalContent
  }`

const CoreGalleryBlock = props => (
  <figure className="wp-block-gallery columns-4 is-cropped">
    <ul className="blocks-gallery-grid">
      { console.log(props)
      /* {props.attributes.images.map(image => (
        <li className="block-gallery-item">
          <figure><img src={image.url} /></figure>
        </li>
      ))} */}
    </ul>
  </figure>
)

export default CoreGalleryBlock