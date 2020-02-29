import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panelBody: { justifyContent: 'space-between' },
  levelLink: { textDecoration: 'none' },
}));

const Pos = (props) => {
  const { pos } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const TEMPlabelsDefault = 'en';
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const levelsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const expansionPanel = Object.keys(pos).map((key, i) => (
    <ExpansionPanel expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={key}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${i}bh-content`}
        id={`panel${i}bh-header`}
      >
        <Typography className={classes.heading}>{pos[key][TEMPlabelsDefault]}</Typography>
        <Typography className={classes.secondaryHeading} />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelBody}>
        {levelsArray.slice(0, pos[key].levels).map((l) => (
          <Link to={`play/${key}/${l}`} key={`${key}-${l}`} className={classes.levelLink}>
            <Button variant="contained" tabIndex="-1">Level {l}</Button>
          </Link>
        ))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));

  return <>{expansionPanel}</>;
};

Pos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pos: PropTypes.object.isRequired,
};


export default Pos;
