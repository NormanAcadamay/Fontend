import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundImage: 'url("https://store-images.s-microsoft.com/image/apps.2678.14492077886571533.a48e9a4a-99a7-44a9-9d97-9e8e72220a7c.6b98c506-61b7-4126-80b6-449f2ff0fb96?q=90&w=1920&h=1080")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

  return (
    <Container disableGutters className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        โฮสติ้งเซิฟมายคราฟ
      </Typography>

      <Typography variant="h2" className={classes.title}>
        Minecraft
      </Typography>
      <Typography variant="h2" className={classes.title}>
        ที่ปรับแต่งได้เต็มที่
      </Typography>

      <Typography variant="body1" className={classes.paragraph}>
        ยินดีต้อนรับสู่ระบบเช่า Server
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        เช่า Server เพื่อให้บริการการโฮสติ้งเว็บไซต์หรือแอปพลิเคชันของคุณ
      </Typography>
      <ul>
        <li style={{ color: '#ffffff' }}>เลือกแพ็กเกจที่ตรงกับความต้องการของคุณ</li>
        <li style={{ color: '#ffffff' }}>สร้างและกำหนดค่า Server ตามที่คุณต้องการ</li>
        <li style={{ color: '#ffffff' }}>จัดการ Server และข้อมูลของคุณอย่างมีประสิทธิภาพ</li>
      </ul>
      <Typography variant="body1" className={classes.paragraph}>
        ลงทะเบียนหรือเข้าสู่ระบบเพื่อเริ่มต้นใช้งาน
      </Typography>
      <Grid container spacing={2} className={classes.buttonContainer}>
        <Grid item>
          <Button variant="contained" className={classes.button} component="a" href="/register">
            ลงทะเบียน
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.button} href="/">
            เข้าสู่ระบบ
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
