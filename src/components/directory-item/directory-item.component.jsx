import {BgrdImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx'

const DirectoryItem = ( { category }) => {
    const { imageUrl,title } = category;
return (

    <DirectoryItemContainer>
        {/* <img /> */}
          <BgrdImage imageUrl={imageUrl}/>
            <Body>
              <h2>{title}</h2>
              <p>Buy Now</p>
            </Body>
            </DirectoryItemContainer>

)

}

export default DirectoryItem;