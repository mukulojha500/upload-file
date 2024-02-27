import React, { useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import './Upload.css'


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function Upload() {
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileRef.current.click();
  }

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  }

  const handleDelete = () => setFile(null);

  const handleUpload = () =>{
    console.log('uploded');
    setFile(null);
  }

  return (
    <div className='container'>
      {file && <div className='fileName'>{file.name.length < 20 ? file.name : file.name.substring(0, 20) + '...'}<DeleteRoundedIcon className='icon' onClick={handleDelete} />
      </div>}
      {file &&
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onClick={handleUpload}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
      }
      <input style={{ display: 'none' }} type='file' ref={fileRef} onChange={handleFile} />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onClick={handleClick}
      >
        Choose file to Upload
        <VisuallyHiddenInput type="file" />
      </Button>
    </div>
  )
}

export default Upload