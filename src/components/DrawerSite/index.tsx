import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  ListItemText,
  Collapse,
  Divider,
  Drawer,
  ListItem,
  List,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useStyles } from './styles';

import Icon from '@material-ui/core/Icon';

const MenuBar = ({
  menuItems,
  mobileOpen,
}: {
  menuItems: any;
  mobileOpen: any;
}) => {
  const classes = useStyles();
  const [handleValue, sethandleValue] = useState<any>({});

  const handleClick = (item: any) => {
    sethandleValue({ [item]: !handleValue[item] });
  };

  const handler = (children: any) => {
    return children.map((subOption: any) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link className={classes.listitemIco} to={subOption.url}>
                <Icon>{subOption.icon}</Icon><ListItemText className={classes.listitemText} inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <Icon>{subOption.icon}</Icon>
            <ListItemText inset primary={subOption.name} />
            {handleValue[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={handleValue[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        open={mobileOpen}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: mobileOpen,
          [classes.drawerClose]: !mobileOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: mobileOpen,
            [classes.drawerClose]: !mobileOpen,
          }),
        }}
      >
        <div>
          <List>
            <ListItem key="menuHeading" divider disableGutters>
              <ListItemText inset primary="Nested Menu" />
            </ListItem>
            {handler(menuItems.data)}
            <Divider />
            {handler(menuItems.system)}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default MenuBar;
