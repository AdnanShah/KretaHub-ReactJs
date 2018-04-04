import React from 'react';
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import tileData from './tileData';


function TitlebarGridList() {
    return (
        <div className="gl-list">
            <GridList cellHeight={180} className="gl">
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                    <Subheader component="div">December</Subheader>
                </GridListTile>
                {tileData.map((tile, index) =>
                        <GridListTile key={index}>
                            <img src={tile.img} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={
                                    <span>
                  by: {tile.author}
                </span>
                                }
                                actionIcon={
                                    <IconButton>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>,
                )}
            </GridList>
        </div>
    );
}

export default TitlebarGridList;