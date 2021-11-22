import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import "./MediaCard.css";


export default function MediaCard() {

  return (
    <Card id="'socialCard">
      <CardActionArea>
        <div className="header">
          <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/84_Dev-512.png" alt="" />
          <h1 className="title">Learning React? Start Small</h1>
          <div className="auther">
            <div className="autherWrapper">
              <h1>Laurine Praise</h1>
              <Avatar alt="avatar" src="https://media.istockphoto.com/photos/closeup-profile-of-business-woman-looking-forward-picture-id466807030?b=1&k=20&m=466807030&s=170667a&w=0&h=3BJPlxFDPA3fF03WR9fvKaIIxH0CbXkshSZNxtuoJcw=" />


            </div>
          </div>

        </div>
        <CardContent>
          <h3 style={{marginTop: 0}}>
            <b>Learning React? Start Small</b>
          </h3>
          <p style={{fontSize: "0.9rem"}}>
            Can't pry yourself away from the tutorials?
            the cure is to make tiny
            little experiment apps.
          </p>
          <p style={{fontSize: "0.9rem",color: "#aaa"}}>dev.io</p>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}