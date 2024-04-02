'use client';
import React, { useState } from 'react';
import { Typography, Box, Modal, TextField, Button, IconButton } from '@mui/material';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Image from 'next/image';
import Banner from '../app/image/Banner.png';
import { v4 } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';

// Import Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../app/utils/firebase';

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [img, setImage] = useState('');
  const [error, setError] = useState(null); // Define error state

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const imgsRef = ref(storage, `Imgs/${v4()}`);
      await uploadBytes(imgsRef, file);
      const imgUrl = await getDownloadURL(imgsRef);
      setImage(imgUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    await addDoc(collection(db, 'checkIns'), { title, image: img });

    // Reset form and close modal
    form.reset();
    handleCloseModal();
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '279px', marginTop: '2rem' }}>
        <Image src={Banner} layout="fill" objectPosition="center" alt="Banner" />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, transparent 100%)',
          marginTop: '2rem',
          borderRadius: '20px 2% 8% 16%',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '48%',
          left: '18%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontSize: '36px' }}>
          Hi! 👋 James Doe
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontSize: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <button
          onClick={handleOpenModal}
          style={{
            backgroundColor: '#7B5AFF',
            padding: '6.4px 15px',
            borderRadius: '999px',
            width: '166px',
            marginTop: '1.8rem',
            height: '54px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Add Check in
        </button>
      </Box>

      {openModal && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: '#fff', // Light grey background color
              boxShadow: 24,
              width: '572px',
              height: '520px',
              borderRadius: '10px',
              outline: 'none',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, background: '#f0f0f0', padding: '0.6rem', borderRadius: '10px  10px  0 0' }}>
              <h3 id="modal-modal-title">Add Check-in</h3>
              <IconButton onClick={handleCloseModal} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ padding: '1rem 2.5rem' }}>
              <form onSubmit={handleSubmit} sx={{ margin: '2rem' }}>
                <div>
                  <Box sx={{ fontWeight: 'bold' }}>
                    <label htmlFor="title">Title:</label>
                  </Box>
                  <TextField
                    id="title"
                    name="title" // Add name attribute to the TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  />
                </div>
                <Box sx={{ fontWeight: 'bold', padding: '1rem 0' }}>
                  <label htmlFor="title">Upload Image:</label>
                </Box>
                <div style={{ border: '2px dashed #bbbbbb', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    multiple
                    type="file"
                    onChange={handleUpload} // Call handleUpload function on file selection
                  />
                  <label htmlFor="image-upload">
                    <IconButton color="primary" component="span" sx={{color:'#7B5AFF' }}>
                      <FileUploadIcon />
                    </IconButton>
                  </label>
                  <Typography variant='h6' sx={{ padding: '0.8rem 2rem' }}>Click or drag file to this area to upload</Typography>
                  <Typography variant='body1' sx={{ color: 'grey' }}>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</Typography>
                </div>
                <div style={{ flex: 1, justifyContent: 'flex-end', marginTop: '1rem', marginLeft: '70%' }}>
                  <Button onClick={handleCloseModal} color="secondary" sx={{
                    backgroundColor: '#fff', // White background color for Cancel button
                    borderRadius: '999px',
                    color: '#7B5AFF', // Text color for Cancel button
                  }}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary" sx={{
                    backgroundColor: '#7B5AFF',
                    borderRadius: '999px',
                  }}>
                    Add
                  </Button>
                </div>
              </form>
            </Box>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default Header;
