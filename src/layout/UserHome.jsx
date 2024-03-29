import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  // โค้ด CSS ที่ใช้สำหรับการกำหนดสไตล์ของคอมโพเนนต์
  serverButton: {
    border: '2px solid #ffffff',
    borderRadius: '10px',
    padding: theme.spacing(1),
    transition: 'border-color 0.3s ease',
    '&:hover': {
      borderColor: '#ff5722',
    },
  },
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    backgroundImage: 'url("https://store-images.s-microsoft.com/image/apps.2678.14492077886571533.a48e9a4a-99a7-44a9-9d97-9e8e72220a7c.6b98c506-61b7-4126-80b6-449f2ff0fb96?q=90&w=1920&h=1080")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(4),
    opacity: 0.9,
    width: '100vw',
    height: '100vh',
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    color: '#ffffff',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  button: {
    color: '#ffffff',
    backgroundColor: '#007bff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
}));

function Home() {
  const classes = useStyles();

  const handleRent = (packageType) => {
    // เขียนโค้ดเพื่อจัดการการเช่าสินค้าตาม packageType
    console.log(`Renting ${packageType}`);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        โฮสติ้งเซิฟมายคราฟ 
      </Typography>
      <Typography variant="h2" className={classes.title}>
        Minecraft
      </Typography>
      <Typography variant="h2" className={classes.title}>
        ที่ปรับแต่งได้เต็มที่
      </Typography>
      <Typography variant="h3" className={classes.title}>
        นิยมมากที่สุด
      </Typography>

      <Grid container className={classes.buttonContainer}>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" className={`${classes.button} ${classes.serverButton}`} onClick={() => handleRent('UltraPlan')}>
            UltraPlan 4v Cpu/RAM6GB
            Disk:40 
            ชั่วโมงละ:1.10B
            เซิฟ1 30วัน 790บาท
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" className={`${classes.button} ${classes.serverButton}`} onClick={() => handleRent('Proplan')}>
            Proplan
            3v Cpu/RAM3GB
            Disk:25GB
            ชั่วโมงละ:0.47B
            เซิฟ2 30วัน 339บาท
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" className={`${classes.button} ${classes.serverButton}`} onClick={() => handleRent('UltraSever')}>
            UltraSever
            3v Cpu/ RAM 6GB
            Disk :50GB
            ชั่วโมงละ:1.51B
            เซิฟ3 30วัน 
1090บาท
</Button>
</Grid>
</Grid>
</Container>
);
}

export default Home;
