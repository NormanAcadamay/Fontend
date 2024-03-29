import React, { useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2', // เปลี่ยนสี primary ตามต้องการ
    },
    secondary: {
      main: '#ff5722', // เปลี่ยนสี secondary ตามต้องการ
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("https://store-images.s-microsoft.com/image/apps.2678.14492077886571533.a48e9a4a-99a7-44a9-9d97-9e8e72220a7c.6b98c506-61b7-4126-80b6-449f2ff0fb96?q=90&w=1920&h=1080")',
    backgroundSize: 'cover', // ทำให้ภาพเต็มจอ
    backgroundPosition: 'center', // จัดตำแหน่งให้อยู่ตรงกลาง
    padding: theme.spacing(4),
    opacity: 0.8,
  },
  paper: {
    width: 400,
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // กำหนดสีพื้นหลังของ Paper เป็นสีที่มีความโปร่งแสง
    backdropFilter: 'blur(5px)', // เพิ่มเอฟเฟค blur ให้กล่องเติมเงิน
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // จัดให้ส่วนของ Paper อยู่ตรงกลาง
  },
  title: {
    marginBottom: theme.spacing(2),
    color: '#ffffff', // กำหนดสีของ Typography
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(4, 0),
  },
  imageInput: {
    display: 'none',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: 200,
  },
}));

function TopUpPage() {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(null);
  const [topUpMessage, setTopUpMessage] = useState('');

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleTopUp = () => {
    // Handle top-up logic here
    console.log('Top-up processed successfully');
    setTopUpMessage('ตรวจสอบสำเร็จ');
    // Show pop-up or alert
    alert('ตรวจสอบสำเร็จ');
  };

  const handleAddImageClick = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          ช่องทางการชำระเงิน
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            Qr Code
          </Typography>
          <div className={classes.imageContainer}>
            <input
              accept="image/*"
              className={classes.imageInput}
              id="imageInput"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="imageInput">
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://via.placeholder.com/350'} alt="Preview" className={classes.previewImage} />
            </label>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddImageClick}
            className={classes.button}
          >
            เพิ่มรูปภาพ
          </Button>
          <TextField
            label="กรอกจำนวนเงินตามสลิป"
            variant="outlined"
            className={classes.textField}
            // เมื่อคลิกที่ TextField ให้ทำเหมือนกับการคลิกที่ปุ่ม "เพิ่มรูปภาพ"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleTopUp}
            className={classes.button}
          >
            ตรวจสอบ
          </Button>
          <Typography variant="body1" color="textPrimary">
            {topUpMessage}
          </Typography>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default TopUpPage;
