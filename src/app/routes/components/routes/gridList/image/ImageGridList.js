import React from 'react';
import GridList, {GridListTile} from 'material-ui/GridList';
import tileData from './tileData';

function ImageGridList() {
    return (
        <div className="gl-image">
            <GridList cellHeight={160} className="gl" cols={3}>
                {tileData.map((tile, index) =>
                    <GridListTile key={index} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title}/>
                    </GridListTile>,
                )}
            </GridList>
        </div>
    );
}

export default ImageGridList;